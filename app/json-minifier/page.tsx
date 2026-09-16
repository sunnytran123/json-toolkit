"use client";

import React, { useState } from "react";
import { PageContainer, ToolHeader } from "@/components/layout/PageContainer";
import { JsonEditor } from "@/components/json/JsonEditor";
import { JsonToolbar } from "@/components/json/JsonToolbar";
import { RelatedTools } from "@/components/content/RelatedTools";
import { FAQ } from "@/components/content/FAQ";
import { minifyJson } from "@/lib/json/minifier";
import { sampleData } from "@/lib/json/samples";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { useDownload } from "@/hooks/useDownload";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { faq } from "./faq";

export default function JsonMinifierPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState<{ original: number; minified: number; saved: number } | null>(null);
  const { copyToClipboard } = useCopyToClipboard();
  const { downloadFile } = useDownload();

  const handleMinify = () => {
    if (!input.trim()) return;
    try {
      const minified = minifyJson(input);
      setOutput(minified);
      setError(null);
      
      // Calculate savings
      const origSize = new Blob([input]).size;
      const minSize = new Blob([minified]).size;
      setStats({
        original: origSize,
        minified: minSize,
        saved: origSize > 0 ? ((origSize - minSize) / origSize) * 100 : 0
      });
    } catch (e: any) {
      setError(e.message || "Invalid JSON");
      setOutput("");
      setStats(null);
    }
  };

  const handleSample = () => {
    const data = JSON.stringify(sampleData.minifier, null, 2);
    setInput(data);
    setError(null);
    setStats(null);
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError(null);
    setStats(null);
  };

  const handleCopy = () => {
    if (output) copyToClipboard(output);
  };

  const handleDownload = () => {
    if (output) downloadFile(output, "minified.json");
  };

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <PageContainer>
      <ToolHeader 
        title="JSON Minifier"
        description="Compress your JSON by removing whitespace, line breaks, and indentation."
        breadcrumbItems={[
          { label: "JSON Tools", href: "/#tools" },
          { label: "JSON Minifier" }
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[500px] mb-8">
        {/* Input Section */}
        <div className="flex flex-col h-full shadow-sm rounded-lg">
          <JsonToolbar
            title="Input"
            onSample={handleSample}
            onClear={handleClear}
            onUpload={(content) => { setInput(content); setError(null); }}
            actions={
              <Button size="sm" onClick={handleMinify} className="gap-1.5 h-8 text-xs bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-white border-0">
                <Play className="h-3.5 w-3.5 fill-current" />
                Minify
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
            title="Output"
            onCopy={handleCopy}
            onDownload={handleDownload}
            actions={
              stats && (
                <div className="text-xs font-medium text-green-600 dark:text-green-500 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded">
                  Saved {stats.saved.toFixed(1)}%
                </div>
              )
            }
          />
          <JsonEditor
            value={output}
            readOnly
            placeholder="Minified JSON will appear here..."
            className="rounded-t-none border-t-0 bg-gray-50/50 dark:bg-gray-950/50"
          />
        </div>
      </div>

      <RelatedTools currentTool="minifier" />
      
      <FAQ items={faq} />
    </PageContainer>
  );
}
