export function jsonToSql(input: string, tableName: string = "my_table"): string {
  if (!input.trim()) return "";
  
  try {
    let parsed = JSON.parse(input);
    
    // If not an array, try to find an array inside the object
    if (!Array.isArray(parsed)) {
      if (typeof parsed === 'object' && parsed !== null) {
        const arrayKeys = Object.keys(parsed).filter(key => Array.isArray(parsed[key]));
        if (arrayKeys.length === 1) {
          tableName = arrayKeys[0]; // use the key as table name
          parsed = parsed[arrayKeys[0]];
        } else if (arrayKeys.length > 1) {
          throw new Error("JSON object contains multiple arrays. Please provide a single array of objects.");
        } else {
          throw new Error("JSON must be an array of objects to generate SQL statements.");
        }
      } else {
        throw new Error("JSON must be an array of objects to generate SQL statements.");
      }
    }
    
    if (parsed.length === 0) {
      return "-- Empty JSON array";
    }
    
    // Extract columns
    const columnsSet = new Set<string>();
    parsed.forEach((item: any) => {
      if (item && typeof item === 'object' && !Array.isArray(item)) {
        Object.keys(item).forEach(key => columnsSet.add(key));
      }
    });
    
    if (columnsSet.size === 0) {
      throw new Error("No valid objects found in array");
    }
    
    const columns = Array.from(columnsSet);
    
    // Infer types (simple heuristic)
    const types: Record<string, string> = {};
    columns.forEach(col => {
      types[col] = "TEXT"; // Default
      for (const item of parsed) {
        if (item[col] !== undefined && item[col] !== null) {
          const val = item[col];
          if (typeof val === "number") {
            types[col] = Number.isInteger(val) ? "INT" : "FLOAT";
          } else if (typeof val === "boolean") {
            types[col] = "BOOLEAN";
          } else if (typeof val === "object") {
            types[col] = "JSON";
          }
          break; // Use the type of the first non-null value found
        }
      }
    });
    
    // Build CREATE TABLE
    const createTable = `CREATE TABLE ${tableName} (\n` + 
      columns.map(col => `  ${col} ${types[col]}`).join(",\n") + 
      `\n);\n\n`;
      
    // Build INSERTs
    const insertPrefix = `INSERT INTO ${tableName} (${columns.join(", ")}) VALUES\n`;
    const valueRows = parsed.map((item: any) => {
      const vals = columns.map(col => {
        const val = item[col];
        if (val === null || val === undefined) return "NULL";
        if (typeof val === "string") return `'${val.replace(/'/g, "''")}'`;
        if (typeof val === "object") return `'${JSON.stringify(val).replace(/'/g, "''")}'`;
        return String(val);
      });
      return `  (${vals.join(", ")})`;
    });
    
    const insertStatement = insertPrefix + valueRows.join(",\n") + ";";
    
    return createTable + insertStatement;
  } catch (error: any) {
    throw new Error(error.message || "Invalid JSON array");
  }
}
