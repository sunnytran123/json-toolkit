import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JSON to XML Converter",
  description: "Convert JSON data to XML format instantly. Free online tool for transforming JSON into structured XML documents.",
  alternates: {
    canonical: '/json-to-xml',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
