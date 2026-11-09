import type { Metadata } from "next";
import Link from "next/link";
import {
  DocsPage,
  DocsBody,
  DocsTitle,
  DocsDescription,
} from "fumadocs-ui/page";
import { Callout } from "fumadocs-ui/components/callout";
import { Card, Cards } from "fumadocs-ui/components/card";
import { registryComponents, registryTemplates } from "@/data/componentRegistry";

export const metadata: Metadata = {
  title: "Introduction | OpenTemplates Documentation",
  description:
    "Open source Tailwind CSS and React component library, responsive slices, and production website templates.",
};

export default function DocsIntroductionPage() {
  const marketingComponents = registryComponents.filter(
    (c) => c.category === "marketing"
  );
  const ecommerceComponents = registryComponents.filter(
    (c) => c.category === "ecommerce"
  );
  const pitchComponents = registryComponents.filter(
    (c) => c.category === "pitch"
  );
  const starterComponents = registryComponents.filter(
    (c) => c.category === "starter"
  );

  return (
    <DocsPage full>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs uppercase tracking-wider font-semibold text-indigo-600 dark:text-indigo-400">
          Documentation
        </span>
      </div>
      <DocsTitle>OpenTemplates Documentation</DocsTitle>
      <DocsDescription>
        Production-grade Tailwind CSS and React component slices, responsive sections, and complete website templates. Framework agnostic, copy-paste ready, and structured for autonomous AI coding agents.
      </DocsDescription>

      <DocsBody>
        <Callout title="100% Free & Open Source" type="info">
          OpenTemplates is released under the permissive MIT License. You are free to use, modify, and distribute all code in personal and commercial projects without restrictions.
        </Callout>

        <h2 className="text-xl font-bold mt-10 mb-4 text-gray-900 dark:text-gray-100">
          Quick Start
        </h2>

        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          All components in this library are built with React 19, Next.js 15, and Tailwind CSS. To use any component in your project:
        </p>

        <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-6 pl-2">
          <li>Ensure Tailwind CSS is configured in your project.</li>
          <li>
            Optional headless primitives:{" "}
            <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded font-mono">
              npm install @headlessui/react
            </code> (All icons are pure SVG with zero icon package dependencies).
          </li>
          <li>Navigate to any component page in the sidebar and copy the code.</li>
        </ol>

        <h2 className="text-xl font-bold mt-10 mb-4 text-gray-900 dark:text-gray-100">
          Full Page Templates
        </h2>

        <Cards>
          {registryTemplates.map((template) => (
            <Card
              key={template.id}
              title={template.title}
              href={`/docs/templates/${template.id.replace("template-", "")}`}
              description={template.description}
            />
          ))}
        </Cards>

        <h2 className="text-xl font-bold mt-12 mb-4 text-gray-900 dark:text-gray-100">
          Marketing Components ({marketingComponents.length})
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 my-4 not-prose">
          {marketingComponents.map((comp) => (
            <Link
              key={comp.id}
              href={`/docs/components/${comp.id}`}
              className="p-3.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-indigo-500 hover:shadow-xs transition-all"
            >
              <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                {comp.title}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                {comp.description}
              </p>
            </Link>
          ))}
        </div>

        <h2 className="text-xl font-bold mt-12 mb-4 text-gray-900 dark:text-gray-100">
          Ecommerce Components ({ecommerceComponents.length})
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 my-4 not-prose">
          {ecommerceComponents.map((comp) => (
            <Link
              key={comp.id}
              href={`/docs/components/${comp.id}`}
              className="p-3.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-indigo-500 hover:shadow-xs transition-all"
            >
              <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                {comp.title}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                {comp.description}
              </p>
            </Link>
          ))}
        </div>

        <h2 className="text-xl font-bold mt-12 mb-4 text-gray-900 dark:text-gray-100">
          Pitch & Motion Components ({pitchComponents.length + starterComponents.length})
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 my-4 not-prose">
          {[...pitchComponents, ...starterComponents].map((comp) => (
            <Link
              key={comp.id}
              href={`/docs/components/${comp.id}`}
              className="p-3.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-indigo-500 hover:shadow-xs transition-all"
            >
              <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                {comp.title}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                {comp.description}
              </p>
            </Link>
          ))}
        </div>
      </DocsBody>
    </DocsPage>
  );
}
