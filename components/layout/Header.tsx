import Link from "next/link";
import { FileJson, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-950/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-gray-900 text-white p-1 rounded-md dark:bg-gray-100 dark:text-gray-900 group-hover:opacity-90 transition-opacity">
              <FileJson className="h-5 w-5" />
            </div>
            <span className="font-semibold text-gray-900 tracking-tight dark:text-white">
              JSON Toolkit
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <div className="relative group">
              <Link href="/#tools" className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors py-2">
                Tools <ChevronDown className="h-4 w-4 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
              </Link>
              <div className="absolute left-0 top-full w-56 rounded-xl bg-white dark:bg-gray-900 shadow-xl border border-gray-100 dark:border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 -mt-2 group-hover:mt-0 z-50">
                <div className="py-2">
                  <div className="px-3 pb-2 pt-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">Utilities</div>
                  <Link href="/json-formatter" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800/50 dark:hover:text-blue-400 transition-colors">JSON Formatter</Link>
                  <Link href="/json-minifier" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800/50 dark:hover:text-blue-400 transition-colors">JSON Minifier</Link>
                  <Link href="/json-validator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800/50 dark:hover:text-blue-400 transition-colors">JSON Validator</Link>
                  <Link href="/json-tree-viewer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800/50 dark:hover:text-blue-400 transition-colors">JSON Tree Viewer</Link>
                  
                  <div className="border-t border-gray-100 dark:border-gray-800 my-1"></div>
                  <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Converters</div>
                  
                  <Link href="/json-to-csv" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800/50 dark:hover:text-blue-400 transition-colors">JSON to CSV</Link>
                  <Link href="/json-to-sql" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800/50 dark:hover:text-blue-400 transition-colors">JSON to SQL</Link>
                  <Link href="/json-to-ts" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800/50 dark:hover:text-blue-400 transition-colors">JSON to TS</Link>
                  <Link href="/json-to-xml" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800/50 dark:hover:text-blue-400 transition-colors">JSON to XML</Link>
                </div>
              </div>
            </div>
            <Link href="/guides" className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors">
              Guides
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors">
              About
            </Link>
          </nav>

          <ThemeToggle />

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden items-center">
            <Button variant="ghost" size="icon" aria-label="Toggle Menu">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
