import { PageContainer, ToolHeader } from "@/components/layout/PageContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about JSON Toolkit and our mission to build simple, fast, and private JSON tools.",
};

export default function AboutPage() {
  return (
    <PageContainer className="max-w-3xl">
      <ToolHeader 
        title="About JSON Toolkit"
        description="Simple, fast, and private JSON tools for developers and everyday users."
        breadcrumbItems={[
          { label: "About" }
        ]}
      />

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="text-lg text-gray-600 dark:text-gray-400">
          JSON Toolkit was created with a single goal: to provide the best possible experience for working with JSON data in the browser. 
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Our Philosophy</h2>
        <ul className="space-y-4 text-gray-600 dark:text-gray-400">
          <li>
            <strong className="text-gray-900 dark:text-gray-200">100% Client-Side:</strong> We believe your data is yours. That's why every tool on this website runs entirely in your browser using JavaScript. We do not have a backend, we do not have a database, and we never see or store the JSON data you paste here.
          </li>
          <li>
            <strong className="text-gray-900 dark:text-gray-200">No Friction:</strong> You shouldn't have to create an account, log in, or provide an email address just to format a JSON string. Open the page, paste your data, get your result, and leave.
          </li>
          <li>
            <strong className="text-gray-900 dark:text-gray-200">Fast & Minimalist:</strong> We strip away the unnecessary. No heavy animations, no bloated libraries, and no distracting colors. Just a clean, Apple-inspired interface that gets out of your way and lets you work.
          </li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Open Web</h2>
        <p className="text-gray-600 dark:text-gray-400">
          This project is built using modern web technologies including Next.js, React, and Tailwind CSS. It is an example of what can be built when you focus on performance, usability, and privacy first.
        </p>
      </div>
    </PageContainer>
  );
}
