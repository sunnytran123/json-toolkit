import Link from "next/link";
import { ArrowRight, Braces, CheckCircle, AlignLeft, FileJson, SortAsc, FileDown, BarChart2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PageContainer } from "@/components/layout/PageContainer";

export default function Home() {
  const tools = [
    { name: "JSON Formatter", description: "Format and beautify JSON.", icon: AlignLeft, href: "/json-formatter" },
    { name: "JSON Validator", description: "Validate JSON and find errors.", icon: CheckCircle, href: "/json-validator" },
    { name: "JSON Minifier", description: "Compress JSON to save space.", icon: FileDown, href: "/json-minifier" },
    { name: "JSON Tree Viewer", description: "Visualize JSON as a tree.", icon: Braces, href: "/json-tree-viewer" },
    { name: "JSON Sorter", description: "Sort JSON keys alphabetically.", icon: SortAsc, href: "/json-sorter" },
    { name: "JSON to CSV", description: "Convert JSON array to CSV.", icon: FileJson, href: "/json-to-csv" },
    { name: "JSON Statistics", description: "Analyze JSON size, depth, and keys.", icon: BarChart2, href: "/json-statistics" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-50 dark:bg-gray-900/30 border-b border-gray-200 dark:border-gray-800">
        <PageContainer className="py-20 md:py-32 text-center max-w-4xl mx-auto">

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            JSON Toolkit
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Simple tools for working with JSON. Format, validate, minify, view and convert JSON directly in your browser.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/json-formatter">
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href="#tools">
              <Button size="lg" variant="outline">
                View All Tools
              </Button>
            </a>
          </div>
        </PageContainer>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-16 md:py-24">
        <PageContainer>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
              Everything you need
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Free, no registration required, completely private. Your data never leaves your browser.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {tools.map((tool) => {
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
                  <p className="text-sm text-gray-500 dark:text-gray-400">{tool.description}</p>
                </Link>
              );
            })}
          </div>
        </PageContainer>
      </section>
      
      {/* Features/Benefits */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900/30 border-t border-gray-200 dark:border-gray-800">
        <PageContainer className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center text-sm font-medium text-gray-600 dark:text-gray-400">
            <div className="flex flex-col items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center mb-2">Free</div>
              No hidden fees
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center mb-2">No Reg</div>
              No account needed
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center mb-2">Private</div>
              Data stays local
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center mb-2">Browser</div>
              No downloads
            </div>
            <div className="flex flex-col items-center gap-2 col-span-2 md:col-span-1">
              <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center mb-2">Fast</div>
              Instant results
            </div>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}
