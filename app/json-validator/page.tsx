"use client";

import React, { useState } from "react";
import { PageContainer, ToolHeader } from "@/components/layout/PageContainer";
import { JsonEditor } from "@/components/json/JsonEditor";
import { JsonToolbar } from "@/components/json/JsonToolbar";
import { RelatedTools } from "@/components/content/RelatedTools";
import { FAQ } from "@/components/content/FAQ";
import { validateJson } from "@/lib/json/validator";
import { sampleData } from "@/lib/json/samples";
import { CheckCircle, XCircle, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function JsonValidatorPage() {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [errorDetails, setErrorDetails] = useState<{ error?: string; line?: number; column?: number } | null>(null);

  const handleValidate = () => {
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
  };

  const handleSample = () => {
    setInput(JSON.stringify(sampleData.validator, null, 2));
    setIsValid(null);
    setErrorDetails(null);
  };
  
  const handleInvalidSample = () => {
    const invalidJson = `{
  "name": "John",
  "age": 30,
  "city": "New York"
  "missingComma": true
}`;
    setInput(invalidJson);
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
          { label: "JSON Tools", href: "/json-tools" },
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
            actions={
              <>
                <Button variant="outline" size="sm" onClick={handleInvalidSample} className="text-xs h-8">
                  Test Invalid
                </Button>
                <Button size="sm" onClick={handleValidate} className="gap-1.5 h-8 text-xs bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-white border-0">
                  <Play className="h-3.5 w-3.5 fill-current" />
                  Validate
                </Button>
              </>
            }
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
      
      <FAQ items={[
        {
          question: "What does JSON validation do?",
          answer: "It checks your JSON string to ensure it strictly follows the JSON specification. It looks for missing quotes, trailing commas, unescaped characters, and structural errors."
        },
        {
          question: "Can it tell me where the error is?",
          answer: "Yes, in most cases the validator will extract the exact line and column number where the syntax error occurred."
        },
        {
          question: "Is my JSON uploaded to a server?",
          answer: "No. All validation is done locally in your browser using JavaScript. We don't upload, store, or see your data."
        }
      ]} />
    </PageContainer>
  );
}
