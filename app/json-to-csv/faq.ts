export const faq = [
  {
    question: "What kind of JSON can be converted to CSV?",
    answer: "The JSON must be an array of objects, e.g., [{ \"name\": \"John\", \"age\": 30 }, { \"name\": \"Jane\", \"age\": 25 }]. Keys will be used as CSV column headers."
  },
  {
    question: "What happens to nested JSON objects?",
    answer: "Nested objects and arrays are stringified into standard JSON string representations within their respective CSV cell."
  }
];
