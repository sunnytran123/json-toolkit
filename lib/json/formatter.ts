export function formatJson(input: string, space: number = 2): string {
  if (!input.trim()) return "";
  try {
    const parsed = JSON.parse(input);
    return JSON.stringify(parsed, null, space);
  } catch (error) {
    throw new Error("Invalid JSON");
  }
}
