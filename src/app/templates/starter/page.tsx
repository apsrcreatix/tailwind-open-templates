import { Fragment } from "react";
import BannerThinBanner from "@/components/(marketing)/Banner/ThinStrip";
import BlogsSimple from "@/components/(marketing)/Blogs/Simple";
import CTASectionWithProductScreenShot from "@/components/(marketing)/CTASection/WithProductScreenShot";
import ContactBasic from "@/components/(marketing)/Contact/Basic";
import FeatureSectionGridBased from "@/components/(marketing)/FeatureSection/GridBased";
import FeatureSectionWithProduct from "@/components/(marketing)/FeatureSection/WithProductScreenShot";
import FeatureSectionWithStickyProductShots from "@/components/(marketing)/FeatureSection/WithStickyProductShot";
import HeaderSectionWithStats from "@/components/(marketing)/HeaderSection/WithStats";
import HeroSectionSimple from "@/components/(marketing)/HeroSection/Simple";
import LogoLinedUp from "@/components/(marketing)/Logo/LinedUp";
import PricingPageSimple from "@/components/(marketing)/PricingPage/Simple";
import StatsSimple from "@/components/(marketing)/Stats/Simple";
import SubscribeSideBySide from "@/components/(marketing)/Subscribe/SideBySideDetailed";
import TeamsBasic from "@/components/(marketing)/Teams/Basic";
import TestimonialSimple from "@/components/(marketing)/Testimonial/Simple";

export default function LandingPageExample() {
  return (
    <Fragment>
      <BannerThinBanner />
      <HeroSectionSimple />
      <LogoLinedUp />
      <FeatureSectionWithProduct />
      <FeatureSectionGridBased />
      <FeatureSectionWithStickyProductShots />
      <PricingPageSimple />
      <StatsSimple />
      <TestimonialSimple />
      <BlogsSimple />
      <TeamsBasic />
      <ContactBasic />
      <CTASectionWithProductScreenShot />
      <HeaderSectionWithStats />
      <SubscribeSideBySide />
    </Fragment>
  );
}
