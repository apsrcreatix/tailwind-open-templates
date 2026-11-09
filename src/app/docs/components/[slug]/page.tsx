import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  DocsPage,
  DocsBody,
  DocsTitle,
  DocsDescription,
} from "fumadocs-ui/page";
import { Callout } from "fumadocs-ui/components/callout";
import { registryComponents } from "@/data/componentRegistry";
import ComponentViewer from "@/components/showcase/ComponentViewer";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return registryComponents.map((component) => ({
    slug: component.id,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const component = registryComponents.find((c) => c.id === slug);
  if (!component) return {};

  return {
    title: `${component.title} | OpenTemplates Documentation`,
    description: component.description,
  };
}

export default async function ComponentDocPage({ params }: PageProps) {
  const { slug } = await params;
  const component = registryComponents.find((c) => c.id === slug);

  if (!component) {
    notFound();
  }

  return (
    <DocsPage full>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs uppercase tracking-wider font-semibold text-indigo-600 dark:text-indigo-400">
          {component.category}
        </span>
      </div>
      <DocsTitle>{component.title}</DocsTitle>
      <DocsDescription>{component.description}</DocsDescription>

      <DocsBody>
        <ComponentViewer component={component} />

        <h2 className="text-xl font-bold mt-10 mb-4 text-gray-900 dark:text-gray-100">
          Installation & Integration
        </h2>

        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          This component is entirely self-contained. To integrate it into your application, copy the source file from{" "}
          <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded font-mono text-indigo-600 dark:text-indigo-400">
            {component.filePath}
          </code>{" "}
          or use the Code tab above.
        </p>

        {component.dependencies.length > 0 ? (
          <Callout title="Dependencies Required" type="info">
            This component requires the following packages installed in your project:
            <div className="mt-2 flex flex-wrap gap-2">
              {component.dependencies.map((dep) => (
                <code
                  key={dep}
                  className="bg-white/80 dark:bg-gray-900 px-2 py-0.5 rounded text-xs font-mono font-semibold"
                >
                  npm install {dep}
                </code>
              ))}
            </div>
          </Callout>
        ) : (
          <Callout title="Zero External Dependencies" type="info">
            This component uses standard Tailwind CSS utility classes and React primitives. No additional third-party dependencies are required.
          </Callout>
        )}

        <h2 className="text-xl font-bold mt-10 mb-4 text-gray-900 dark:text-gray-100">
          Autonomous AI Agent Usage
        </h2>

        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          To instruct an autonomous AI coding agent (Antigravity, Cursor, Windsurf, Claude Code, or Copilot) to implement this component, switch to the <strong>Agent Prompt</strong> tab above and copy the formatted instruction.
        </p>
      </DocsBody>
    </DocsPage>
  );
}
