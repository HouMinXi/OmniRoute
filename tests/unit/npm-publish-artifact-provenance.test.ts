/**
 * Supply-chain guard for the `next-build` fast path in npm-publish.yml.
 *
 * The publish job restores a CI-built standalone tree and ships it as the npm tarball.
 * The run it restores from is picked by querying the runs API for `head_sha`. That query
 * also returns `pull_request` runs from FORKS — they execute in this repository's context
 * and upload their own `next-build`, built from fork-controlled source. Measured on
 * 2026-07-30: 57 runs in this repo have a `head_repository` other than the repo itself.
 *
 * Selecting on name + conclusion alone therefore trusts bytes by coincidence of commit
 * SHA. The `head_repository.full_name == env.REPO` clause is what makes the provenance
 * explicit. Raised as CodeQL `actions/artifact-poisoning/critical`.
 *
 * This is a guard, not a reproduction: nothing here can exercise a real poisoning attempt.
 * It asserts the clause cannot be dropped in a future edit without a test turning red.
 */
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");

function readPublishWorkflow(): string {
  return fs.readFileSync(path.join(repoRoot, ".github/workflows/npm-publish.yml"), "utf-8");
}

/** The `run:` body of the step whose `name:` matches, at any indentation. */
function extractStep(yaml: string, stepName: string): string {
  const lines = yaml.split("\n");
  const startIdx = lines.findIndex((l) => l.includes(`- name: ${stepName}`));
  assert.ok(startIdx !== -1, `npm-publish.yml must define the "${stepName}" step`);
  const indent = lines[startIdx].indexOf("- name:");
  const block: string[] = [];
  for (let i = startIdx + 1; i < lines.length; i++) {
    // The next list item at the same indentation ends this step.
    if (lines[i].slice(indent).startsWith("- ")) break;
    block.push(lines[i]);
  }
  return block.join("\n");
}

const ARTIFACT_STEP = "Reuse CI's next-build artifact (skips the heavy rebuild)";

test("the artifact fast path only trusts runs from THIS repository", () => {
  const step = extractStep(readPublishWorkflow(), ARTIFACT_STEP);

  assert.match(
    step,
    /head_repository\.full_name == env\.REPO/,
    "the run selection must require the run to originate from this repository — without it, " +
      "a fork's pull_request run supplies the bytes that get published to npm"
  );
  // Provenance is necessary but not sufficient: tree-equality still comes from head_sha.
  assert.match(
    step,
    /head_sha=\$HEAD_SHA/,
    "the run must still be matched on head_sha — that is the tree-equality guarantee"
  );
  assert.match(step, /\.conclusion == "success"/, "only a successful run may be restored");
});

test("REPO is passed through env, never interpolated into the script body", () => {
  const step = extractStep(readPublishWorkflow(), ARTIFACT_STEP);

  assert.match(step, /REPO:\s*\$\{\{\s*github\.repository\s*\}\}/, "REPO must come from env:");
  // Hard rule #13 / zizmor template-injection: no ${{ }} inside the run: body.
  const runBody = step.slice(step.indexOf("run: |"));
  assert.doesNotMatch(
    runBody,
    /\$\{\{/,
    "the run: body must not interpolate any ${{ }} expression — pass values via env:"
  );
});

test("a miss falls through to a real build instead of publishing an empty tree", () => {
  const step = extractStep(readPublishWorkflow(), ARTIFACT_STEP);

  assert.match(
    step,
    /continue-on-error:\s*true/,
    "the fast path is best-effort — a miss must not fail the publish"
  );
  assert.match(
    step,
    /falling back to a full build/,
    "a miss must say so, so a silent no-op cannot look like a restore"
  );
});
