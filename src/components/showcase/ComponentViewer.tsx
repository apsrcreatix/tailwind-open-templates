"use client";

import { useState } from "react";
import { 
  ComputerDesktopIcon,
  DeviceTabletIcon,
  DevicePhoneMobileIcon,
  ClipboardDocumentIcon,
  CheckIcon,
  CommandLineIcon,
  SparklesIcon,
 } from "@/components/icons";
import { RegistryComponent } from "@/data/componentRegistry";

// Import all live components for render
import HeroSectionSimple from "@/components/(marketing)/HeroSection/Simple";
import FeatureSectionGridBased from "@/components/(marketing)/FeatureSection/GridBased";
import FeatureSectionWithProduct from "@/components/(marketing)/FeatureSection/WithProductScreenShot";
import FeatureSectionWithStickyProductShots from "@/components/(marketing)/FeatureSection/WithStickyProductShot";
import HeaderDropdownful from "@/components/(marketing)/Header/Dropdownful";
import HeaderSectionWithStats from "@/components/(marketing)/HeaderSection/WithStats";
import PricingPageSimple from "@/components/(marketing)/PricingPage/Simple";
import StatsSimple from "@/components/(marketing)/Stats/Simple";
import LogoLinedUp from "@/components/(marketing)/Logo/LinedUp";
import TeamsBasic from "@/components/(marketing)/Teams/Basic";
import BlogsSimple from "@/components/(marketing)/Blogs/Simple";
import ContactBasic from "@/components/(marketing)/Contact/Basic";
import CTASectionWithProductScreenShot from "@/components/(marketing)/CTASection/WithProductScreenShot";
import SubscribeSideBySide from "@/components/(marketing)/Subscribe/SideBySideDetailed";
import BannerThinBanner from "@/components/(marketing)/Banner/ThinStrip";
import UserList from "@/components/(marketing)/UserList";
import TestimonialSimple from "@/components/(marketing)/Testimonial/Simple";

import CategoryCatalogueWithPreviewImage from "@/components/(ecommerce)/CategoryCatalogue/WithPreviewImage";
import ProductFeaturesWithImageGrid from "@/components/(ecommerce)/ProductFeatures/WithImageGrid";
import PromoSectionWithImageTitle from "@/components/(ecommerce)/PromoSection/WithImageTitle";
import NavigationWithFeatures from "@/components/(ecommerce)/Navigation/WithFeatures";
import ProductListSimpleGrid from "@/components/(ecommerce)/ProductList/SimpleGrid";
import ProductListInlineQueue from "@/components/(ecommerce)/ProductList/InlineQueue";
import FiltersSidewaysContainer from "@/components/(ecommerce)/Filters/SidewaysContainer";

import SimpleHeader from "@/components/(pitch)/SimpleHeader";
import ClientLogos from "@/components/(pitch)/ClientLogos";
import ThreeColumnBentoGrid from "@/components/(pitch)/ThreeColumnBentoGrid";
import OptionCompare from "@/components/(pitch)/OptionCompare";

import OrbitingAvatars from "@/components/(starter)/OrbitingAvatars";
import PricingWithTwoSection from "@/components/(starter)/PricingWithTwoSection";
import HeroWithMovingObjects from "@/components/(starter)/HeroWithMovingObjects";

