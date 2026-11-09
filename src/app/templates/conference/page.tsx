import Image from "next/image";
import Link from "next/link";
import SponsorLogos from "./SponsorLogos";
import SpeakersSection from "./SpeakersSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Global Summit 2026 | OpenTemplates",
  description:
    "Join us for the AI Global Summit 2026, featuring leading experts and innovators in the field of artificial intelligence.",
  keywords: [
    "AI",
    "Artificial Intelligence",
    "Global Summit",
    "2026",
    "Conference",
    "Innovation",
  ],
  authors: [
    {
      name: "OpenTemplates Community",
      url: "https://github.com/apsrcreatix/tailwind-open-templates",
    },
  ],
  openGraph: {
    title: "AI Global Summit 2026 | Conference Template",
    description:
      "Connect with pioneering minds shaping the future of AI through international collaboration.",
    url: "/templates/conference",
    siteName: "AI Global Summit",
    images: [
      {
        url: "https://images.unsplash.com/photo-1585160113536-a14b15e40174?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "AI Global Summit 2026",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Global Summit 2026 | Conference Template",
    description:
      "Join us for the AI Global Summit 2026, featuring leading experts and innovators in the field of artificial intelligence.",
    images:
      "https://images.unsplash.com/photo-1585160113536-a14b15e40174?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
};

export default function ConferencePage() {
  return (
    <div className="flex min-h-full">
      <div className="flex w-full flex-col">
        {/* Header */}
        <header className="relative z-50 flex-none lg:pt-11 animate-fade-in duration-1000 ease-out">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
            {/* Logo */}
            <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
              <h1 className="text-2xl font-bold text-orange-600">
                AI Global Summit 2026
              </h1>
            </div>

            {/* Date and Location */}
            <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto border-b border-orange-600/10 py-4 font-mono text-sm text-emerald-600 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
              <div className="mx-auto flex items-center gap-4 px-4">
                <p>
                  <time dateTime="2026-03-15">15</time>-
                  <time dateTime="2026-03-17">17 of March, 2026</time>
                </p>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 6 6"
                  className="h-1.5 w-1.5 overflow-visible fill-current stroke-current"
                >
                  <path
                    d="M3 0L6 3L3 6L0 3Z"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
                <p>New Delhi, India</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
              <Link
                href="/"
                className="inline-flex justify-center rounded-2xl bg-orange-500 p-4 text-base font-semibold text-white hover:bg-orange-600 focus:outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 active:text-white/70"
              >
                Register Now
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-auto">
          <div className="relative py-20 sm:pt-36 sm:pb-24">
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden -top-36 -bottom-14">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/97 via-emerald-50/97 to-orange-50/97 mix-blend-multiply z-10" />
              <Image
                alt="Background Pattern"
                fetchPriority="high"
                width="918"
                height="1495"
                className="absolute top-0 left-0 w-full h-full object-cover opacity-15"
                src="https://images.unsplash.com/photo-1585160113536-a14b15e40174?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-white z-20" />
              <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-white z-20" />
            </div>

            {/* Content with smoother animations */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
              <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
                <h1 className="font-display text-5xl font-bold tracking-tighter text-orange-600 sm:text-7xl opacity-0 translate-y-4 animate-[fade-in_0.8s_ease-out_0.2s_forwards]">
                  Shaping AI&apos;s Future Through{" "}
                  <span className="text-emerald-600">Global Collaboration</span>
                </h1>

                {/* Description with smoother animation */}
                <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-gray-900 opacity-0 translate-y-4 animate-[fade-in_0.8s_ease-out_0.4s_forwards]">
                  <p>
                    Join world-leading AI researchers, tech giants, and
                    innovators in New Delhi as we collaborate to harness
                    AI&apos;s potential for global advancement.
                  </p>
                </div>

                {/* Mobile CTA */}
                <Link
                  href="/"
                  className="inline-flex justify-center rounded-2xl bg-orange-500 p-4 text-base font-semibold text-white hover:bg-orange-600 focus:outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 active:text-white/70 mt-10 w-full sm:hidden"
                >
                  Register Now
                </Link>

                {/* Stats with smoother staggered animations */}
                <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:grid-cols-3">
                  <div className="opacity-0 translate-y-4 animate-[fade-in_0.8s_ease-out_0.6s_forwards]">
                    <dt className="font-mono text-sm text-emerald-600">
                      Global Leaders
                    </dt>
                    <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-gray-900">
                      25+ Countries
                    </dd>
                  </div>
                  <div className="opacity-0 translate-y-4 animate-[fade-in_0.8s_ease-out_0.7s_forwards]">
                    <dt className="font-mono text-sm text-emerald-600">
                      Venue
                    </dt>
                    <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-gray-900">
                      India Habitat Centre
                    </dd>
                  </div>
                  <div className="opacity-0 translate-y-4 animate-[fade-in_0.8s_ease-out_0.8s_forwards]">
                    <dt className="font-mono text-sm text-emerald-600">
                      Focus
                    </dt>
                    <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-gray-900">
                      AI Innovation
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <SpeakersSection />

          {/* Sponsors Section */}
          <div className="opacity-0 translate-y-4 animate-[fade-in_0.8s_ease-out_1s_forwards]">
            <SponsorLogos />
          </div>

          {/* Newsletter Section */}
          <section className="opacity-0 translate-y-4 animate-[fade-in_0.8s_ease-out_1.1s_forwards]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="relative -mx-4 overflow-hidden bg-orange-50 px-4 py-20 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-5xl md:px-16 xl:px-24 xl:py-36">
                <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
                  <div>
                    <p className="font-display text-4xl font-medium tracking-tighter text-gray-900 sm:text-5xl">
                      Join the{" "}
                      <span className="text-emerald-600">AI Revolution</span>
                    </p>
                    <p className="mt-4 text-lg tracking-tight text-gray-700">
                      Get exclusive updates about AI Global Summit 2026 and be
                      part of the international AI community.
                    </p>
                  </div>
                  <form>
                    <h3 className="text-lg font-semibold tracking-tight text-gray-900">
                      Sign up for updates <span aria-hidden="true">↓</span>
                    </h3>
                    <div className="mt-5 flex rounded-3xl bg-white py-2.5 pr-2.5 shadow-xl shadow-orange-900/5 focus-within:ring-2 focus-within:ring-orange-500">
                      <input
                        type="email"
                        required
                        placeholder="Enter your email"
                        className="-my-2.5 flex-auto bg-transparent pl-6 pr-2.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
                      />
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-2xl bg-orange-500 p-4 text-base font-semibold text-white hover:bg-orange-600 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 active:text-white/70"
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
