import Link from "next/link";
import { FileJson } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 gap-8 lg:gap-12">
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <FileJson className="h-5 w-5 text-gray-900 dark:text-gray-100" />
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                JSON Toolkit
              </span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs md:max-w-sm leading-relaxed text-justify">
              An all-in-one toolkit to effortlessly format, validate, minify, and convert JSON data. Designed to help you clean up messy code, catch syntax errors instantly, and organize complex data structures with ease.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-4 text-sm">Tools</h3>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li><Link href="/json-formatter" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">JSON Formatter</Link></li>
              <li><Link href="/json-validator" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">JSON Validator</Link></li>
              <li><Link href="/json-minifier" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">JSON Minifier</Link></li>
              <li><Link href="/json-tree-viewer" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">JSON Tree Viewer</Link></li>
              <li><Link href="/json-sorter" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">JSON Sorter</Link></li>
              <li><Link href="/json-to-csv" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">JSON to CSV</Link></li>
              <li><Link href="/json-to-ts" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">JSON to TS</Link></li>
              <li><Link href="/json-statistics" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">JSON Statistics</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-4 text-sm">Resources</h3>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li><Link href="/guides" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Guides</Link></li>
              <li><Link href="/guides/what-is-json" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">What is JSON?</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-4 text-sm">Legal & Company</h3>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li><Link href="/about" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">About</Link></li>
              <li><Link href="/privacy" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex justify-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} JSON Toolkit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
