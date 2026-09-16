import Link from "next/link";
import { ArrowRight, Braces, CheckCircle, AlignLeft, FileJson, SortAsc, FileDown, BarChart2 } from "lucide-react";
import { PageContainer, ToolHeader } from "@/components/layout/PageContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All JSON Tools",
  description: "A collection of simple and free tools for working with JSON.",
};

const categories = [
  {
    name: "Formatting",
    tools: [
      { name: "JSON Formatter", description: "Format and beautify JSON.", icon: AlignLeft, href: "/json-formatter" },
      { name: "JSON Minifier", description: "Compress JSON to save space.", icon: FileDown, href: "/json-minifier" },
    ]
  },
  {
    name: "Validation",
    tools: [
      { name: "JSON Validator", description: "Validate JSON and find errors.", icon: CheckCircle, href: "/json-validator" },
    ]
  },
  {
    name: "Visualization",
    tools: [
      { name: "JSON Tree Viewer", description: "Visualize JSON as a tree.", icon: Braces, href: "/json-tree-viewer" },
      { name: "JSON Statistics", description: "Analyze JSON size, depth, and keys.", icon: BarChart2, href: "/json-statistics" },
    ]
  },
  {
    name: "Utilities",
    tools: [
      { name: "JSON Sorter", description: "Sort JSON keys alphabetically.", icon: SortAsc, href: "/json-sorter" },
    ]
  },
  {
    name: "Conversion",
    tools: [
      { name: "JSON to CSV", description: "Convert JSON array to CSV.", icon: FileJson, href: "/json-to-csv" },
    ]
  }
];

export default function JsonToolsPage() {
  return (
    <PageContainer>
      <ToolHeader 
        title="JSON Tools"
        description="A collection of simple, fast, and free tools for working with JSON data directly in your browser."
        breadcrumbItems={[{ label: "JSON Tools" }]}
      />

      <div className="space-y-16 mt-12">
        {categories.map((category) => (
          <section key={category.name}>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-800 pb-2">
              {category.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.tools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <Link 
                    key={tool.name} 
                    href={tool.href}
                    className="group relative flex flex-col items-start p-6 rounded-2xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm transition-all dark:bg-gray-950 dark:border-gray-800 dark:hover:border-gray-700"
                  >
                    <div className="p-2.5 bg-gray-100 rounded-xl mb-4 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors dark:bg-gray-900 dark:group-hover:bg-blue-900/30 dark:group-hover:text-blue-400">
                      <Icon className="h-6 w-6 text-gray-700 group-hover:text-blue-600 transition-colors dark:text-gray-300 dark:group-hover:text-blue-400" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{tool.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{tool.description}</p>
                    <div className="mt-auto text-sm font-medium text-blue-600 dark:text-blue-400 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                      Open Tool <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </PageContainer>
  );
}
