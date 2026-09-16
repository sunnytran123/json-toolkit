"use client";

import React, { useState, useEffect } from "react";
import { PageContainer, ToolHeader } from "@/components/layout/PageContainer";
import { JsonEditor } from "@/components/json/JsonEditor";
import { JsonToolbar } from "@/components/json/JsonToolbar";
import { RelatedTools } from "@/components/content/RelatedTools";
import { FAQ } from "@/components/content/FAQ";
import { jsonToXml } from "@/lib/json/xml";
import { sampleData } from "@/lib/json/samples";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { useDownload } from "@/hooks/useDownload";
import { faq } from "./faq";

export default function JsonToXmlPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { copyToClipboard } = useCopyToClipboard();
  const { downloadFile } = useDownload();

  useEffect(() => {
    if (!input.trim()) {
      setOutput("");
      setError(null);
      return;
    }
    try {
      const xml = jsonToXml(input);
      setOutput(xml);
      setError(null);
    } catch (e: any) {
      setError(e.message || "Failed to convert JSON");
    }
  }, [input]);

  const handleSample = () => {
    const data = JSON.stringify(sampleData.xml, null, 2);
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
    if (output) downloadFile(output, "output.xml", "application/xml");
  };

  return (
    <PageContainer>
      <ToolHeader 
        title="JSON to XML"
        description="Instantly convert JSON objects into valid XML format."
        breadcrumbItems={[
          { label: "JSON Tools", href: "/#tools" },
          { label: "JSON to XML" }
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
            title="XML Output"
            onCopy={handleCopy}
            onDownload={handleDownload}
          />
          <JsonEditor
            value={output}
            readOnly
            placeholder="Converted XML will appear here..."
            className="rounded-t-none border-t-0 bg-gray-50/50 dark:bg-gray-950/50"
          />
        </div>
      </div>

      <RelatedTools currentTool="xml" />
      
      <FAQ items={faq} />
    </PageContainer>
  );
}
