import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  DocsPage,
  DocsBody,
  DocsTitle,
  DocsDescription,
} from "fumadocs-ui/page";
import { Callout } from "fumadocs-ui/components/callout";
import {  ArrowTopRightOnSquareIcon  } from "@/components/icons";
import { registryTemplates } from "@/data/componentRegistry";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const templateSlugMap: Record<string, string> = {
  conference: "template-conference",
  portfolio: "template-portfolio",
  ecommerce: "template-ecommerce",
  collection: "template-collection",
  starter: "template-starter",
};

export async function generateStaticParams() {
  return Object.keys(templateSlugMap).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const templateId = templateSlugMap[slug];
  const template = registryTemplates.find((t) => t.id === templateId);
  if (!template) return {};

  return {
    title: `${template.title} | OpenTemplates Documentation`,
    description: template.description,
  };
}

export default async function TemplateDocPage({ params }: PageProps) {
  const { slug } = await params;
  const templateId = templateSlugMap[slug];
  const template = registryTemplates.find((t) => t.id === templateId);

  if (!template) {
    notFound();
  }

  return (
    <DocsPage full>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs uppercase tracking-wider font-semibold text-indigo-600 dark:text-indigo-400">
          Full Page Template
        </span>
      </div>
      <DocsTitle>{template.title}</DocsTitle>
      <DocsDescription>{template.description}</DocsDescription>

      <DocsBody>
        {/* Quick Actions Card */}
        <div className="not-prose my-6 p-6 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">
              Live Preview Available
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              Experience the fully rendered, responsive template in a dedicated window.
            </p>
          </div>
          <Link
            href={template.route}
            target="_blank"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-indigo-500 transition-colors"
          >
            <span>Open Live Template</span>
            <ArrowTopRightOnSquareIcon className="w-4 h-4" />
          </Link>
        </div>

        <h2 className="text-xl font-bold mt-10 mb-4 text-gray-900 dark:text-gray-100">
          Template Overview
        </h2>

        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          Source file located at:{" "}
          <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded font-mono text-indigo-600 dark:text-indigo-400">
            {template.filePath}
          </code>
        </p>

        <div className="flex flex-wrap gap-2 my-4">
          {template.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-2.5 py-1 rounded-md font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <Callout title="Production Deployment" type="info">
          This template is ready for immediate deployment on Vercel, Netlify, or any standard Next.js hosting provider. It requires zero private APIs or external database dependencies to run.
        </Callout>

        <h2 className="text-xl font-bold mt-10 mb-4 text-gray-900 dark:text-gray-100">
          Agent Prompt to Replicate
        </h2>

        <pre className="not-prose bg-gray-950 p-4 rounded-xl text-xs font-mono text-emerald-400 overflow-x-auto">
{`Prompt for AI Agent:
"Build a production page mirroring the OpenTemplates ${template.title}:
- File blueprint: ${template.filePath}
- Keep the responsive layout and typography
- Adapt styling to our application's branding"`}
        </pre>
      </DocsBody>
    </DocsPage>
  );
}
