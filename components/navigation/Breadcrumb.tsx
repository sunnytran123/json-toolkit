import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import React from "react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-base text-gray-500 dark:text-gray-400">
        <li>
          <Link
            href="/"
            className="flex items-center hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            <Home className="h-5 w-5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <li>
              <ChevronRight className="h-5 w-5 text-gray-400 dark:text-gray-600" />
            </li>
            <li>
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-900 dark:text-gray-100 font-medium" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
}
