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
import {  CommandLineIcon, ArrowTopRightOnSquareIcon  } from "@/components/icons";

export const metadata: Metadata = {
  title: "AI Agent Standard (llms.txt) | OpenTemplates Documentation",
  description:
    "How to use OpenTemplates with autonomous AI coding agents like Antigravity, Cursor, Windsurf, Claude Code, and GitHub Copilot.",
};

export default function AgentStandardPage() {
  return (
    <DocsPage full>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs uppercase tracking-wider font-semibold text-emerald-600 dark:text-emerald-400">
          Agent Integration
        </span>
      </div>
      <DocsTitle>Autonomous AI Agent Pickup Standard</DocsTitle>
      <DocsDescription>
        How to seamlessly feed OpenTemplates components and full-page templates directly into autonomous AI coding assistants.
      </DocsDescription>

      <DocsBody>
        <Callout title="Machine-Readable Specification" type="info">
          OpenTemplates implements the standard <code className="font-mono">llms.txt</code> format. You can provide{" "}
          <Link href="/llms.txt" target="_blank" className="font-semibold underline">
            /llms.txt
          </Link>{" "}
          directly to your LLM or agent runtime.
        </Callout>

        <h2 className="text-xl font-bold mt-10 mb-4 text-gray-900 dark:text-gray-100">
          Core Principles for Agent Readiness
        </h2>

        <div className="space-y-4 my-6 text-sm text-gray-600 dark:text-gray-300">
          <p>
            Traditional component libraries often rely on opaque npm abstractions, deeply nested theme providers, or CSS preprocessor lock-in that confuse AI coding assistants. OpenTemplates is intentionally designed with four agent-friendly principles:
          </p>

          <ol className="list-decimal list-inside space-y-2 pl-2">
            <li>
              <strong>Self-Contained Slices:</strong> Each component lives in an isolated folder with clear import boundaries.
            </li>
            <li>
              <strong>Standard Tailwind Utility Classes:</strong> Zero custom CSS preprocessor macros; standard Tailwind utilities provide full predictability to language models.
            </li>
            <li>
              <strong>Accessible Primitives:</strong> Standard Headless UI and Heroicons with proper ARIA semantics.
            </li>
            <li>
              <strong>Deterministic Typing:</strong> Clean TypeScript interfaces for all props and data contracts.
            </li>
          </ol>
        </div>

        <h2 className="text-xl font-bold mt-10 mb-4 text-gray-900 dark:text-gray-100">
          Quick Start with Cursor or Antigravity
        </h2>

        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          Add the following instruction to your project prompt or agent configuration:
        </p>

        <pre className="not-prose bg-gray-950 p-4 rounded-xl text-xs font-mono text-emerald-400 overflow-x-auto">
{`"Reference the OpenTemplates repository (https://github.com/apsrcreatix/tailwind-open-templates)
Check llms.txt for the component index.
Use existing component slices to build our interface without inventing redundant styles."`}
        </pre>

        <h2 className="text-xl font-bold mt-10 mb-4 text-gray-900 dark:text-gray-100">
          Explore Component Catalog
        </h2>

        <Cards>
          <Card
            title="Marketing Slices"
            href="/docs/components/hero-simple"
            description="17 marketing components including heroes, feature grids, pricing, and testimonial blocks."
          />
          <Card
            title="Ecommerce Slices"
            href="/docs/components/ecommerce-navigation"
            description="7 ecommerce components including mega-menus, product grids, and filter drawers."
          />
          <Card
            title="Full Templates"
            href="/docs/templates/conference"
            description="5 complete production-ready templates ready to deploy."
          />
        </Cards>
      </DocsBody>
    </DocsPage>
  );
}
