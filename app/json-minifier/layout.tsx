import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JSON Minifier & Compressor",
  description: "Compress your JSON by removing whitespace, line breaks, and indentation. Optimize your JSON payloads online for free.",
  alternates: {
    canonical: '/json-minifier',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
