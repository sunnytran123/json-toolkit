export function jsonToTs(jsonString: string, rootName: string = 'Root'): string {
  let parsed: any;
  try {
    parsed = JSON.parse(jsonString);
  } catch (e: any) {
    throw new Error('Invalid JSON: ' + e.message);
  }

  const interfaces: Record<string, string> = {};

  function parseObject(obj: any, name: string): string {
    if (obj === null) return 'any';
    if (Array.isArray(obj)) {
      if (obj.length === 0) return 'any[]';
      // Basic heuristic: check first item type
      const type = parseObject(obj[0], name + 'Item');
      return `${type}[]`;
    }
    if (typeof obj === 'object') {
      let props = '';
      for (const key in obj) {
        const val = obj[key];
        // simple heuristic for naming nested interfaces
        const propName = capitalize(key);
        const propType = parseObject(val, propName);
        // Add quotes if key has spaces or special chars
        const safeKey = /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(key) ? key : `"${key}"`;
        props += `  ${safeKey}: ${propType};\n`;
      }
      // Only add to interfaces if it doesn't exist, or just overwrite (simple version)
      interfaces[name] = `export interface ${name} {\n${props}}\n`;
      return name;
    }
    return typeof obj;
  }

  function capitalize(str: string) {
    if (!str) return 'AnyType';
    const clean = str.replace(/[^a-zA-Z0-9_$]/g, '');
    if (!clean) return 'AnyType';
    return clean.charAt(0).toUpperCase() + clean.slice(1);
  }

  const rootType = parseObject(parsed, rootName);
  
  if (rootType !== rootName && !interfaces[rootName]) {
      // If root is an array or primitive, just export it as a type
      return `export type ${rootName} = ${rootType};\n\n` + Object.values(interfaces).reverse().join('\n');
  }

  return Object.values(interfaces).reverse().join('\n');
}
