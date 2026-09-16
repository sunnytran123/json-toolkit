import { PageContainer, ToolHeader } from "@/components/layout/PageContainer";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Format JSON",
  description: "Learn how to beautify and indent your JSON data to make it readable and maintainable.",
};

export default function HowToFormatJsonPage() {
  return (
    <PageContainer>
      <ToolHeader
        title="How to Format JSON"
        description="Make your JSON readable again."
        breadcrumbItems={[
          { label: "Guides", href: "/guides" },
          { label: "How to Format JSON" }
        ]}
      />

      <div className="mt-8 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 md:p-12 shadow-sm">
        <div className="prose prose-slate dark:prose-invert max-w-none text-justify">
          <p>
            Formatting (or beautifying) JSON is the process of taking a compressed or messy JSON string and applying proper indentation and line breaks to make it readable by humans.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">The Problem: Minified JSON</h2>
          <p className="mb-4">When APIs send JSON data, they usually send it "minified" to save bandwidth. It looks like this:</p>

          <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 font-mono text-xs mb-6 border border-gray-200 dark:border-gray-800 break-all">
            {"{\"user\":{\"id\":101,\"name\":\"Alex Carter\",\"email\":\"alex@example.com\",\"roles\":[\"admin\",\"editor\"],\"isActive\":true}}"}
          </div>

          <p className="mb-4">While computers can read this perfectly fine, it's very difficult for a human to debug or understand the structure.</p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">The Solution: Formatting</h2>
          <p className="mb-4">By applying formatting (usually 2 or 4 spaces per indentation level), the structure becomes immediately obvious:</p>

          <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm mb-6 border border-gray-200 dark:border-gray-800 whitespace-pre">
            {`{
  "user": {
    "id": 101,
    "name": "Alex Carter",
    "email": "alex@example.com",
    "roles": [
      "admin",
      "editor"
    ],
    "isActive": true
  }
}`}
          </div>

          <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">How to format JSON online</h2>
          <p className="mb-4">You can easily format your JSON using our free tool:</p>

          <ol className="list-decimal pl-6 space-y-2 mb-8">
            <li>Copy your minified JSON.</li>
            <li>Go to our <Link href="/json-formatter" className="text-blue-600 dark:text-blue-400 hover:underline">JSON Formatter</Link> tool.</li>
            <li>Paste the JSON into the input editor.</li>
            <li>Click the <strong>Format</strong> button.</li>
            <li>Copy the resulting beautified JSON or download it as a file.</li>
          </ol>

          <Link href="/json-formatter" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
            Open JSON Formatter <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </PageContainer>
  );
}
