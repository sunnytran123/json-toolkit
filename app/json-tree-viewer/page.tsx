"use client";

import React, { useState } from "react";
import { PageContainer, ToolHeader } from "@/components/layout/PageContainer";
import { JsonEditor } from "@/components/json/JsonEditor";
import { JsonToolbar } from "@/components/json/JsonToolbar";
import { RelatedTools } from "@/components/content/RelatedTools";
import { FAQ } from "@/components/content/FAQ";
import { JsonTreeNode } from "@/components/tools/tree-viewer/JsonTreeNode";
import { sampleData } from "@/lib/json/samples";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function JsonTreeViewerPage() {
  const [input, setInput] = useState("");
  const [parsedData, setParsedData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  // We use a simple key change to force re-render of the tree for collapse/expand all
  const [treeKey, setTreeKey] = useState(0);

  const handleView = () => {
    if (!input.trim()) return;
    try {
      const data = JSON.parse(input);
      setParsedData(data);
      setError(null);
    } catch (e: any) {
      setError(e.message || "Invalid JSON");
      setParsedData(null);
    }
  };

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
          { label: "JSON Tools", href: "/json-tools" },
          { label: "JSON Tree Viewer" }
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[700px] mb-8">
        {/* Input Section */}
        <div className="flex flex-col h-full shadow-sm rounded-lg">
          <JsonToolbar
            title="JSON Input"
            onSample={handleSample}
            onClear={handleClear}
            onUpload={(content) => { setInput(content); setError(null); setParsedData(null); }}
            actions={
              <Button size="sm" onClick={handleView} className="gap-1.5 h-8 text-xs bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-white border-0">
                <Play className="h-3.5 w-3.5 fill-current" />
                View Tree
              </Button>
            }
          />
          <JsonEditor
            value={input}
            onChange={(val) => { setInput(val); setParsedData(null); }}
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
                <Button variant="outline" size="sm" onClick={() => setTreeKey(k => k + 1)} className="text-xs h-8">
                  Redraw
                </Button>
              </div>
            )}
          </div>
          <div className="flex-grow p-4 overflow-auto bg-white dark:bg-gray-950 text-sm">
            {parsedData ? (
              <div className="min-w-fit" key={treeKey}>
                <JsonTreeNode label="" value={parsedData} isLast={true} />
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-400">
                Paste JSON and click View Tree
              </div>
            )}
          </div>
        </div>
      </div>

      <RelatedTools currentTool="tree-viewer" />
      
      <FAQ items={[
        {
          question: "How do I navigate the tree?",
          answer: "Click on any line with an arrow to expand or collapse that object or array. This makes it easy to read large nested JSON files."
        },
        {
          question: "Why would I use a tree viewer instead of formatting?",
          answer: "When a JSON file is very large (e.g., thousands of lines), formatting it can still leave it difficult to read. A tree viewer allows you to collapse sections you don't care about and focus on the data you need."
        }
      ]} />
    </PageContainer>
  );
}
