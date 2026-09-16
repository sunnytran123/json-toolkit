export interface ValidationResult {
  isValid: boolean;
  error?: string;
  line?: number;
  column?: number;
}

export function validateJson(input: string): ValidationResult {
  if (!input.trim()) {
    return { isValid: false, error: "Input is empty" };
  }
  
  try {
    JSON.parse(input);
    return { isValid: true };
  } catch (error: any) {
    const message = error.message;
    let line, column;
    
    // Attempt to extract line and column from standard V8 JSON.parse error
    // e.g., "Unexpected token } in JSON at position 123" or "Unexpected token '}' at line 2 column 4"
    const positionMatch = message.match(/at position (\d+)/);
    if (positionMatch) {
      const position = parseInt(positionMatch[1], 10);
      const textUpToPosition = input.substring(0, position);
      line = (textUpToPosition.match(/\n/g) || []).length + 1;
      column = position - textUpToPosition.lastIndexOf('\n');
    }
    
    const lineColMatch = message.match(/at line (\d+) column (\d+)/);
    if (lineColMatch) {
      line = parseInt(lineColMatch[1], 10);
      column = parseInt(lineColMatch[2], 10);
    }

    return {
      isValid: false,
      error: message,
      line,
      column
    };
  }
}
