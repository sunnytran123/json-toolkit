import React, { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Copy, Download, Trash2, Upload, FileCode } from "lucide-react";

interface JsonToolbarProps {
  onSample?: () => void;
  onClear?: () => void;
  onCopy?: () => void;
  onDownload?: () => void;
  onUpload?: (content: string) => void;
  actions?: React.ReactNode;
  title?: string;
}

export function JsonToolbar({
  onSample,
  onClear,
  onCopy,
  onDownload,
  onUpload,
  actions,
  title
}: JsonToolbarProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !onUpload) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      onUpload(content);
      if (fileInputRef.current) fileInputRef.current.value = '';
    };
    reader.readAsText(file);
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-t-lg border-b-0">
      <div className="flex items-center gap-2 font-medium text-sm text-gray-700 dark:text-gray-300">
        {title && <span>{title}</span>}
      </div>
      
      <div className="flex items-center flex-wrap gap-2">
        {onSample && (
          <Button variant="outline" size="sm" onClick={onSample} className="gap-1.5 text-xs h-8">
            <FileCode className="h-3.5 w-3.5" />
            Sample
          </Button>
        )}
        
        {onUpload && (
          <>
            <Button variant="outline" size="sm" onClick={() => fileInputRef.current?.click()} className="gap-1.5 text-xs h-8">
              <Upload className="h-3.5 w-3.5" />
              Upload
            </Button>
            <input 
              type="file" 
              accept=".json,application/json,.txt,text/plain" 
              ref={fileInputRef} 
              onChange={handleFileUpload} 
              className="hidden" 
            />
          </>
        )}
        
        {actions}
        
        {onCopy && (
          <Button variant="outline" size="sm" onClick={onCopy} className="gap-1.5 text-xs h-8">
            <Copy className="h-3.5 w-3.5" />
            Copy
          </Button>
        )}
        
        {onDownload && (
          <Button variant="outline" size="sm" onClick={onDownload} className="gap-1.5 text-xs h-8">
            <Download className="h-3.5 w-3.5" />
            Download
          </Button>
        )}
        
        {onClear && (
          <Button variant="ghost" size="sm" onClick={onClear} className="gap-1.5 text-xs h-8 text-red-600 border border-red-200 hover:border-red-300 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:border-red-900/50 dark:hover:border-red-800 dark:hover:bg-red-900/20">
            <Trash2 className="h-3.5 w-3.5" />
            Clear
          </Button>
        )}
      </div>
    </div>
  );
}
