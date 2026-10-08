type ToolChoiceResult = {
  tool_choice?: unknown;
  tools?: Array<Record<string, unknown>>;
};

type CallingConfig = {
  mode?: unknown;
  allowedFunctionNames?: unknown;
};

// Gemini and Antigravity both send toolConfig.functionCallingConfig.
// NONE turns tools off. One allowed name forces that function. Several
// allowed names narrow the tool list; ANY also requires a call.
export function applyGeminiFunctionCallingConfig(
  result: ToolChoiceResult,
  calling: CallingConfig | null | undefined
): void {
  if (!calling || typeof calling !== "object") return;
  const mode = typeof calling.mode === "string" ? calling.mode.toUpperCase() : "";
  const names = Array.isArray(calling.allowedFunctionNames)
    ? calling.allowedFunctionNames.filter((name): name is string => typeof name === "string" && name !== "")
    : [];
  if (mode === "NONE") {
    result.tool_choice = "none";
    return;
  }
  if (names.length === 1) {
    result.tool_choice = { type: "function", function: { name: names[0] } };
    if (Array.isArray(result.tools)) {
      result.tools = result.tools.filter((tool) => {
        const name = (tool as { function?: { name?: unknown } }).function?.name;
        return name === names[0];
      });
    }
    return;
  }
  if (names.length > 1 && Array.isArray(result.tools)) {
    result.tools = result.tools.filter((tool) => {
      const name = (tool as { function?: { name?: unknown } }).function?.name;
      return typeof name === "string" && names.includes(name);
    });
    if (result.tools.length === 0) return;
    if (mode === "ANY") result.tool_choice = "required";
    return;
  }
  if (mode === "ANY") result.tool_choice = "required";
}
