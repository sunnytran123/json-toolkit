"use client";

import React, { useState, useEffect } from "react";
import { PageContainer, ToolHeader } from "@/components/layout/PageContainer";
import { JsonEditor } from "@/components/json/JsonEditor";
import { JsonToolbar } from "@/components/json/JsonToolbar";
import { RelatedTools } from "@/components/content/RelatedTools";
import { FAQ } from "@/components/content/FAQ";
import { JsonTreeNode } from "@/components/tools/tree-viewer/JsonTreeNode";
import { sampleData } from "@/lib/json/samples";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { faq } from "./faq";

export default function JsonTreeViewerPage() {
  const [input, setInput] = useState("");
  const [parsedData, setParsedData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  // We use a simple key change to force re-render of the tree for collapse/expand all
  const [treeKey, setTreeKey] = useState(0);
  const [expandAll, setExpandAll] = useState(true);

  useEffect(() => {
    if (!input.trim()) {
      setParsedData(null);
      setError(null);
      return;
    }
    try {
      const data = JSON.parse(input);
      setParsedData(data);
      setError(null);
    } catch (e: any) {
      setError(e.message || "Invalid JSON");
      setParsedData(null);
    }
  }, [input]);

  const handleSample = () => {
    const data = JSON.stringify(sampleData.treeViewer, null, 2);
    setInput(data);
    setError(null);
    setParsedData(null);
  };

  const handleClear = () => {
    setInput("");
    setParsedData(null);
    setError(null);
  };

  return (
    <PageContainer>
      <ToolHeader 
        title="JSON Tree Viewer"
        description="Visualize and explore JSON data as an interactive, collapsible tree structure."
        breadcrumbItems={[
          { label: "JSON Tools", href: "/#tools" },
          { label: "JSON Tree Viewer" }
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
            className="rounded-t-none border-t-0 flex-grow"
          />
        </div>

        {/* Output Section */}
        <div className="flex flex-col h-full shadow-sm rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-gray-50 dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
            <span className="font-medium text-sm text-gray-700 dark:text-gray-300">Tree Viewer</span>
            {parsedData && (
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => { setExpandAll(true); setTreeKey(k => k + 1); }} className="text-xs h-8">
                  Expand All
                </Button>
                <Button variant="outline" size="sm" onClick={() => { setExpandAll(false); setTreeKey(k => k + 1); }} className="text-xs h-8">
                  Collapse All
                </Button>
              </div>
            )}
          </div>
          <div className="flex-grow p-4 overflow-auto bg-white dark:bg-gray-950 text-sm">
            {parsedData ? (
              <div className="min-w-fit" key={treeKey}>
                <JsonTreeNode 
                  label="" 
                  value={parsedData} 
                  isLast={true} 
                  defaultExpanded={true}
                  childDefaultExpanded={expandAll}
                />
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-400">
                Paste JSON to see the tree structure
              </div>
            )}
          </div>
        </div>
      </div>

      <RelatedTools currentTool="tree-viewer" />
      
      <FAQ items={faq} />
    </PageContainer>
  );
}
