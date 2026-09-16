"use client";

import React, { useState } from "react";
import { PageContainer, ToolHeader } from "@/components/layout/PageContainer";
import { JsonEditor } from "@/components/json/JsonEditor";
import { JsonToolbar } from "@/components/json/JsonToolbar";
import { RelatedTools } from "@/components/content/RelatedTools";
import { FAQ } from "@/components/content/FAQ";
import { jsonToCsv } from "@/lib/json/csv";
import { sampleData } from "@/lib/json/samples";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { useDownload } from "@/hooks/useDownload";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { faq } from "./faq";

export default function JsonToCsvPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { copyToClipboard } = useCopyToClipboard();
  const { downloadFile } = useDownload();

  const handleConvert = () => {
    if (!input.trim()) return;
    try {
      const csv = jsonToCsv(input);
      setOutput(csv);
      setError(null);
    } catch (e: any) {
      setError(e.message || "Failed to convert JSON");
      setOutput("");
    }
  };

  const handleSample = () => {
    const data = JSON.stringify(sampleData.csv, null, 2);
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
    if (output) downloadFile(output, "output.csv", "text/csv");
  };

  return (
    <PageContainer>
      <ToolHeader 
        title="JSON to CSV"
        description="Convert JSON arrays into tabular CSV format for use in Excel or Google Sheets."
        breadcrumbItems={[
          { label: "JSON Tools", href: "/#tools" },
          { label: "JSON to CSV" }
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
              <Button size="sm" onClick={handleConvert} className="gap-1.5 h-8 text-xs bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-white border-0">
                <Play className="h-3.5 w-3.5 fill-current" />
                Convert
              </Button>
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
            title="CSV Output"
            onCopy={handleCopy}
            onDownload={handleDownload}
          />
          <JsonEditor
            value={output}
            readOnly
            placeholder="Converted CSV will appear here..."
            className="rounded-t-none border-t-0 bg-gray-50/50 dark:bg-gray-950/50"
          />
        </div>
      </div>

      <RelatedTools currentTool="csv" />
      
      <FAQ items={faq} />
    </PageContainer>
  );
}
