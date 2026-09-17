import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JSON Validator & Linter",
  description: "Validate your JSON data and find syntax errors instantly. A fast, free online JSON linter.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
