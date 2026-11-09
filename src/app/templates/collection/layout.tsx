import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Collection with Filter Drawers | OpenTemplates",
  description: "Ecommerce collection listing with responsive sidebar filters and grid layouts.",
};

export default function CollectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-white">{children}</div>;
}
