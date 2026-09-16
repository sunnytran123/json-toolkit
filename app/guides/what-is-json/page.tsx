import { PageContainer, ToolHeader } from "@/components/layout/PageContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What is JSON?",
  description: "An introduction to JavaScript Object Notation, its syntax, and why it's the standard for data exchange on the web.",
};

export default function WhatIsJsonPage() {
  return (
    <PageContainer className="max-w-3xl">
      <ToolHeader 
        title="What is JSON?"
        description="An introduction to JavaScript Object Notation."
        breadcrumbItems={[
          { label: "Guides", href: "/guides" },
          { label: "What is JSON?" }
        ]}
      />

      <div className="prose prose-gray dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
        <p className="lead text-lg text-gray-700 dark:text-gray-300 font-medium">
          JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write, and it is easy for machines to parse and generate.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Why use JSON?</h2>
        <p className="mb-4">
          JSON has become the de facto standard for data exchange on the web, replacing older formats like XML. It is used primarily to transmit data between a server and a web application, serving as an alternative to XML.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Lightweight:</strong> JSON has very little overhead compared to XML.</li>
          <li><strong>Language Independent:</strong> While it is derived from JavaScript, JSON is a text format that is completely language-independent. Most modern programming languages include code to generate and parse JSON-format data.</li>
          <li><strong>Easy to Read:</strong> The syntax is straightforward and easy to understand at a glance.</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Basic Syntax Rules</h2>
        <p className="mb-4">JSON data is written as name/value pairs (also called key/value pairs). A name/value pair consists of a field name (in double quotes), followed by a colon, followed by a value.</p>
        
        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm mb-6 border border-gray-200 dark:border-gray-800">
          <span className="text-blue-600 dark:text-blue-400">"name"</span>: <span className="text-green-600 dark:text-green-400">"John Doe"</span>
        </div>

        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Data is in name/value pairs</li>
          <li>Data is separated by commas</li>
          <li>Curly braces hold objects</li>
          <li>Square brackets hold arrays</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Data Types</h2>
        <p className="mb-4">JSON values can be of the following types:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>String:</strong> Text wrapped in double quotes. <code>"Hello"</code></li>
          <li><strong>Number:</strong> An integer or a floating-point number. <code>42</code> or <code>3.14</code></li>
          <li><strong>Object:</strong> A collection of name/value pairs enclosed in curly braces. <code>{"{}"}</code></li>
          <li><strong>Array:</strong> An ordered list of values enclosed in square brackets. <code>[]</code></li>
          <li><strong>Boolean:</strong> <code>true</code> or <code>false</code></li>
          <li><strong>Null:</strong> An empty value, written simply as <code>null</code>.</li>
        </ul>
      </div>
    </PageContainer>
  );
}
