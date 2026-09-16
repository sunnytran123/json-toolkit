"use client";

import React, { useState } from "react";
import { PageContainer, ToolHeader } from "@/components/layout/PageContainer";
import { JsonEditor } from "@/components/json/JsonEditor";
import { JsonToolbar } from "@/components/json/JsonToolbar";
import { RelatedTools } from "@/components/content/RelatedTools";
import { FAQ } from "@/components/content/FAQ";
import { sortJson } from "@/lib/json/sorter";
import { sampleData } from "@/lib/json/samples";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { useDownload } from "@/hooks/useDownload";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function JsonSorterPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [reverse, setReverse] = useState(false);
  const { copyToClipboard } = useCopyToClipboard();
  const { downloadFile } = useDownload();

  const handleSort = () => {
    if (!input.trim()) return;
    try {
      const sorted = sortJson(input, reverse);
      setOutput(sorted);
      setError(null);
    } catch (e: any) {
      setError(e.message || "Invalid JSON");
      setOutput("");
    }
  };

  const handleSample = () => {
    const data = JSON.stringify(sampleData.sorter, null, 2);
    setInput(data);
    setError(null);
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError(null);
  };

  const handleCopy = () => {
    if (output) copyToClipboard(output);
  };

  const handleDownload = () => {
    if (output) downloadFile(output, "sorted.json");
  };

  return (
    <PageContainer>
      <ToolHeader 
        title="JSON Sorter"
        description="Recursively sort JSON keys alphabetically (A-Z or Z-A)."
        breadcrumbItems={[
          { label: "JSON Tools", href: "/json-tools" },
          { label: "JSON Sorter" }
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[600px] mb-8">
        {/* Input Section */}
        <div className="flex flex-col h-full shadow-sm rounded-lg">
          <JsonToolbar
            title="Input"
            onSample={handleSample}
            onClear={handleClear}
            onUpload={(content) => { setInput(content); setError(null); }}
            actions={
              <>
                <select 
                  className="h-8 text-xs border border-gray-200 rounded-md px-2 bg-white dark:bg-gray-900 dark:border-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  value={reverse ? "za" : "az"}
                  onChange={(e) => setReverse(e.target.value === "za")}
                >
                  <option value="az">Sort A → Z</option>
                  <option value="za">Sort Z → A</option>
                </select>
                <Button size="sm" onClick={handleSort} className="gap-1.5 h-8 text-xs bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-white border-0">
                  <Play className="h-3.5 w-3.5 fill-current" />
                  Sort
                </Button>
              </>
            }
          />
          <JsonEditor
            value={input}
            onChange={setInput}
            error={error}
            className="rounded-t-none border-t-0"
          />
        </div>

        {/* Output Section */}
        <div className="flex flex-col h-full shadow-sm rounded-lg">
          <JsonToolbar
            title="Output"
            onCopy={handleCopy}
            onDownload={handleDownload}
          />
          <JsonEditor
            value={output}
            readOnly
            placeholder="Sorted JSON will appear here..."
            className="rounded-t-none border-t-0 bg-gray-50/50 dark:bg-gray-950/50"
          />
        </div>
      </div>

      <RelatedTools currentTool="sorter" />
      
      <FAQ items={[
        {
          question: "Does this sort arrays as well?",
          answer: "No, this tool specifically sorts object keys. Array items retain their original order."
        },
        {
          question: "Does it sort nested objects?",
          answer: "Yes, the sorting is recursive. It will sort the keys of the main object and all nested objects."
        }
      ]} />
    </PageContainer>
  );
}
