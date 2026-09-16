"use client";

import React, { useState, useEffect } from "react";
import { PageContainer, ToolHeader } from "@/components/layout/PageContainer";
import { JsonEditor } from "@/components/json/JsonEditor";
import { JsonToolbar } from "@/components/json/JsonToolbar";
import { RelatedTools } from "@/components/content/RelatedTools";
import { FAQ } from "@/components/content/FAQ";
import { jsonToTs } from "@/lib/json/ts-generator";
import { sampleData } from "@/lib/json/samples";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { useDownload } from "@/hooks/useDownload";
import { Button } from "@/components/ui/Button";
import { faq } from "./faq";

export default function JsonToTsPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { copyToClipboard } = useCopyToClipboard();
  const { downloadFile } = useDownload();
  const [rootName, setRootName] = useState("Root");

  useEffect(() => {
    if (!input.trim()) {
      setOutput("");
      setError(null);
      return;
    }
    try {
      const tsCode = jsonToTs(input, rootName || "Root");
      setOutput(tsCode);
      setError(null);
    } catch (e: any) {
      setError(e.message || "Failed to convert JSON");
    }
  }, [input, rootName]);

  const handleSample = () => {
    const data = JSON.stringify(sampleData.ts, null, 2);
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
    if (output) downloadFile(output, "types.ts", "text/typescript");
  };

  return (
    <PageContainer>
      <ToolHeader 
        title="JSON to TypeScript"
        description="Convert JSON data into TypeScript interfaces instantly."
        breadcrumbItems={[
          { label: "JSON Tools", href: "/#tools" },
          { label: "JSON to TS" }
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[600px] mb-8">
        {/* Input Section */}
        <div className="flex flex-col h-full shadow-sm rounded-lg">
          <JsonToolbar
            title="JSON Input"
            onSample={handleSample}
            onClear={handleClear}
            onUpload={(content) => { setInput(content); setError(null); }}
            actions={
              <>
                <input
                  type="text"
                  placeholder="Root Name"
                  value={rootName}
                  onChange={(e) => setRootName(e.target.value)}
                  className="h-8 w-24 text-xs border border-gray-200 rounded-md px-2 bg-white dark:bg-gray-900 dark:border-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
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
            title="TypeScript Output"
            onCopy={handleCopy}
            onDownload={handleDownload}
          />
          <JsonEditor
            value={output}
            readOnly
            placeholder="TypeScript interfaces will appear here..."
            className="rounded-t-none border-t-0 bg-gray-50/50 dark:bg-gray-950/50"
          />
        </div>
      </div>

      <RelatedTools currentTool="json-to-ts" />
      
      <FAQ items={faq} />
    </PageContainer>
  );
}