const componentRenderMap: Record<string, React.ReactNode> = {
  "hero-simple": <HeroSectionSimple />,
  "feature-grid": <FeatureSectionGridBased />,
  "feature-screenshot": <FeatureSectionWithProduct />,
  "feature-sticky": <FeatureSectionWithStickyProductShots />,
  "header-dropdownful": <HeaderDropdownful />,
  "header-stats": <HeaderSectionWithStats />,
  "pricing-simple": <PricingPageSimple />,
  "stats-simple": <StatsSimple />,
  "logo-lined-up": <LogoLinedUp />,
  "teams-basic": <TeamsBasic />,
  "blogs-simple": <BlogsSimple />,
  "contact-basic": <ContactBasic />,
  "cta-product-screenshot": <CTASectionWithProductScreenShot />,
  "subscribe-detailed": <SubscribeSideBySide />,
  "banner-thin": <BannerThinBanner />,
  "user-list": <UserList />,
  "testimonial-simple": <TestimonialSimple />,

  "ecommerce-category-catalogue": <CategoryCatalogueWithPreviewImage />,
  "ecommerce-product-features": <ProductFeaturesWithImageGrid />,
  "ecommerce-promo-section": <PromoSectionWithImageTitle />,
  "ecommerce-navigation": <NavigationWithFeatures />,
  "ecommerce-product-grid": <ProductListSimpleGrid />,
  "ecommerce-product-inline-queue": <ProductListInlineQueue />,
  "ecommerce-filters": <FiltersSidewaysContainer />,

  "pitch-header": <SimpleHeader />,
  "pitch-client-logos": <ClientLogos />,
  "pitch-bento-grid": <ThreeColumnBentoGrid />,
  "pitch-option-compare": <OptionCompare />,

  "starter-orbiting-avatars": <OrbitingAvatars />,
  "starter-pricing-two-tier": <PricingWithTwoSection />,
  "starter-hero-moving": <HeroWithMovingObjects />,
};

type Viewport = "desktop" | "tablet" | "mobile";
type TabType = "preview" | "code" | "agent";

const viewportWidths: Record<Viewport, string> = {
  desktop: "w-full",
  tablet: "max-w-[768px] mx-auto shadow-lg border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden",
  mobile: "max-w-[375px] mx-auto shadow-lg border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden",
};

