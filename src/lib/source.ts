import type { PageTree } from "fumadocs-core/server";

export const pageTree: PageTree.Root = {
  name: "OpenTemplates",
  children: [
    {
      type: "separator",
      name: "Getting Started",
    },
    {
      type: "page",
      name: "Introduction",
      url: "/docs",
    },
    {
      type: "page",
      name: "AI Agent Standard",
      url: "/docs/agent-standard",
    },
    {
      type: "separator",
      name: "Full Templates",
    },
    {
      type: "folder",
      name: "Templates",
      defaultOpen: true,
      children: [
        {
          type: "page",
          name: "AI Tech Summit",
          url: "/docs/templates/conference",
        },
        {
          type: "page",
          name: "Developer Portfolio",
          url: "/docs/templates/portfolio",
        },
        {
          type: "page",
          name: "Ecommerce Storefront",
          url: "/docs/templates/ecommerce",
        },
        {
          type: "page",
          name: "Product Collection",
          url: "/docs/templates/collection",
        },
        {
          type: "page",
          name: "SaaS Launch Starter",
          url: "/docs/templates/starter",
        },
      ],
    },
    {
      type: "separator",
      name: "Component Library",
    },
    {
      type: "folder",
      name: "Marketing",
      defaultOpen: true,
      children: [
        {
          type: "page",
          name: "Hero Simple",
          url: "/docs/components/hero-simple",
        },
        {
          type: "page",
          name: "Feature Grid",
          url: "/docs/components/feature-grid",
        },
        {
          type: "page",
          name: "Feature Screenshot",
          url: "/docs/components/feature-screenshot",
        },
        {
          type: "page",
          name: "Feature Sticky",
          url: "/docs/components/feature-sticky",
        },
        {
          type: "page",
          name: "Header Dropdown",
          url: "/docs/components/header-dropdownful",
        },
        {
          type: "page",
          name: "Header with Stats",
          url: "/docs/components/header-stats",
        },
        {
          type: "page",
          name: "Pricing Simple",
          url: "/docs/components/pricing-simple",
        },
        {
          type: "page",
          name: "Stats Metrics",
          url: "/docs/components/stats-simple",
        },
        {
          type: "page",
          name: "Partner Logos",
          url: "/docs/components/logo-lined-up",
        },
        {
          type: "page",
          name: "Team Leadership",
          url: "/docs/components/teams-basic",
        },
        {
          type: "page",
          name: "Blog Cards",
          url: "/docs/components/blogs-simple",
        },
        {
          type: "page",
          name: "Contact Form",
          url: "/docs/components/contact-basic",
        },
        {
          type: "page",
          name: "CTA Banner",
          url: "/docs/components/cta-product-screenshot",
        },
        {
          type: "page",
          name: "Newsletter Subscribe",
          url: "/docs/components/subscribe-detailed",
        },
        {
          type: "page",
          name: "Announcement Banner",
          url: "/docs/components/banner-thin",
        },
        {
          type: "page",
          name: "User Directory",
          url: "/docs/components/user-list",
        },
        {
          type: "page",
          name: "Testimonial Quote",
          url: "/docs/components/testimonial-simple",
        },
      ],
    },
    {
      type: "folder",
      name: "Ecommerce",
      defaultOpen: true,
      children: [
        {
          type: "page",
          name: "Store Navigation",
          url: "/docs/components/ecommerce-navigation",
        },
        {
          type: "page",
          name: "Category Catalogue",
          url: "/docs/components/ecommerce-category-catalogue",
        },
        {
          type: "page",
          name: "Product Features Grid",
          url: "/docs/components/ecommerce-product-features",
        },
        {
          type: "page",
          name: "Promo Mosaic Hero",
          url: "/docs/components/ecommerce-promo-section",
        },
        {
          type: "page",
          name: "Product Simple Grid",
          url: "/docs/components/ecommerce-product-grid",
        },
        {
          type: "page",
          name: "Product Inline Queue",
          url: "/docs/components/ecommerce-product-inline-queue",
        },
        {
          type: "page",
          name: "Faceted Filter Drawer",
          url: "/docs/components/ecommerce-filters",
        },
      ],
    },
    {
      type: "folder",
      name: "Pitch & Slices",
      defaultOpen: true,
      children: [
        {
          type: "page",
          name: "Minimalist Header",
          url: "/docs/components/pitch-header",
        },
        {
          type: "page",
          name: "Marquee Logo Loop",
          url: "/docs/components/pitch-client-logos",
        },
        {
          type: "page",
          name: "Three-Column Bento Grid",
          url: "/docs/components/pitch-bento-grid",
        },
        {
          type: "page",
          name: "Option Comparison",
          url: "/docs/components/pitch-option-compare",
        },
      ],
    },
    {
      type: "folder",
      name: "Starter & Motion",
      defaultOpen: true,
      children: [
        {
          type: "page",
          name: "Orbiting Avatars",
          url: "/docs/components/starter-orbiting-avatars",
        },
        {
          type: "page",
          name: "Dual-Tier Pricing",
          url: "/docs/components/starter-pricing-two-tier",
        },
        {
          type: "page",
          name: "Moving Object Hero",
          url: "/docs/components/starter-hero-moving",
        },
      ],
    },
  ],
};
