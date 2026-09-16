import * as xmljs from 'xml-js';

export function jsonToXml(input: string): string {
  if (!input.trim()) return "";

  try {
    const parsed = JSON.parse(input);

    let wrappedJson: any;
    if (Array.isArray(parsed)) {
      wrappedJson = { root: { item: parsed } };
    } else {
      const keys = Object.keys(parsed);
      if (keys.length !== 1) {
        wrappedJson = { root: parsed };
      } else {
        wrappedJson = parsed;
      }
    }

    const xml = xmljs.json2xml(JSON.stringify(wrappedJson), { compact: true, spaces: 2 });
    return '<?xml version="1.0" encoding="UTF-8"?>\n' + xml;
  } catch (error: any) {
    throw new Error(error.message || "Invalid JSON");
  }
}
