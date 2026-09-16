import Link from "next/link";
import { PageContainer, ToolHeader } from "@/components/layout/PageContainer";
import { Metadata } from "next";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "JSON Guides",
  description: "Learn everything you need to know about JSON, how to format it, and how to validate it.",
};

const guides = [
  {
    title: "What is JSON?",
    description: "An introduction to JavaScript Object Notation, its syntax, and why it's the standard for data exchange on the web.",
    href: "/guides/what-is-json",
    date: "Sep 2023"
  },
  {
    title: "How to Format JSON",
    description: "Learn how to beautify and indent your JSON data to make it readable and maintainable.",
    href: "/guides/how-to-format-json",
    date: "Oct 2023"
  },
  {
    title: "How to Validate JSON",
    description: "Common JSON syntax errors and how to use validation tools to find and fix them.",
    href: "/guides/how-to-validate-json",
    date: "Nov 2023"
  }
];

export default function GuidesPage() {
  return (
    <PageContainer>
      <ToolHeader 
        title="JSON Guides"
        description="Learn how to work with JSON effectively. Short, practical guides for developers."
        breadcrumbItems={[
          { label: "Guides" }
        ]}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
        {guides.map((guide, idx) => (
          <Link 
            key={idx} 
            href={guide.href}
            className="group flex flex-col p-6 rounded-2xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm transition-all dark:bg-gray-950 dark:border-gray-800 dark:hover:border-gray-700"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg dark:bg-blue-900/30 dark:text-blue-400">
                <FileText className="h-5 w-5" />
              </div>
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{guide.date}</span>
            </div>
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {guide.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 flex-grow">
              {guide.description}
            </p>
          </Link>
        ))}
      </div>
    </PageContainer>
  );
}
