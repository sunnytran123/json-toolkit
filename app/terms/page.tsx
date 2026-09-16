import { PageContainer, ToolHeader } from "@/components/layout/PageContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for using JSON Toolkit.",
};

export default function TermsPage() {
  return (
    <PageContainer className="max-w-3xl">
      <ToolHeader 
        title="Terms of Service"
        description="Please read these terms carefully before using JSON Toolkit."
        breadcrumbItems={[
          { label: "Terms of Service" }
        ]}
      />

      <div className="prose prose-gray dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
        <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing and using JSON Toolkit, you accept and agree to be bound by the terms and provision of this agreement.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">2. Use License</h2>
        <p className="mb-4">
          Permission is granted to temporarily use the tools on JSON Toolkit's website for personal, non-commercial, or commercial transitory processing. This is the grant of a license, not a transfer of title.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">3. Disclaimer</h2>
        <p className="mb-4">
          The materials on JSON Toolkit's website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>
        <p className="mb-4">
          Furthermore, we do not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">4. Limitations</h2>
        <p className="mb-4">
          In no event shall JSON Toolkit or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on JSON Toolkit's website.
        </p>

        <p className="text-sm mt-12 text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
      </div>
    </PageContainer>
  );
}
