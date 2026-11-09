# OpenTemplates: AI Agent Ingestion Guide

This document provides instructions for developers using AI coding assistants (such as Antigravity, Cursor, Windsurf, Claude Code, GitHub Copilot, and Gemini) with OpenTemplates.

## Core Philosophy
OpenTemplates components and templates are authored with:
1. Standard Tailwind CSS utility classes without custom preprocessor magic.
2. Accessible React 19 / Next.js 15 App Router components using Headless UI and Heroicons.
3. Decoupled, self-contained file architecture: each component lives in its own directory with an `index.tsx` and can be copied or imported independently.
4. Clean TypeScript interfaces for all data structures and props.

## How to Query the Library

### Machine-Readable Index: llms.txt
The repository root contains an `llms.txt` file (accessible via `/llms.txt` when deployed) following the standard machine-readable LLM indexing specification.

When prompting your agent, you can include:
```
Refer to the component index in llms.txt of tailwind-open-templates.
```

### Component Categories & File Paths

#### Marketing Slices
- Hero Section: `src/components/(marketing)/HeroSection/Simple/index.tsx`
- Grid Features: `src/components/(marketing)/FeatureSection/GridBased/index.tsx`
- Product Screenshot Feature: `src/components/(marketing)/FeatureSection/WithProductScreenShot/index.tsx`
- Sticky Graphic Feature: `src/components/(marketing)/FeatureSection/WithStickyProductShot/index.tsx`
- Mega Dropdown Header: `src/components/(marketing)/Header/Dropdownful/index.tsx`
- Stat Header: `src/components/(marketing)/HeaderSection/WithStats/index.tsx`
- Single Tier Pricing: `src/components/(marketing)/PricingPage/Simple/index.tsx`
- Stat Metrics: `src/components/(marketing)/Stats/Simple/index.tsx`
- Partner Logo Cloud: `src/components/(marketing)/Logo/LinedUp/index.tsx`
- Team Leadership: `src/components/(marketing)/Teams/Basic/index.tsx`
- Blog Post Cards: `src/components/(marketing)/Blogs/Simple/index.tsx`
- Contact Form: `src/components/(marketing)/Contact/Basic/index.tsx`
- Dark CTA Banner: `src/components/(marketing)/CTASection/WithProductScreenShot/index.tsx`
- Newsletter Subscribe: `src/components/(marketing)/Subscribe/SideBySideDetailed/index.tsx`
- Announcement Banner: `src/components/(marketing)/Banner/ThinStrip/index.tsx`
- Active User List: `src/components/(marketing)/UserList/index.tsx`
- Testimonial Quote: `src/components/(marketing)/Testimonial/Simple/index.tsx`

#### Ecommerce Slices
- Category Catalogue: `src/components/(ecommerce)/CategoryCatalogue/WithPreviewImage/index.tsx`
- Tech Specs Grid: `src/components/(ecommerce)/ProductFeatures/WithImageGrid/index.tsx`
- Hero Mosaic Promo: `src/components/(ecommerce)/PromoSection/WithImageTitle/index.tsx`
- Storefront Navigation: `src/components/(ecommerce)/Navigation/WithFeatures/index.tsx`
- Product Grid: `src/components/(ecommerce)/ProductList/SimpleGrid/index.tsx`
- Horizontal Product Queue: `src/components/(ecommerce)/ProductList/InlineQueue/index.tsx`
- Filter Drawer & Sorting: `src/components/(ecommerce)/Filters/SidewaysContainer/index.tsx`

#### Pitch & Starter Slices
- Clean Brand Header: `src/components/(pitch)/SimpleHeader/index.tsx`
- Marquee Logo Loop: `src/components/(pitch)/ClientLogos/index.tsx`
- Three-Column Bento Grid: `src/components/(pitch)/ThreeColumnBentoGrid/index.tsx`
- Comparison Cards: `src/components/(pitch)/OptionCompare/index.tsx`
- Kinetic Orbiting Avatars: `src/components/(starter)/OrbitingAvatars/index.tsx`
- Dual-Tier Pricing: `src/components/(starter)/PricingWithTwoSection/index.tsx`
- Moving Object Hero: `src/components/(starter)/HeroWithMovingObjects/index.tsx`

#### Full Production Templates
- Tech Conference Summit: `src/app/templates/conference/page.tsx`
- Developer Portfolio: `src/app/templates/portfolio/page.tsx`
- Ecommerce Storefront: `src/app/templates/ecommerce/page.tsx`
- Product Collection: `src/app/templates/collection/page.tsx`
- SaaS Product Starter: `src/app/templates/starter/page.tsx`

## Sample Prompts for Autonomous Coding Agents

### Prompt: Building a SaaS Marketing Page
```
Agent: Assemble a responsive SaaS marketing landing page by borrowing components from tailwind-open-templates:
1. Navigation: src/components/(marketing)/Header/Dropdownful
2. Hero: src/components/(marketing)/HeroSection/Simple
3. Social Proof: src/components/(pitch)/ClientLogos
4. Value Pillars: src/components/(pitch)/ThreeColumnBentoGrid
5. Feature Detail: src/components/(marketing)/FeatureSection/WithProductScreenShot
6. Pricing: src/components/(starter)/PricingWithTwoSection
7. FAQ / Testimonial: src/components/(marketing)/Testimonial/Simple
8. Call to Action: src/components/(marketing)/CTASection/WithProductScreenShot

Keep all components responsive and use our app's Tailwind color palette.
```

### Prompt: Adding an Ecommerce Catalog
```
Agent: Build a product catalog page using OpenTemplates components:
- Top bar: src/components/(ecommerce)/Navigation/WithFeatures
- Filter sidebar: src/components/(ecommerce)/Filters/SidewaysContainer
- Product listings: src/components/(ecommerce)/ProductList/SimpleGrid

Ensure the filter drawer works on mobile viewports.
```
