import React from "react";
import { cn } from "@/lib/utils";

interface JsonEditorProps {
  value: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
  placeholder?: string;
  className?: string;
  error?: string | null;
}

export function JsonEditor({
  value,
  onChange,
  readOnly = false,
  placeholder = "Paste or type JSON here...",
  className,
  error
}: JsonEditorProps) {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  const lineNumbersRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (textareaRef.current && lineNumbersRef.current) {
      lineNumbersRef.current.scrollTop = textareaRef.current.scrollTop;
    }
  };

  return (
    <div className={cn("relative flex flex-col w-full h-full min-h-[300px] border rounded-lg bg-gray-50 dark:bg-gray-900 overflow-hidden", 
      error ? "border-red-300 dark:border-red-900/50" : "border-gray-200 dark:border-gray-800",
      className
    )}>
      {/* Basic line numbers column for aesthetics */}
      <div 
        ref={lineNumbersRef}
        className="absolute left-0 top-0 bottom-0 w-10 bg-gray-100 dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 text-right pr-2 py-4 select-none pointer-events-none text-xs text-gray-400 font-mono leading-relaxed overflow-hidden"
      >
        {Array.from({ length: Math.max(value.split('\n').length, 20) }).map((_, i) => (
          <div key={i} className="leading-[1.5rem]">{i + 1}</div>
        ))}
      </div>
      
      <textarea
        ref={textareaRef}
        onScroll={handleScroll}
        className="w-full h-full flex-grow p-4 pl-14 font-mono text-sm leading-[1.5rem] text-gray-800 dark:text-gray-200 bg-transparent resize-none focus:outline-none focus:ring-0"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        readOnly={readOnly}
        placeholder={placeholder}
        spellCheck={false}
      />
      
      {error && (
        <div className="absolute bottom-0 left-0 right-0 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 text-sm font-medium border-t border-red-200 dark:border-red-900/50 flex items-center">
          <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span className="truncate">{error}</span>
        </div>
      )}
    </div>
  );
}
