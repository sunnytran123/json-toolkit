import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JSON Validator & Linter",
  description: "Validate your JSON data and find syntax errors instantly. A fast, free online JSON linter and validator designed for developers.",
  alternates: {
    canonical: '/json-validator',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
