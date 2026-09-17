import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JSON Minifier & Compressor",
  description: "Compress your JSON by removing whitespace, line breaks, and indentation. Optimize your JSON payloads online.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
