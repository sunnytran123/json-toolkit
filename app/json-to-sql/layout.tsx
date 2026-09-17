import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JSON to SQL Converter",
  description: "Convert JSON arrays to SQL INSERT statements instantly. Free online tool for generating SQL from JSON data.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
