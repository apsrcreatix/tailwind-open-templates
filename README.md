# OpenTemplates

Open source Tailwind CSS and React component library, responsive slices, and production website templates, presented through [Fumadocs](https://github.com/fuma-nama/fumadocs). Framework agnostic, copy-paste ready, and structured for autonomous AI coding agents.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15-black.svg)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg)](https://tailwindcss.com/)
[![Documentation: Fumadocs](https://img.shields.io/badge/Docs-Fumadocs-purple.svg)](https://fumadocs.dev/)

## Table of Contents
- [Overview](#overview)
- [Quick Start](#quick-start)
- [Documentation Architecture (Fumadocs)](#documentation-architecture-fumadocs)
- [Full Templates Catalog](#full-templates-catalog)
- [Component Slices by Category](#component-slices-by-category)
- [Using with AI Coding Agents](#using-with-ai-coding-agents)
- [Architecture & Standards](#architecture--standards)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

OpenTemplates is an open source collection of production-grade UI components, responsive page slices, and complete website templates. Built with React 19, Next.js 15, and Tailwind CSS, it offers:

- **Fumadocs Documentation:** Clean sidebar navigation, responsive breadcrumbs, syntax-highlighted code blocks, and full-screen layouts powered by `fumadocs-ui`.
- **Modular Design:** Copy-paste single components or clone entire template configurations.
- **Framework Agnostic:** Pure React components with standard Tailwind CSS classes. No proprietary styling abstractions.
- **Interactive Component Playground:** Built-in component viewer with live previews, responsive viewport switchers (Desktop, Tablet, Mobile), and one-click code copying.
- **AI Agent Ready:** Indexed via `llms.txt` for tools like Antigravity, Cursor, Windsurf, Claude Code, and GitHub Copilot.
- **100% Free & Open Source:** Released under the MIT License for commercial and personal applications.

---

## Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/apsrcreatix/tailwind-open-templates.git
cd tailwind-open-templates
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the homepage, or navigate to [http://localhost:3000/docs](http://localhost:3000/docs) for the Fumadocs component documentation.

---

## Documentation Architecture (Fumadocs)

The documentation is organized using Fumadocs App Router layouts:

- `/docs`: Documentation introduction, quickstart, and full library index.
- `/docs/agent-standard`: Machine-readable agent pickup standard and Cursor integration guidelines.
- `/docs/components/[slug]`: Dedicated documentation page for each of the 31 component slices with interactive viewport switchers, live previews, source code, and agent prompts.
- `/docs/templates/[slug]`: Dedicated architecture and implementation guides for each of the 5 full-page templates.

---

## Full Templates Catalog

| Template | Live Route | Docs Route | Focus |
| :--- | :--- | :--- | :--- |
| **AI Global Summit & Tech Conference** | `/templates/conference` | `/docs/templates/conference` | Event registration, speaker directory, daily schedule tabs, sponsors cloud |
| **Developer & Creator Dark Mode Portfolio** | `/templates/portfolio` | `/docs/templates/portfolio` | Dark/Light mode toggle, career timeline, articles, speaking gigs, projects |
| **Modern Ecommerce Storefront** | `/templates/ecommerce` | `/docs/templates/ecommerce` | Store mega-menu navigation, promo heroes, specifications, category catalogue |
| **Faceted Product Collection** | `/templates/collection` | `/docs/templates/collection` | Slide-over drawer filters, item queue, sorting controls, product listings |
| **SaaS Product Launch Starter** | `/templates/starter` | `/docs/templates/starter` | All-in-one conversion funnel with hero, features, pricing, testimonials, team |

---

## Component Slices by Category

The library includes 31 modular slices located under `src/components/`:

### Marketing Slices (`src/components/(marketing)/`)
- `HeroSection/Simple`: Full hero section with integrated dropdown navigation and CTA buttons (`/docs/components/hero-simple`).
- `FeatureSection/GridBased`: Four-column feature matrix with icon headers (`/docs/components/feature-grid`).
- `FeatureSection/WithProductScreenShot`: Key value propositions alongside a product preview screenshot (`/docs/components/feature-screenshot`).
- `FeatureSection/WithStickyProductShot`: Split screen layout with sticky graphics and scrolling copy (`/docs/components/feature-sticky`).
- `Header/Dropdownful`: Complete responsive header with accessible flyout menus and mobile drawers (`/docs/components/header-dropdownful`).
- `HeaderSection/WithStats`: Dark background banner featuring key organizational metrics (`/docs/components/header-stats`).
- `PricingPage/Simple`: Single-tier membership pricing card with feature checklist (`/docs/components/pricing-simple`).
- `Stats/Simple`: Three-column metric counter (`/docs/components/stats-simple`).
- `Logo/LinedUp`: Social proof and partner logo grid (`/docs/components/logo-lined-up`).
- `Teams/Basic`: Team leadership grid with avatar portraits and roles (`/docs/components/teams-basic`).
- `Blogs/Simple`: Three-column publication and article cards (`/docs/components/blogs-simple`).
- `Contact/Basic`: Interactive contact form with input validation styles and toggle switches (`/docs/components/contact-basic`).
- `CTASection/WithProductScreenShot`: High-contrast dark call-to-action banner with radial gradient accents (`/docs/components/cta-product-screenshot`).
- `Subscribe/SideBySideDetailed`: Split newsletter signup form with guarantee badges (`/docs/components/subscribe-detailed`).
- `Banner/ThinStrip`: Top-of-page announcement strip with dismissal button (`/docs/components/banner-thin`).
- `UserList`: Active user list with roles and online presence indicators (`/docs/components/user-list`).
- `Testimonial/Simple`: Executive quotation card with author credentials (`/docs/components/testimonial-simple`).

### Ecommerce Slices (`src/components/(ecommerce)/`)
- `CategoryCatalogue/WithPreviewImage`: Category card grid with high-visibility imagery (`/docs/components/ecommerce-category-catalogue`).
- `ProductFeatures/WithImageGrid`: Technical specifications list paired with product photography (`/docs/components/ecommerce-product-features`).
- `PromoSection/WithImageTitle`: Hero promo banner with multi-image photo mosaic (`/docs/components/ecommerce-promo-section`).
- `Navigation/WithFeatures`: Storefront navigation with mega-menu category dropdowns and cart link (`/docs/components/ecommerce-navigation`).
- `ProductList/SimpleGrid`: Clean product grid with hover transitions and pricing (`/docs/components/ecommerce-product-grid`).
- `ProductList/InlineQueue`: Horizontal thumbnail queue with product color variants (`/docs/components/ecommerce-product-inline-queue`).
- `Filters/SidewaysContainer`: Responsive faceted filter drawer with sort menus (`/docs/components/ecommerce-filters`).

### Pitch & Slices (`src/components/(pitch)/`)
- `SimpleHeader`: Minimalist brand header with navigation links and mobile drawer (`/docs/components/pitch-header`).
- `ClientLogos`: Smooth infinite marquee banner for client and partner logos (`/docs/components/pitch-client-logos`).
- `ThreeColumnBentoGrid`: Bento box layout highlighting security, performance, and developer APIs (`/docs/components/pitch-bento-grid`).
- `OptionCompare`: Three-column comparative analysis cards (`/docs/components/pitch-option-compare`).

### Starter & Motion Slices (`src/components/(starter)/`)
- `OrbitingAvatars`: CSS keyframe powered rotating avatar orbits with hover pause (`/docs/components/starter-orbiting-avatars`).
- `PricingWithTwoSection`: Side-by-side comparative pricing tiers with recommended badge (`/docs/components/starter-pricing-two-tier`).
- `HeroWithMovingObjects`: Hero section combining orbital avatars and prominent CTA (`/docs/components/starter-hero-moving`).

---

## Using with AI Coding Agents

OpenTemplates is engineered to work seamlessly with autonomous coding assistants.

### Direct Agent Ingestion via llms.txt
Pass `llms.txt` or point your AI assistant directly to the repo:
```
Refer to the component index in llms.txt of tailwind-open-templates to construct our landing page.
```

See [AGENT_GUIDE.md](AGENT_GUIDE.md) for detailed agent prompts and workflow suggestions.

---

## Architecture & Standards

- **React 19 & Next.js 15:** Compatible with the latest App Router standards and Server/Client Components.
- **Fumadocs Integration:** Full documentation tree implemented with `fumadocs-ui` and `fumadocs-core`.
- **Tailwind CSS:** Configured with extended keyframes, animations (marquee, orbit, fade-in), and custom utilities in `src/app/globals.css`.
- **Accessibility:** Interactive menus, dialogs, popovers, and drawers utilize Headless UI primitives with correct ARIA roles and keyboard navigation.
- **Clean SVG Brand Assets:** Standard vector placeholders in `public/logos/` suitable for commercial adaptation.

---

## Contributing

Contributions are welcome. Feel free to open an issue or submit a pull request with new component slices, templates, or accessibility enhancements.

---

## License

This project is licensed under the [MIT License](LICENSE).
