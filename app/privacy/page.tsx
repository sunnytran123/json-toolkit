import { PageContainer, ToolHeader } from "@/components/layout/PageContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for JSON Toolkit. Learn how we protect your data.",
};

export default function PrivacyPage() {
  return (
    <PageContainer className="max-w-3xl">
      <ToolHeader 
        title="Privacy Policy"
        description="We take your privacy seriously. Here is how we handle your data."
        breadcrumbItems={[
          { label: "Privacy Policy" }
        ]}
      />

      <div className="prose prose-gray dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-900/50 rounded-lg p-6 mb-8 text-blue-900 dark:text-blue-200">
          <h3 className="text-lg font-bold mb-2">TL;DR: We don't want your data.</h3>
          <p>
            All JSON processing is done <strong>locally in your browser</strong>. 
            We do not upload, store, log, or analyze the JSON data you paste into our tools.
          </p>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">1. Data Processing</h2>
        <p className="mb-4">
          JSON Toolkit is a collection of client-side web applications. When you use tools like the JSON Formatter, Validator, or Minifier, the data you input is processed entirely within your web browser using JavaScript.
        </p>
        <p className="mb-4">
          We do not transmit your JSON data to any backend server or database. It never leaves your device.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">2. Analytics</h2>
        <p className="mb-4">
          We may use basic, privacy-friendly analytics (such as counting page views) to understand which tools are popular and how the website is performing. This analytics data is completely anonymous and does not track individual users across the web or collect any personal information.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">3. Cookies</h2>
        <p className="mb-4">
          We do not use tracking cookies. We may use local storage (which stays on your device) to save your preferences, such as your chosen theme (light/dark mode).
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">4. Third-party Links</h2>
        <p className="mb-4">
          Our website may contain links to third-party websites or services that are not owned or controlled by us. We are not responsible for the privacy practices of those websites.
        </p>

        <p className="text-sm mt-12 text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
      </div>
    </PageContainer>
  );
}
