export const faq = [
  {
    question: "How does the JSON to TypeScript converter work?",
    answer: "It analyzes your JSON object recursively, determining the type of each value (string, number, boolean, array, object) and generates equivalent TypeScript interface definitions."
  },
  {
    question: "Does it handle arrays of objects?",
    answer: "Yes, it looks at the first item in the array to determine the structure of the objects inside, and names the interface based on the parent key."
  }
];
