import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JSON to TypeScript Converter",
  description: "Convert JSON objects to TypeScript interfaces instantly. Free online tool for generating accurate TS types from JSON data.",
  alternates: {
    canonical: '/json-to-ts',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
