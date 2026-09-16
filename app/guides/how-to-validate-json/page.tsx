import { PageContainer, ToolHeader } from "@/components/layout/PageContainer";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Validate JSON",
  description: "Learn how to find and fix common syntax errors in your JSON data.",
};

export default function HowToValidateJsonPage() {
  return (
    <PageContainer className="max-w-3xl">
      <ToolHeader 
        title="How to Validate JSON"
        description="Find and fix syntax errors."
        breadcrumbItems={[
          { label: "Guides", href: "/guides" },
          { label: "How to Validate JSON" }
        ]}
      />

      <div className="prose prose-gray dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
        <p className="lead text-lg text-gray-700 dark:text-gray-300 font-medium mb-6">
          Validating JSON means checking that a string strictly adheres to the JSON specification. If a single character is out of place, the entire string becomes invalid and cannot be parsed by applications.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Common JSON Errors</h2>
        <p className="mb-4">Here are the most frequent mistakes that cause JSON to be invalid:</p>
        
        <ul className="list-disc pl-6 space-y-4 mb-8">
          <li>
            <strong>Missing Quotes on Keys:</strong> Unlike standard JavaScript objects, JSON requires all keys (property names) to be enclosed in double quotes.
            <div className="mt-2 text-sm">
              <span className="text-red-500 font-mono line-through">{`{ name: "John" }`}</span>
              <br/>
              <span className="text-green-500 font-mono">{`{ "name": "John" }`}</span>
            </div>
          </li>
          <li>
            <strong>Single Quotes:</strong> JSON only accepts double quotes for strings. Single quotes are not allowed.
            <div className="mt-2 text-sm">
              <span className="text-red-500 font-mono line-through">{`{ 'name': 'John' }`}</span>
              <br/>
              <span className="text-green-500 font-mono">{`{ "name": "John" }`}</span>
            </div>
          </li>
          <li>
            <strong>Trailing Commas:</strong> A comma after the last item in an object or array is a syntax error in JSON (though allowed in regular JS).
            <div className="mt-2 text-sm">
              <span className="text-red-500 font-mono line-through">{`{ "a": 1, "b": 2, }`}</span>
              <br/>
              <span className="text-green-500 font-mono">{`{ "a": 1, "b": 2 }`}</span>
            </div>
          </li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">How to fix invalid JSON</h2>
        <p className="mb-4">Finding a missing comma in a 5,000-line JSON file is almost impossible manually. That's why you need a validator.</p>
        
        <ol className="list-decimal pl-6 space-y-2 mb-8">
          <li>Go to our <Link href="/json-validator" className="text-blue-600 dark:text-blue-400 hover:underline">JSON Validator</Link> tool.</li>
          <li>Paste your broken JSON into the input field.</li>
          <li>Click <strong>Validate</strong>.</li>
          <li>The tool will tell you exactly which line and column contains the error.</li>
          <li>Fix the error and validate again until it shows "Valid JSON".</li>
        </ol>

        <Link href="/json-validator" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
          Open JSON Validator <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </PageContainer>
  );
}
