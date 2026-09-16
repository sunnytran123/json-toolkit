import { PageContainer } from "@/components/layout/PageContainer";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about JSON Toolkit and our mission to build simple, fast, and private JSON tools.",
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
          Engineered for performance and privacy, delivering sophisticated JSON utilities for developers and enterprise users. Our comprehensive suite of client-side tools empowers engineering teams to validate, format, and transform complex JSON payloads with zero latency and absolute data security. By eliminating server-side processing, we guarantee that your proprietary schemas and sensitive data never leave your local environment.
        </p>
      </div>

      <div className="mt-8 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 md:p-12 shadow-sm max-w-6xl mx-auto">
        <div className="prose prose-slate dark:prose-invert max-w-none text-justify">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            JSON Toolkit was architected with a singular objective: to deliver a superior, browser-native environment for processing JSON data. Whether you are a seasoned software engineer debugging complex REST API payloads, a data scientist structuring extensive datasets, or a systems architect designing data pipelines, this platform is optimized to streamline your technical workflow.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Recognizing that existing web-based utilities often suffer from ad-heavy interfaces, poor user experience (UX), and severe data privacy vulnerabilities—specifically the transmission of sensitive data to external backend servers—we engineered a secure, client-side alternative.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Architectural Philosophy</h2>
          <ul className="space-y-4 text-gray-600 dark:text-gray-400">
            <li>
              <strong className="text-gray-900 dark:text-gray-200">Zero-Trust Architecture (100% Client-Side):</strong> We operate on a strict zero-trust model. All computational operations and data parsing occur exclusively within your browser's execution environment using standard Web APIs. We do not maintain a backend infrastructure, utilize databases, or transmit your JSON payloads.
            </li>
            <li>
              <strong className="text-gray-900 dark:text-gray-200">Frictionless Utility:</strong> We eliminate onboarding barriers. There are no authentication protocols, account creation requirements, or session tracking mechanisms. Access the utility, execute your data transformation, and exit seamlessly.
            </li>
            <li>
              <strong className="text-gray-900 dark:text-gray-200">Optimized Performance & Minimalist UI:</strong> We prioritize computational efficiency and cognitive clarity. By excluding superfluous libraries and complex DOM manipulations, we deliver an ultra-responsive interface designed strictly for professional productivity.
            </li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Strict Privacy Commitment</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Security and privacy are foundational architectural principles of JSON Toolkit. By exclusively leveraging modern browser APIs for DOM and memory management, we ensure that data processing remains strictly isolated within your local hardware footprint. You can confidently process proprietary schemas, sensitive customer records, or API credentials with absolute immunity from server-side data exfiltration.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Modern Technology Stack</h2>
          <p className="text-gray-600 dark:text-gray-400">
            This platform is engineered using a modern web stack comprising Next.js, React, and Tailwind CSS. It demonstrates the capabilities of modern frontend architectures when prioritizing performance benchmarks, accessibility, and strict data privacy. We employ continuous integration practices to iterate and refine our utilities based on developer community feedback.
          </p>
        </div>
      </div>
    </PageContainer>
  );
}
