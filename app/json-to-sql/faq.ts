export const faq = [
  {
    question: "What does this tool do?",
    answer: "It converts an array of JSON objects into SQL CREATE TABLE and INSERT statements, allowing you to easily import your JSON data into a relational database like MySQL, PostgreSQL, or SQLite."
  },
  {
    question: "How does it infer column types?",
    answer: "It scans the first non-null value for each property across the JSON array to determine whether it should be an INT, FLOAT, BOOLEAN, TEXT, or JSON type. It defaults to TEXT if it cannot determine the type."
  },
  {
    question: "What if my JSON is not an array?",
    answer: "If your JSON is an object that contains a single array property, the tool will automatically find and use that array as the source data, and use the property key as the table name."
  }
];
