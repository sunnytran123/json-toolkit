import { PageContainer } from "@/components/layout/PageContainer";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About JSON Toolkit",
  description: "Learn more about JSON Toolkit and our mission to build simple, fast, and private JSON tools for developers around the world.",
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <PageContainer>
      <div className="mb-8 max-w-6xl mx-auto">
        <Breadcrumb items={[{ label: "About" }]} />
        <h1 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-3 mt-4">
          About JSON Toolkit
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 text-justify">
          A simple, fast, and secure suite of JSON tools built for developers. We process everything locally in your browser, ensuring your data never leaves your device.
        </p>
      </div>

      <div className="mt-8 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 md:p-12 shadow-sm max-w-6xl mx-auto">
        <div className="prose prose-slate dark:prose-invert max-w-none text-justify">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            JSON Toolkit was created to provide a fast, ad-free, and privacy-focused environment for working with JSON data. Whether you're debugging APIs, formatting data, or validating schemas, our tools are designed to streamline your workflow.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Why use JSON Toolkit?</h2>
          <ul className="space-y-4 text-gray-600 dark:text-gray-400">
            <li>
              <strong className="text-gray-900 dark:text-gray-200">100% Client-Side (Private):</strong> All processing happens directly in your browser. We don't have backend servers and we never store or transmit your sensitive data.
            </li>
            <li>
              <strong className="text-gray-900 dark:text-gray-200">No Sign-ups Required:</strong> Just open the site and start using the tools immediately. No accounts, no subscriptions, no tracking.
            </li>
            <li>
              <strong className="text-gray-900 dark:text-gray-200">Fast & Minimalist:</strong> We prioritize speed and a clean, distraction-free interface so you can get your work done quickly.
            </li>
          </ul>
        </div>
      </div>
    </PageContainer>
  );
}
