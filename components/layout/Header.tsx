import Link from "next/link";
import { FileJson, Menu } from "lucide-react";
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
            <Link href="/#tools" className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors">
              Tools
            </Link>
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
