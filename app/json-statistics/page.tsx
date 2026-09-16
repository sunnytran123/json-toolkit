"use client";

import React, { useState } from "react";
import { PageContainer, ToolHeader } from "@/components/layout/PageContainer";
import { JsonEditor } from "@/components/json/JsonEditor";
import { JsonToolbar } from "@/components/json/JsonToolbar";
import { RelatedTools } from "@/components/content/RelatedTools";
import { FAQ } from "@/components/content/FAQ";
import { analyzeJson, formatBytes, JsonStats } from "@/lib/json/statistics";
import { sampleData } from "@/lib/json/samples";
import { Play, Database, List, Hash, Type, Layers, HardDrive } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { faq } from "./faq";

export default function JsonStatisticsPage() {
  const [input, setInput] = useState("");
  const [stats, setStats] = useState<JsonStats | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = () => {
    if (!input.trim()) return;
    try {
      const result = analyzeJson(input);
      setStats(result);
      setError(null);
    } catch (e: any) {
      setError(e.message || "Invalid JSON");
      setStats(null);
    }
  };

  const handleSample = () => {
    const data = JSON.stringify(sampleData.statistics, null, 2);
    setInput(data);
    setError(null);
    setStats(null);
  };

  const handleClear = () => {
    setInput("");
    setStats(null);
    setError(null);
  };

  return (
    <PageContainer>
      <ToolHeader 
        title="JSON Statistics"
        description="Analyze your JSON data to get insights on size, depth, node counts, and structure."
        breadcrumbItems={[
          { label: "JSON Tools", href: "/#tools" },
          { label: "JSON Statistics" }
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[500px] mb-8">
        {/* Input Section */}
        <div className="flex flex-col shadow-sm rounded-lg">
          <JsonToolbar
            title="JSON Input"
            onSample={handleSample}
            onClear={handleClear}
            onUpload={(content) => { setInput(content); setError(null); setStats(null); }}
            actions={
              <Button size="sm" onClick={handleAnalyze} className="gap-1.5 h-8 text-xs bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-white border-0">
                <Play className="h-3.5 w-3.5 fill-current" />
                Analyze
              </Button>
            }
          />
          <JsonEditor
            value={input}
            onChange={(val) => { setInput(val); setStats(null); }}
            error={error}
            className="rounded-t-none border-t-0 flex-grow"
          />
        </div>

        {/* Results Section */}
        <div className="flex flex-col bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Database className="h-5 w-5 text-blue-600 dark:text-blue-500" />
            Analysis Results
          </h2>
          
          {stats ? (
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                <div className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1 flex items-center gap-1.5">
                  <HardDrive className="h-4 w-4" /> Size
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {formatBytes(stats.sizeBytes)}
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                <div className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1 flex items-center gap-1.5">
                  <Layers className="h-4 w-4" /> Max Depth
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.maxDepth}
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                <div className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1 flex items-center gap-1.5">
                  <BracesIcon className="h-4 w-4" /> Objects
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.objectCount}
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                <div className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1 flex items-center gap-1.5">
                  <List className="h-4 w-4" /> Arrays
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.arrayCount}
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                <div className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1 flex items-center gap-1.5">
                  <Hash className="h-4 w-4" /> Total Keys
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.keyCount}
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                <div className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1 flex items-center gap-1.5">
                  <Type className="h-4 w-4" /> Primitive Values
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.valueCount}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-64 text-gray-400 dark:text-gray-600 text-center">
              <Database className="h-12 w-12 mb-4 opacity-20" />
              <p>Paste JSON and click Analyze to view statistics.</p>
            </div>
          )}
        </div>
      </div>

      <RelatedTools currentTool="statistics" />
      
      <FAQ items={faq} />
    </PageContainer>
  );
}

function BracesIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" />
      <path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" />
    </svg>
  );
}
