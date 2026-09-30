import assert from "node:assert/strict";
import test from "node:test";

import { GithubExecutor } from "../../open-sse/executors/github.ts";

test("#8951 GitHub GPT-5.6 models must use the Responses endpoint", () => {
  const executor = new GithubExecutor();
  const urls = Object.fromEntries(
    ["gpt-5.6-sol", "gpt-5.6-terra", "gpt-5.6-luna", "gpt-6-astra", "gpt-6.1-sol"].map(
      (model) => [model, executor.buildUrl(model, false)]
    )
  );
  assert.deepEqual(urls, {
    "gpt-5.6-sol": "https://api.githubcopilot.com/responses",
    "gpt-5.6-terra": "https://api.githubcopilot.com/responses",
    "gpt-5.6-luna": "https://api.githubcopilot.com/responses",
    "gpt-6-astra": "https://api.githubcopilot.com/responses",
    "gpt-6.1-sol": "https://api.githubcopilot.com/responses",
  });
});
