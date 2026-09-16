export function minifyJson(input: string): string {
  if (!input.trim()) return "";
  try {
    const parsed = JSON.parse(input);
    return JSON.stringify(parsed);
  } catch (error) {
    throw new Error("Invalid JSON");
  }
}
