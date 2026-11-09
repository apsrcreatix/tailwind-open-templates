import Image from "next/image";
import { logos } from "@/components/(pitch)/ClientLogos";

export default function SponsorLogos() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-gray-900 sm:text-5xl">
          Current sponsorships for our <span className="text-emerald-600">workshops</span> and <span className="text-orange-600">speakers</span>.
        </h2>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-24 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-24">
          {logos.map((logo) => (
            <div key={logo.src} className="flex items-center justify-center p-4 rounded-xl border border-gray-100 bg-white/70 shadow-xs">
              <Image
                src={logo.src}
                alt={logo.alt}
                className="h-10 w-auto object-contain"
                width={logo.width}
                height={logo.height}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
