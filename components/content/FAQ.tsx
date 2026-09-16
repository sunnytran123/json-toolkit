import React from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export function FAQ({ items }: FAQProps) {
  // We use details/summary for simple native accordion behavior without extra JS/state
  return (
    <div className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-800">
      <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4 max-w-3xl">
        {items.map((item, i) => (
          <details 
            key={i} 
            className="group rounded-xl border border-gray-200 bg-white dark:bg-gray-950 dark:border-gray-800 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-gray-900 dark:text-white font-medium">
              {item.question}
              <ChevronDown className="h-5 w-5 text-gray-500 transition duration-300 group-open:-rotate-180" />
            </summary>
            <div className="px-4 pb-4 text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
