import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JSON Tree Viewer & Explorer",
  description: "Visualize and explore your JSON data as an interactive, collapsible tree structure. Free online JSON viewer.",
  alternates: {
    canonical: '/json-tree-viewer',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
