import type { Metadata } from "next";
import { RootProvider } from "fumadocs-ui/provider";
import "fumadocs-ui/style.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "OpenTemplates | Free & Open Source Tailwind CSS React Templates & Components",
    template: "%s | OpenTemplates",
  },
  description:
    "Curated collection of production-ready, framework-agnostic Tailwind CSS and React component slices, landing pages, and full templates. Built for modern developers and AI coding agents.",
  keywords: [
    "tailwind css",
    "react",
    "components",
    "templates",
    "fumadocs",
    "landing page",
    "ecommerce",
    "open source",
    "ui library",
    "ai agent ready",
  ],
  authors: [{ name: "OpenTemplates Community" }],
  openGraph: {
    title: "OpenTemplates | Open Source Tailwind CSS & React Templates",
    description:
      "Production-ready component slices, marketing pages, and full templates for Tailwind CSS and React. Free, MIT licensed, and AI agent ready.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth" suppressHydrationWarning>
      <body className="min-h-full bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 antialiased font-sans">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
