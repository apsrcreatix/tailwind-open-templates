import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Modern Ecommerce Storefront | OpenTemplates",
    template: "%s | OpenTemplates",
  },
  description: "Modern, responsive ecommerce storefront template built with React and Tailwind CSS.",
};

export default function EcommerceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-white">{children}</div>;
}
