"use client";

import React, { useState, useEffect } from "react";
import { PageContainer, ToolHeader } from "@/components/layout/PageContainer";
import { JsonEditor } from "@/components/json/JsonEditor";
import { JsonToolbar } from "@/components/json/JsonToolbar";
import { RelatedTools } from "@/components/content/RelatedTools";
import { FAQ } from "@/components/content/FAQ";
import { validateJson } from "@/lib/json/validator";
import { sampleData } from "@/lib/json/samples";
import { CheckCircle, XCircle } from "lucide-react";
import { faq } from "./faq";

export default function JsonValidatorPage() {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [errorDetails, setErrorDetails] = useState<{ error?: string; line?: number; column?: number } | null>(null);

  useEffect(() => {
    if (!input.trim()) {
      setIsValid(null);
      setErrorDetails(null);
      return;
    }
    
    const result = validateJson(input);
    setIsValid(result.isValid);
    if (!result.isValid) {
      setErrorDetails({ error: result.error, line: result.line, column: result.column });
    } else {
      setErrorDetails(null);
    }
  }, [input]);

  const handleSample = () => {
    setInput(JSON.stringify(sampleData.validator, null, 2));
    setIsValid(null);
    setErrorDetails(null);
  };
  

  const handleClear = () => {
    setInput("");
    setIsValid(null);
    setErrorDetails(null);
  };

  return (
    <PageContainer>
      <ToolHeader 
        title="JSON Validator"
        description="Validate your JSON to ensure it is correctly formatted and free of syntax errors."
        breadcrumbItems={[
          { label: "JSON Tools", href: "/#tools" },
          { label: "JSON Validator" }
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[600px] mb-8">
        {/* Input Section */}
        <div className="flex flex-col h-full shadow-sm rounded-lg lg:col-span-2 max-w-4xl mx-auto w-full">
          <JsonToolbar
            title="JSON Input"
            onSample={handleSample}
            onClear={handleClear}
            onUpload={(content) => { setInput(content); setIsValid(null); setErrorDetails(null); }}
          />
          <JsonEditor
            value={input}
            onChange={(val) => { setInput(val); setIsValid(null); setErrorDetails(null); }}
            error={null} // Don't highlight the editor itself for this tool, use the explicit status box
            className="rounded-t-none border-t-0 flex-grow"
          />
          
          {/* Status Box */}
          {isValid !== null && (
            <div className={`mt-4 p-4 border rounded-lg flex flex-col md:flex-row md:items-center gap-4 shadow-sm ${
              isValid 
                ? 'bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-900/50 dark:text-green-400' 
                : 'bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-900/50 dark:text-red-400'
            }`}>
              <div className="flex items-center gap-2 font-semibold">
                {isValid ? (
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-500" />
                ) : (
                  <XCircle className="h-6 w-6 text-red-600 dark:text-red-500" />
                )}
                <span className="text-lg">{isValid ? 'Valid JSON' : 'Invalid JSON'}</span>
              </div>
              
              {!isValid && errorDetails && (
                <div className="md:border-l md:pl-4 border-red-200 dark:border-red-900/50 flex flex-col gap-1 text-sm font-mono flex-grow">
                  <div className="bg-white/50 dark:bg-black/20 px-3 py-2 rounded">
                    {errorDetails.error}
                  </div>
                  {(errorDetails.line || errorDetails.column) && (
                    <div className="flex gap-4 text-xs font-medium mt-1">
                      {errorDetails.line && <span>Line: <span className="bg-red-100 dark:bg-red-900/40 px-1.5 py-0.5 rounded">{errorDetails.line}</span></span>}
                      {errorDetails.column && <span>Column: <span className="bg-red-100 dark:bg-red-900/40 px-1.5 py-0.5 rounded">{errorDetails.column}</span></span>}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <RelatedTools currentTool="validator" />
      
      <FAQ items={faq} />
    </PageContainer>
  );
}
