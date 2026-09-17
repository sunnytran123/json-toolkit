import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jsontoolkit.com'),
  title: {
    template: "%s | JSON Toolkit",
    default: "JSON Toolkit - Free Online JSON Tools & Converters",
  },
  description: "Format, validate, minify, view and convert JSON directly in your browser. Free, fast and private online JSON tools for developers.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jsontoolkit.com",
    title: "JSON Toolkit - Free Online JSON Tools",
    description: "Format, validate, minify, view and convert JSON directly in your browser. Free, fast and private.",
    siteName: "JSON Toolkit",
  },
  twitter: {
    card: "summary_large_image",
    title: "JSON Toolkit",
    description: "Free, fast and private online JSON tools for developers.",
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <body className="font-sans min-h-full flex flex-col bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-200">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
