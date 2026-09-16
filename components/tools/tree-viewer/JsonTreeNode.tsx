import React, { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface JsonTreeNodeProps {
  label: string;
  value: any;
  isLast?: boolean;
  defaultExpanded?: boolean;
}

export function JsonTreeNode({ label, value, isLast = true, defaultExpanded = true }: JsonTreeNodeProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const isObject = value !== null && typeof value === 'object';
  const isArray = Array.isArray(value);
  const isEmpty = isObject && Object.keys(value).length === 0;

  const toggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isObject && !isEmpty) {
      setExpanded(!expanded);
    }
  };

  const renderValue = () => {
    if (value === null) return <span className="text-gray-500 dark:text-gray-400 italic">null</span>;
    if (typeof value === 'boolean') return <span className="text-purple-600 dark:text-purple-400">{value ? 'true' : 'false'}</span>;
    if (typeof value === 'number') return <span className="text-orange-600 dark:text-orange-400">{value}</span>;
    if (typeof value === 'string') return <span className="text-green-600 dark:text-green-400">"{value}"</span>;
    
    if (isArray) {
      if (isEmpty) return <span className="text-gray-600 dark:text-gray-400">[]</span>;
      return <span className="text-gray-500 dark:text-gray-400">[{value.length} items]</span>;
    }
    
    if (isObject) {
      if (isEmpty) return <span className="text-gray-600 dark:text-gray-400">{"{}"}</span>;
      return <span className="text-gray-500 dark:text-gray-400">{"{...}"}</span>;
    }

    return <span>{String(value)}</span>;
  };

  return (
    <div className="font-mono text-sm leading-6 ml-4">
      <div 
        className={cn(
          "flex items-start cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800/50 -ml-1 pl-1 rounded",
          (!isObject || isEmpty) && "cursor-default"
        )}
        onClick={toggle}
      >
        <span className="inline-flex items-center justify-center w-4 h-5 -ml-4 shrink-0">
          {isObject && !isEmpty && (
            expanded 
              ? <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
              : <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
          )}
        </span>
        
        <div className="whitespace-pre-wrap break-all">
          {label && (
            <span className="text-blue-600 dark:text-blue-400 mr-1 font-medium">"{label}":</span>
          )}
          
          {(!isObject || !expanded || isEmpty) && (
            <>
              {renderValue()}
              {!isLast && <span className="text-gray-500">,</span>}
            </>
          )}

          {isObject && expanded && !isEmpty && (
            <span className="text-gray-600 dark:text-gray-400">{isArray ? '[' : '{'}</span>
          )}
        </div>
      </div>

      {isObject && expanded && !isEmpty && (
        <div>
          {Object.entries(value).map(([key, val], index, arr) => (
            <JsonTreeNode 
              key={key} 
              label={isArray ? '' : key} 
              value={val} 
              isLast={index === arr.length - 1} 
            />
          ))}
          <div className={cn(
            "text-gray-600 dark:text-gray-400",
            // If it's the root node, no margin, otherwise align with bracket
            label ? "ml-0" : "-ml-4"
          )}>
            {isArray ? ']' : '}'}{!isLast && <span className="text-gray-500">,</span>}
          </div>
        </div>
      )}
    </div>
  );
}
