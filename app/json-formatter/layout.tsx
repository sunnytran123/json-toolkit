import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JSON Formatter & Beautifier",
  description: "Format, beautify, and indent your JSON data online. Make your JSON readable with this free tool.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
