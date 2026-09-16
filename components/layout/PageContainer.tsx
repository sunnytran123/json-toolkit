import { Breadcrumb, BreadcrumbItem } from "@/components/navigation/Breadcrumb";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function PageContainer({ children, className = "" }: PageContainerProps) {
  return (
    <div className={`container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 ${className}`}>
      {children}
    </div>
  );
}

interface ToolHeaderProps {
  title: string;
  description: string;
  breadcrumbItems: BreadcrumbItem[];
}

export function ToolHeader({ title, description, breadcrumbItems }: ToolHeaderProps) {
  return (
    <div className="mb-8">
      <Breadcrumb items={breadcrumbItems} />
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-3">
        {title}
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
        {description}
      </p>
    </div>
  );
}
