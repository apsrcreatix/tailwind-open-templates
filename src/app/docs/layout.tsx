import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { pageTree } from "@/lib/source";

export default function DocsRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DocsLayout
      tree={pageTree}
      nav={{
        title: (
          <div className="flex items-center gap-2 font-bold text-base">
            <div className="h-7 w-7 rounded-lg bg-gray-950 dark:bg-white text-white dark:text-gray-950 flex items-center justify-center font-bold text-xs shadow-xs">
              OT
            </div>
            <span>OpenTemplates</span>
          </div>
        ),
        url: "/docs",
      }}
      sidebar={{
        defaultOpenLevel: 2,
      }}
      links={[
        {
          text: "Documentation",
          url: "/docs",
        },
        {
          text: "Full Templates",
          url: "/docs#templates",
        },
        {
          text: "llms.txt",
          url: "/llms.txt",
          external: true,
        },
        {
          text: "GitHub",
          url: "https://github.com/apsrcreatix/tailwind-open-templates",
          external: true,
        },
      ]}
    >
      {children}
    </DocsLayout>
  );
}
