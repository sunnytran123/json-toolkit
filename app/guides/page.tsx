import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { Metadata } from "next";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "JSON Guides",
  description: "Learn everything you need to know about JSON, how to format it, and how to validate it.",
};

const guides = [
  {
    title: "What is JSON?",
    description: "Explore the foundational syntax of JSON and understand its role as the ubiquitous standard for web data interchange.",
    href: "/guides/what-is-json",
    date: "Sep 2026"
  },
  {
    title: "Formatting JSON",
    description: "Techniques and best practices for beautifying and indenting JSON payloads to ensure human readability and maintainability.",
    href: "/guides/how-to-format-json",
    date: "Sep 2026"
  },
  {
    title: "Validating JSON",
    description: "Identify common syntactic anomalies and utilize robust validation mechanisms to ensure strict compliance with JSON specifications.",
    href: "/guides/how-to-validate-json",
    date: "Sep 2026"
  },
  {
    title: "JSON Schema",
    description: "An architectural guide to defining JSON Schemas for rigorous validation of data structures, types, and constraints.",
    href: "/guides/understanding-json-schema",
    date: "Sep 2026"
  },
  {
    title: "Minifying JSON",
    description: "Strategies for payload minification to optimize network bandwidth utilization and reduce latency in distributed systems.",
    href: "/guides/minifying-json",
    date: "Sep 2026"
  },
  {
    title: "JSON vs. XML",
    description: "An analytical comparison between JSON and XML, detailing the paradigm shift toward JSON in modern RESTful API architectures.",
    href: "/guides/json-vs-xml",
    date: "Sep 2026"
  }
];

export default function GuidesPage() {
  return (
    <PageContainer>
      <div className="mb-8 max-w-6xl mx-auto">
        <Breadcrumb items={[{ label: "Guides" }]} />
        <h1 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-3 mt-4">
          JSON Guides
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 text-justify">
          Master JSON data interchange with our comprehensive documentation and practical tutorials. This collection provides in-depth guidance on JSON syntax, structural optimization, schema validation, and payload minification, designed to equip developers with the necessary knowledge to implement robust data handling practices in modern applications.
        </p>
      </div>

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
            <p className="text-sm text-gray-500 dark:text-gray-400 flex-grow text-justify">
              {guide.description}
            </p>
          </Link>
        ))}
      </div>
    </PageContainer>
  );
}
