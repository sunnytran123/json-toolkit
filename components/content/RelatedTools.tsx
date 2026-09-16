import React from "react";
import Link from "next/link";
import { ArrowRight, AlignLeft, CheckCircle, FileDown, Braces, SortAsc, FileJson, BarChart2 } from "lucide-react";

interface RelatedToolsProps {
  currentTool: string;
}

const allTools = [
  { id: "formatter", name: "JSON Formatter", icon: AlignLeft, href: "/json-formatter" },
  { id: "validator", name: "JSON Validator", icon: CheckCircle, href: "/json-validator" },
  { id: "minifier", name: "JSON Minifier", icon: FileDown, href: "/json-minifier" },
  { id: "tree-viewer", name: "JSON Tree Viewer", icon: Braces, href: "/json-tree-viewer" },
  { id: "sorter", name: "JSON Sorter", icon: SortAsc, href: "/json-sorter" },
  { id: "csv", name: "JSON to CSV", icon: FileJson, href: "/json-to-csv" },
  { id: "statistics", name: "JSON Statistics", icon: BarChart2, href: "/json-statistics" },
];

export function RelatedTools({ currentTool }: RelatedToolsProps) {
  // Filter out the current tool and take up to 4 others
  const tools = allTools
    .filter(tool => tool.id !== currentTool)
    .sort(() => 0.5 - Math.random()) // Simple shuffle for variety
    .slice(0, 4);

  return (
    <div className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-800">
      <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
        Related Tools
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <Link
              key={tool.id}
              href={tool.href}
              className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm transition-all dark:bg-gray-950 dark:border-gray-800 dark:hover:border-gray-700 group"
            >
              <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors dark:bg-gray-900 dark:group-hover:bg-blue-900/30 dark:group-hover:text-blue-400">
                <Icon className="h-4 w-4 text-gray-700 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-blue-400" />
              </div>
              <span className="font-medium text-sm text-gray-900 dark:text-gray-100">{tool.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
