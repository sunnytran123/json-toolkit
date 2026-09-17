import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JSON to CSV Converter",
  description: "Convert JSON arrays to CSV format instantly. Free online tool to transform JSON data into Excel-compatible CSV files.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
