// #14528: the standalone proxy in server.cjs writes SSE chunks without
// checking res.write()'s return value. A slow client then grows the socket
// write queue without bound. The write must wait for drain, and a close
// during that wait must not leak the listeners.
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const src = fs.readFileSync(path.resolve(here, "../../src/mitm/server.cjs"), "utf8");

test("server.cjs waits for drain when res.write reports backpressure (#14528)", () => {
  assert.match(
    src,
    /if\s*\(\s*!res\.write\(text\)\s*\)/,
    "res.write(text) return value must be checked"
  );
  assert.match(src, /res\.once\(\s*"drain"/, "must wait for drain");
  assert.match(src, /res\.off\(\s*"drain"/, "drain listener must be removed");
  assert.match(src, /res\.off\(\s*"close"/, "close listener must be removed");
  assert.match(src, /res\.once\(\s*"error"/, "must also release on error");
});
