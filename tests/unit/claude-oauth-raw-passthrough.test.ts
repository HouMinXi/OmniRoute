/**
 * Claude OAuth raw passthrough (#13893).
 *
 * Per-connection opt-in (`providerSpecificData.rawPassthrough`) that lets a
 * native Claude client request skip CLI emulation (billing sentinel, tool
 * cloak, fingerprint rewrite) and body re-signing, forwarding the payload
 * byte-faithfully. Default off; behavior is unchanged unless explicitly
 * enabled on a Claude OAuth connection.
 */
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { isConnectionRawPassthrough } from "../../open-sse/utils/claudeRawPassthrough.ts";

describe("isConnectionRawPassthrough", () => {
  it("TC-07: returns false for non-object input", () => {
    assert.equal(isConnectionRawPassthrough(undefined), false);
    assert.equal(isConnectionRawPassthrough(null), false);
    assert.equal(isConnectionRawPassthrough("true"), false);
    assert.equal(isConnectionRawPassthrough(1), false);
    assert.equal(isConnectionRawPassthrough([true]), false);
    assert.equal(isConnectionRawPassthrough({}), false);
  });

  it("TC-04: falls back to nested legacy aliases when the top-level key is absent", () => {
    assert.equal(isConnectionRawPassthrough({ passthrough: { raw: true } }), true);
    assert.equal(isConnectionRawPassthrough({ passthrough: { rawPassthrough: true } }), true);
    assert.equal(isConnectionRawPassthrough({ passthrough: { raw: false } }), false);
  });

  it("TC-04b: ignores malformed nested aliases", () => {
    assert.equal(isConnectionRawPassthrough({ passthrough: null }), false);
    assert.equal(isConnectionRawPassthrough({ passthrough: [true] }), false);
    assert.equal(isConnectionRawPassthrough({ passthrough: { raw: "yes" } }), false);
  });

  it("TC-04c: pins nested precedence — passthrough.raw wins over passthrough.rawPassthrough", () => {
    assert.equal(
      isConnectionRawPassthrough({ passthrough: { raw: true, rawPassthrough: false } }),
      true
    );
    assert.equal(
      isConnectionRawPassthrough({ passthrough: { raw: false, rawPassthrough: true } }),
      false
    );
  });

  it("TC-04d: non-boolean top-level value falls through to nested aliases", () => {
    assert.equal(
      isConnectionRawPassthrough({ rawPassthrough: "yes", passthrough: { raw: true } }),
      true
    );
    assert.equal(isConnectionRawPassthrough({ rawPassthrough: null }), false);
    assert.equal(isConnectionRawPassthrough({ rawPassthrough: 1 }), false);
  });

  it("TC-11b: prototype-inherited flags never arm the escape hatch", () => {
    const inherited = Object.create({ rawPassthrough: true }) as Record<string, unknown>;
    assert.equal(isConnectionRawPassthrough(inherited), false);
    const inheritedNested = Object.create({
      passthrough: { raw: true },
    }) as Record<string, unknown>;
    assert.equal(isConnectionRawPassthrough(inheritedNested), false);
    const ptInherited = Object.create({ raw: true }) as Record<string, unknown>;
    assert.equal(isConnectionRawPassthrough({ passthrough: ptInherited }), false);
  });

  it("TC-11: explicit top-level false overrides nested true", () => {
    assert.equal(
      isConnectionRawPassthrough({ rawPassthrough: false, passthrough: { raw: true } }),
      false
    );
    assert.equal(
      isConnectionRawPassthrough({
        rawPassthrough: false,
        passthrough: { rawPassthrough: true },
      }),
      false
    );
    assert.equal(isConnectionRawPassthrough({ rawPassthrough: true }), true);
  });
});
