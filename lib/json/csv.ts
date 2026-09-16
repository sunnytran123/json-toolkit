export function jsonToCsv(input: string): string {
  if (!input.trim()) return "";
  
  try {
    const parsed = JSON.parse(input);
    
    if (!Array.isArray(parsed)) {
      throw new Error("JSON must be an array of objects to convert to CSV");
    }
    
    if (parsed.length === 0) {
      return "";
    }
    
    // Extract headers
    const headersSet = new Set<string>();
    parsed.forEach(item => {
      if (item && typeof item === 'object' && !Array.isArray(item)) {
        Object.keys(item).forEach(key => headersSet.add(key));
      }
    });
    
    if (headersSet.size === 0) {
      throw new Error("No valid objects found in array");
    }
    
    const headers = Array.from(headersSet);
    
    // Create CSV rows
    const rows = [headers.join(",")];
    
    parsed.forEach(item => {
      const row = headers.map(header => {
        let val = item[header];
        if (val === null || val === undefined) {
          return "";
        }
        if (typeof val === 'object') {
          val = JSON.stringify(val);
        } else {
          val = String(val);
        }
        
        // Escape quotes and wrap in quotes if contains comma, newline, or quote
        if (val.includes(",") || val.includes("\"") || val.includes("\n")) {
          return `"${val.replace(/"/g, '""')}"`;
        }
        return val;
      });
      rows.push(row.join(","));
    });
    
    return rows.join("\n");
  } catch (error: any) {
    throw new Error(error.message || "Invalid JSON array");
  }
}
