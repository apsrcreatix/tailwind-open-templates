import {  CheckIcon  } from "@/components/icons";
import type { JSX } from "react";

const tiers = [
  {
    name: "Lifetime Access",
    id: "tier-lifetime",
    href: "#",
    price: "$49",
    type: "/ account",
    description: "Get lifetime access to all templates and pre-built components. Perfect for getting started, cost-effective for teams or individuals.",
    features: [
      "Lifetime access to templates",
      "Access to pre-built components",
      "No subscription, one-time payment",
      "CMS support based on template codebase",
      "Docs and guides for self-building",
      "Cost-effective for getting started",
      "Basic email support",
    ],
    featured: false,
    cta: "Get Lifetime Access"
  },
  {
    name: "We Build Your Website",
    id: "tier-custom",
    href: "#",
    price: "$499",
    type: "/ website",
    description: "Everything in Lifetime Access, plus we’ll do it all for you—no team required. We handle everything from start to finish and deliver in one working week.",
    features: [
      "Everything from Lifetime Access plan",
      "Website connected with CMS",
      "5 free revisions included",
      "Delivered in one working week",
      "Post-revision work at $49/hr",
      "Dedicated project manager",
      "Priority support during the build",
      "Full ownership of the final product",
      "We build it for you if you don’t have a team",
    ],
    featured: true,
    cta: "Contact Team"
  },
];


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function PricingWithTwoSection(): JSX.Element {
  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="mx-auto aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-blue-600">Pricing</h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
          Choose the right plan for you
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
        Choose an affordable plan that’s packed with the best features for
        engaging your audience, creating customer loyalty, and driving sales.
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured
                ? "relative bg-gray-900 shadow-2xl"
                : "bg-white/60 sm:mx-8 lg:mx-0",
              tier.featured
                ? ""
                : tierIdx === 0
                ? "rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl"
                : "sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none",
              "rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10"
            )}
          >
            <h3
              id={tier.id}
              className={classNames(
                tier.featured ? "text-blue-400" : "text-blue-600",
                "text-base/7 font-semibold"
              )}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured ? "text-white" : "text-gray-900",
                  "text-5xl font-semibold tracking-tight"
                )}
              >
                {tier.price}
              </span>
              <span
                className={classNames(
                  tier.featured ? "text-gray-400" : "text-gray-500",
                  "text-base"
                )}
              >
                {tier.type}
              </span>
            </p>
            <p
              className={classNames(
                tier.featured ? "text-gray-300" : "text-gray-600",
                "mt-6 text-base/7"
              )}
            >
              {tier.description}
            </p>
            <ul
              className={classNames(
                tier.featured ? "text-gray-300" : "text-gray-600",
                "mt-8 space-y-3 text-sm/6 sm:mt-10"
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className={classNames(
                      tier.featured ? "text-blue-400" : "text-blue-600",
                      "h-6 w-5 flex-none"
                    )}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? "bg-blue-500 text-white shadow-xs hover:bg-blue-400 focus-visible:outline-blue-500"
                  : "text-blue-600 ring-1 ring-blue-200 ring-inset hover:ring-blue-300 focus-visible:outline-blue-600",
                "mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
              )}
            >
             {tier.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
