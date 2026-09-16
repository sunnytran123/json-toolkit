import Link from "next/link";
import { ArrowRight, Braces, CheckCircle, AlignLeft, FileJson, FileDown, Code, Database, FileCode2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PageContainer } from "@/components/layout/PageContainer";
import { HeroBackground } from "@/components/ui/HeroBackground";

export default function Home() {
  const tools = [
    { name: "JSON Formatter", description: "Format and beautify JSON.", icon: AlignLeft, href: "/json-formatter" },
    { name: "JSON Validator", description: "Validate JSON and find errors.", icon: CheckCircle, href: "/json-validator" },
    { name: "JSON Minifier", description: "Compress JSON to save space.", icon: FileDown, href: "/json-minifier" },
    { name: "JSON Tree Viewer", description: "Visualize JSON as a tree.", icon: Braces, href: "/json-tree-viewer" },
    { name: "JSON to CSV", description: "Convert JSON array to CSV.", icon: FileJson, href: "/json-to-csv" },
    { name: "JSON to TS", description: "Convert JSON to TypeScript.", icon: Code, href: "/json-to-ts" },
    { name: "JSON to XML", description: "Convert JSON to XML.", icon: FileCode2, href: "/json-to-xml" },
    { name: "JSON to SQL", description: "Convert JSON array to SQL.", icon: Database, href: "/json-to-sql" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-50 dark:bg-gray-900/30 border-b border-gray-200 dark:border-gray-800">
        {/* Abstract Background Effect */}
        <HeroBackground />

        <PageContainer className="relative z-10 py-20 md:py-32 text-center max-w-4xl mx-auto">

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 hover:scale-105 transition-transform duration-300 inline-block">
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
      <section id="tools" className="pt-16 pb-8 md:pt-24 md:pb-8">
        <PageContainer>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
              Everything you need
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Clean, validate, and convert JSON data instantly with ease.
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
      <section className="bg-white pb-16 pt-4 dark:bg-gray-950">
        <PageContainer className="max-w-6xl mx-auto">
          <div className="relative flex items-center mb-10">
            <div className="flex-grow border-t border-gray-200 dark:border-gray-800"></div>
            <span className="flex-shrink-0 px-4 text-sm font-semibold text-gray-400 dark:text-gray-500 tracking-widest uppercase">
              Core Features
            </span>
            <div className="flex-grow border-t border-gray-200 dark:border-gray-800"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center text-sm text-gray-600 dark:text-gray-400">
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="h-14 w-14 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-center justify-center mb-2 text-blue-600 dark:text-blue-400 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-blue-200 dark:group-hover:border-blue-800 group-hover:-translate-y-1 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20">
                <AlignLeft className="h-6 w-6" />
              </div>
              <span className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition-colors">Format</span>
              <span className="text-xs text-gray-500">Beautify data</span>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="h-14 w-14 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-center justify-center mb-2 text-blue-600 dark:text-blue-400 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-blue-200 dark:group-hover:border-blue-800 group-hover:-translate-y-1 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20">
                <CheckCircle className="h-6 w-6" />
              </div>
              <span className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition-colors">Validate</span>
              <span className="text-xs text-gray-500">Find syntax errors</span>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="h-14 w-14 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-center justify-center mb-2 text-blue-600 dark:text-blue-400 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-blue-200 dark:group-hover:border-blue-800 group-hover:-translate-y-1 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20">
                <FileDown className="h-6 w-6" />
              </div>
              <span className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition-colors">Minify</span>
              <span className="text-xs text-gray-500">Compress files</span>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="h-14 w-14 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-center justify-center mb-2 text-blue-600 dark:text-blue-400 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-blue-200 dark:group-hover:border-blue-800 group-hover:-translate-y-1 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20">
                <Braces className="h-6 w-6" />
              </div>
              <span className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition-colors">Tree View</span>
              <span className="text-xs text-gray-500">Explore structures</span>
            </div>
            <div className="flex flex-col items-center gap-2 col-span-2 md:col-span-1 group cursor-pointer">
              <div className="h-14 w-14 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-center justify-center mb-2 text-blue-600 dark:text-blue-400 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-blue-200 dark:group-hover:border-blue-800 group-hover:-translate-y-1 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20">
                <FileJson className="h-6 w-6" />
              </div>
              <span className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition-colors">Convert</span>
              <span className="text-xs text-gray-500">To CSV, TS & more</span>
            </div>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}