export default function ComponentViewer({
  component,
}: {
  component: RegistryComponent;
}) {
  const [viewport, setViewport] = useState<Viewport>("desktop");
  const [activeTab, setActiveTab] = useState<TabType>("preview");
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedAgent, setCopiedAgent] = useState(false);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(component.code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleCopyAgentPrompt = async () => {
    const prompt = `Task: Integrate the "${component.title}" component from OpenTemplates.
Reference file: ${component.filePath}
Required dependencies: ${component.dependencies.length > 0 ? component.dependencies.join(", ") : "Standard React + Tailwind CSS"}

Source Code:
\`\`\`tsx
${component.code}
\`\`\`

Instructions:
1. Adapt styling to our project theme colors.
2. Keep accessibility and responsive breakpoints intact.
3. Replace sample data with production content.`;

    try {
      await navigator.clipboard.writeText(prompt);
      setCopiedAgent(true);
      setTimeout(() => setCopiedAgent(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="not-prose my-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xs overflow-hidden">
      {/* Top Controls Toolbar */}
      <div className="border-b border-gray-200 dark:border-gray-800 px-4 py-3 flex flex-wrap items-center justify-between gap-3 bg-gray-50/70 dark:bg-gray-900/70">
        {/* Tab switchers */}
        <div className="inline-flex rounded-lg bg-gray-200/70 dark:bg-gray-800 p-0.5 text-xs font-medium">
          <button
            onClick={() => setActiveTab("preview")}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              activeTab === "preview"
                ? "bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 shadow-xs"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              activeTab === "code"
                ? "bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 shadow-xs"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
            }`}
          >
            Code
          </button>
          <button
            onClick={() => setActiveTab("agent")}
            className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-md transition-colors ${
              activeTab === "agent"
                ? "bg-white dark:bg-gray-950 text-purple-700 dark:text-purple-300 shadow-xs"
                : "text-gray-600 dark:text-gray-400 hover:text-purple-600"
            }`}
          >
            <SparklesIcon className="w-3.5 h-3.5" />
            Agent Prompt
          </button>
        </div>

        {/* Viewport switchers (only visible on preview tab) */}
        {activeTab === "preview" && (
          <div className="hidden sm:inline-flex items-center rounded-lg bg-gray-200/70 dark:bg-gray-800 p-0.5 text-xs">
            <button
              title="Desktop View (100%)"
              onClick={() => setViewport("desktop")}
              className={`p-1.5 rounded-md transition-colors ${
                viewport === "desktop"
                  ? "bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 shadow-xs"
                  : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-200"
              }`}
            >
              <ComputerDesktopIcon className="w-4 h-4" />
            </button>
            <button
              title="Tablet View (768px)"
              onClick={() => setViewport("tablet")}
              className={`p-1.5 rounded-md transition-colors ${
                viewport === "tablet"
                  ? "bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 shadow-xs"
                  : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-200"
              }`}
            >
              <DeviceTabletIcon className="w-4 h-4" />
            </button>
            <button
              title="Mobile View (375px)"
              onClick={() => setViewport("mobile")}
              className={`p-1.5 rounded-md transition-colors ${
                viewport === "mobile"
                  ? "bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 shadow-xs"
                  : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-200"
              }`}
            >
              <DevicePhoneMobileIcon className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyCode}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              copiedCode
                ? "bg-emerald-600 text-white"
                : "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-800"
            }`}
          >
            {copiedCode ? (
              <>
                <CheckIcon className="w-3.5 h-3.5" />
                Copied
              </>
            ) : (
              <>
                <ClipboardDocumentIcon className="w-3.5 h-3.5" />
                Copy Code
              </>
            )}
          </button>

          <button
            onClick={handleCopyAgentPrompt}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
              copiedAgent
                ? "bg-purple-600 text-white border-purple-600"
                : "bg-white dark:bg-gray-900 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800 hover:bg-purple-50 dark:hover:bg-purple-950/50"
            }`}
          >
            {copiedAgent ? (
              <>
                <CheckIcon className="w-3.5 h-3.5" />
                Prompt Copied
              </>
            ) : (
              <>
                <SparklesIcon className="w-3.5 h-3.5" />
                Copy for Agent
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Tab Content */}
      <div className="p-2 sm:p-6 bg-gray-50/50 dark:bg-gray-950/50 min-h-[320px] flex items-center justify-center overflow-x-auto">
        {activeTab === "preview" && (
          <div className={`transition-all duration-300 ${viewportWidths[viewport]}`}>
            <div className="relative isolate bg-white rounded-xl shadow-xs overflow-hidden border border-gray-200 dark:border-gray-800 w-full">
              {componentRenderMap[component.id] || (
                <div className="p-8 text-center text-sm text-gray-500">
                  Preview not available for {component.title}.
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "code" && (
          <div className="w-full">
            <div className="rounded-xl overflow-hidden bg-gray-950 border border-gray-800 text-gray-100">
              <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800 text-xs font-mono text-gray-400">
                <span>{component.filePath}</span>
                <span>
                  {component.dependencies.length > 0
                    ? `Dependencies: ${component.dependencies.join(", ")}`
                    : "Zero external dependencies"}
                </span>
              </div>
              <pre className="p-4 text-xs font-mono overflow-x-auto max-h-[500px] scrollbar-thin scrollbar-thumb-gray-800">
                <code>{component.code}</code>
              </pre>
            </div>
          </div>
        )}

        {activeTab === "agent" && (
          <div className="w-full">
            <div className="rounded-xl overflow-hidden bg-gray-900 border border-gray-800 text-gray-200 p-5 font-mono text-xs">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-gray-800 text-purple-400 font-semibold">
                <CommandLineIcon className="w-4 h-4" />
                <span>Agent Prompt for Cursor, Antigravity, or Copilot</span>
              </div>
              <p className="text-gray-400 text-xs mb-3 font-sans">
                Paste this instruction directly into your coding assistant to scaffold this component with all styles and dependencies intact.
              </p>
              <pre className="bg-gray-950 p-4 rounded-lg text-emerald-400 whitespace-pre-wrap leading-relaxed overflow-x-auto">
{`Task: Implement the "${component.title}" component from OpenTemplates.
Source file: ${component.filePath}
Dependencies: ${component.dependencies.length > 0 ? component.dependencies.join(", ") : "Standard Tailwind CSS + React"}

Instructions:
1. Copy into your components directory.
2. Maintain responsive grid and container rules.
3. Connect real state or props to replace static placeholders.`}
              </pre>
            </div>
          </div>
        )}
      </div>

      {/* Metadata Bottom Strip */}
      <div className="border-t border-gray-200 dark:border-gray-800 px-4 py-2.5 bg-white dark:bg-gray-900 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-500 font-mono">
        <span>Path: <strong className="text-gray-700 dark:text-gray-300">{component.filePath}</strong></span>
        <span>Usage: <code className="text-indigo-600 dark:text-indigo-400">{component.usage}</code></span>
      </div>
    </div>
  );
}
