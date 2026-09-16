"use client";

import React, { useState, useEffect } from "react";
import { PageContainer, ToolHeader } from "@/components/layout/PageContainer";
import { JsonEditor } from "@/components/json/JsonEditor";
import { JsonToolbar } from "@/components/json/JsonToolbar";
import { RelatedTools } from "@/components/content/RelatedTools";
import { FAQ } from "@/components/content/FAQ";
import { formatJson } from "@/lib/json/formatter";
import { sampleData } from "@/lib/json/samples";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { useDownload } from "@/hooks/useDownload";
// Button and Play removed as they are no longer needed
import { faq } from "./faq";

export default function JsonFormatterPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [space, setSpace] = useState(2);
  const { copyToClipboard } = useCopyToClipboard();
  const { downloadFile } = useDownload();

  useEffect(() => {
    if (!input.trim()) {
      setOutput("");
      setError(null);
      return;
    }
    try {
      const formatted = formatJson(input, space);
      setOutput(formatted);
      setError(null);
    } catch (e: any) {
      setError(e.message || "Invalid JSON");
    }
  }, [input, space]);

  const handleSample = () => {
    const data = JSON.stringify(sampleData.formatter, null, 2);
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
    if (output) downloadFile(output, "formatted.json");
  };

  return (
    <PageContainer>
      <ToolHeader 
        title="JSON Formatter"
        description="Format and beautify your JSON instantly in your browser."
        breadcrumbItems={[
          { label: "JSON Tools", href: "/#tools" },
          { label: "JSON Formatter" }
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
                  value={space}
                  onChange={(e) => setSpace(Number(e.target.value))}
                >
                  <option value={2}>2 Spaces</option>
                  <option value={4}>4 Spaces</option>
                </select>
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
            placeholder="Formatted JSON will appear here..."
            className="rounded-t-none border-t-0 bg-gray-50/50 dark:bg-gray-950/50"
          />
        </div>
      </div>

      <RelatedTools currentTool="formatter" />
      
      <FAQ items={faq} />
    </PageContainer>
  );
}
