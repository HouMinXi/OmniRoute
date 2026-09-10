/**
 * leftover banner must stay session-only: no localStorage/sessionStorage.
 */
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const bannerPath = path.join(
  repoRoot,
  "src/app/(dashboard)/dashboard/providers/components/DeprecatedProviderBanner.tsx"
);
const pagePath = path.join(repoRoot, "src/app/(dashboard)/dashboard/providers/page.tsx");

test("banner file exists and never persists dismiss in web storage", () => {
  assert.ok(fs.existsSync(bannerPath), "DeprecatedProviderBanner.tsx must exist");
  const source = fs.readFileSync(bannerPath, "utf8");
  assert.equal(source.includes("localStorage"), false);
  assert.equal(source.includes("sessionStorage"), false);
  assert.equal(source.includes("../../providerPageHelpers"), false);
  assert.match(source, /fetch\(\s*"\/api\/providers\/deprecated"/);
  assert.match(source, /method:\s*"POST"/);
  assert.match(source, /credentials:\s*"same-origin"/);
});

test("providers page mounts the leftover banner", () => {
  const source = fs.readFileSync(pagePath, "utf8");
  assert.match(source, /DeprecatedProviderBanner/);
});

test("providers page stays frozen at 2025 lines", () => {
  const lines = fs.readFileSync(pagePath, "utf8").split("\n").length;
  assert.equal(lines, 2025);
});
