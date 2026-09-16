export interface JsonStats {
  sizeBytes: number;
  objectCount: number;
  arrayCount: number;
  keyCount: number;
  valueCount: number;
  maxDepth: number;
}

export function analyzeJson(input: string): JsonStats {
  if (!input.trim()) {
    throw new Error("Input is empty");
  }

  try {
    const parsed = JSON.parse(input);
    const sizeBytes = new Blob([input]).size;

    let objectCount = 0;
    let arrayCount = 0;
    let keyCount = 0;
    let valueCount = 0;
    let maxDepth = 0;

    function traverse(obj: any, currentDepth: number) {
      if (currentDepth > maxDepth) {
        maxDepth = currentDepth;
      }

      if (obj === null) {
        valueCount++;
        return;
      }

      if (Array.isArray(obj)) {
        arrayCount++;
        obj.forEach((item) => traverse(item, currentDepth + 1));
        return;
      }

      if (typeof obj === "object") {
        objectCount++;
        const keys = Object.keys(obj);
        keyCount += keys.length;
        keys.forEach((key) => traverse(obj[key], currentDepth + 1));
        return;
      }

      // Primitive value (string, number, boolean)
      valueCount++;
    }

    traverse(parsed, 1);

    return {
      sizeBytes,
      objectCount,
      arrayCount,
      keyCount,
      valueCount,
      maxDepth,
    };
  } catch (error) {
    throw new Error("Invalid JSON");
  }
}

export function formatBytes(bytes: number, decimals = 2): string {
  if (!+bytes) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}
