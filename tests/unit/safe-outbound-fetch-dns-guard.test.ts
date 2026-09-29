// `guard: "public-only"` used to judge the URL's host name only, so a name that resolves to a
// loopback or private address got through. These tests make a name resolve to a real loopback
// listener (both for the guard's own lookup and for the connection the request makes) and count
// what reaches it.
import test from "node:test";
import assert from "node:assert/strict";
import dns from "node:dns";
import http from "node:http";
import type { AddressInfo } from "node:net";

const { safeOutboundFetch, SafeOutboundFetchError } =
  await import("../../src/shared/network/safeOutboundFetch.ts");

const ALIASES: Record<string, string> = {
  "internal.alias.test": "127.0.0.1",
  "metadata.alias.test": "169.254.169.254",
  "lan.alias.test": "10.1.2.3",
};

const originalLookup = dns.lookup;
const originalPromisesLookup = dns.promises.lookup;

function aliased(hostname: string): string | undefined {
  return ALIASES[hostname];
}

test.before(() => {
  // Everything that resolves a name in this process, the guard's lookup and the connection the
  // request makes, sees the aliases; other names go to the real resolver.
  (dns as any).lookup = (hostname: string, options: any, callback?: any) => {
    const cb = typeof options === "function" ? options : callback;
    const opts = typeof options === "function" ? {} : options || {};
    const address = aliased(hostname);
    if (!address) return (originalLookup as any)(hostname, options, callback);
    const family = address.includes(":") ? 6 : 4;
    process.nextTick(() =>
      opts.all ? cb(null, [{ address, family }]) : cb(null, address, family)
    );
    return undefined;
  };
  (dns.promises as any).lookup = async (hostname: string, options: any) => {
    const address = aliased(hostname);
    if (!address) return (originalPromisesLookup as any)(hostname, options);
    const entry = { address, family: address.includes(":") ? 6 : 4 };
    return options?.all ? [entry] : entry;
  };
});

test.after(() => {
  (dns as any).lookup = originalLookup;
  (dns.promises as any).lookup = originalPromisesLookup;
});

async function withListener<T>(run: (port: number, hits: () => number) => Promise<T>): Promise<T> {
  let count = 0;
  const server = http.createServer((_req, res) => {
    count += 1;
    res.end("internal secret");
  });
  await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", () => resolve()));
  try {
    return await run((server.address() as AddressInfo).port, () => count);
  } finally {
    await new Promise<void>((resolve) => server.close(() => resolve()));
  }
}

async function blockedBy(promise: Promise<unknown>): Promise<string | null> {
  try {
    await promise;
    return null;
  } catch (error) {
    return error instanceof SafeOutboundFetchError ? error.code : "OTHER";
  }
}

test("a name that resolves to loopback is refused and nothing reaches the listener", async () => {
  await withListener(async (port, hits) => {
    const code = await blockedBy(
      safeOutboundFetch(`http://internal.alias.test:${port}/`, {
        guard: "public-only",
        retry: false,
        timeoutMs: 2000,
      })
    );
    assert.equal(code, "URL_GUARD_BLOCKED");
    assert.equal(hits(), 0);
  });
});

test("names that resolve to link-local metadata or LAN addresses are refused", async () => {
  for (const host of ["metadata.alias.test", "lan.alias.test"]) {
    const code = await blockedBy(
      safeOutboundFetch(`http://${host}:9/`, { guard: "public-only", retry: false, timeoutMs: 500 })
    );
    assert.equal(code, "URL_GUARD_BLOCKED", host);
  }
});

test("one private answer among public ones is enough to refuse the name", async () => {
  const code = await blockedBy(
    safeOutboundFetch("http://mixed.alias.test:9/", {
      guard: "public-only",
      retry: false,
      timeoutMs: 500,
      dnsLookup: async () => [
        { address: "93.184.216.34", family: 4 },
        { address: "10.0.0.7", family: 4 },
      ],
    })
  );
  assert.equal(code, "URL_GUARD_BLOCKED");
});

test("a name that resolves only to public addresses is not blocked by the guard", async () => {
  const code = await blockedBy(
    safeOutboundFetch("http://public.alias.test:9/", {
      guard: "public-only",
      retry: false,
      timeoutMs: 500,
      dnsLookup: async () => [{ address: "93.184.216.34", family: 4 }],
    })
  );
  assert.notEqual(code, "URL_GUARD_BLOCKED");
});

test("a name that does not resolve is left to the request itself to fail", async () => {
  const code = await blockedBy(
    safeOutboundFetch("http://nxdomain.alias.test:9/", {
      guard: "public-only",
      retry: false,
      timeoutMs: 500,
      dnsLookup: async () => {
        throw new Error("ENOTFOUND");
      },
    })
  );
  assert.notEqual(code, "URL_GUARD_BLOCKED");
  assert.notEqual(code, null);
});

test("only guard public-only resolves the host; literals and other modes do not", async () => {
  let lookups = 0;
  const dnsLookup = async () => {
    lookups += 1;
    return [{ address: "93.184.216.34", family: 4 }];
  };
  await blockedBy(
    safeOutboundFetch("http://93.184.216.34:9/", {
      guard: "public-only",
      retry: false,
      timeoutMs: 300,
      dnsLookup,
    })
  );
  await blockedBy(
    safeOutboundFetch("http://other.alias.test:9/", {
      guard: "block-metadata",
      retry: false,
      timeoutMs: 300,
      dnsLookup,
    })
  );
  await blockedBy(
    safeOutboundFetch("http://other.alias.test:9/", {
      guard: "none",
      retry: false,
      timeoutMs: 300,
      dnsLookup,
    })
  );
  assert.equal(lookups, 0);
});

test("with pinDns the request connects to the address that was checked, not to a second answer", async () => {
  await withListener(async (port, hits) => {
    // The guard's lookup says public; the resolver the connection would use says loopback (a
    // name that changes its answer between the two lookups).
    const code = await blockedBy(
      safeOutboundFetch(`http://internal.alias.test:${port}/`, {
        guard: "public-only",
        pinDns: true,
        retry: false,
        timeoutMs: 800,
        dnsLookup: async () => [{ address: "93.184.216.34", family: 4 }],
      })
    );
    assert.notEqual(code, null, "the request cannot succeed against the checked address");
    assert.equal(hits(), 0, "nothing reached the loopback listener");
  });
});
