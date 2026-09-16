export function sortJson(input: string, reverse: boolean = false): string {
  if (!input.trim()) return "";
  try {
    const parsed = JSON.parse(input);
    const sorted = sortObject(parsed, reverse);
    return JSON.stringify(sorted, null, 2);
  } catch (error) {
    throw new Error("Invalid JSON");
  }
}

function sortObject(obj: any, reverse: boolean): any {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => sortObject(item, reverse));
  }

  const keys = Object.keys(obj).sort((a, b) => {
    return reverse ? b.localeCompare(a) : a.localeCompare(b);
  });

  const sortedObj: Record<string, any> = {};
  for (const key of keys) {
    sortedObj[key] = sortObject(obj[key], reverse);
  }

  return sortedObj;
}
