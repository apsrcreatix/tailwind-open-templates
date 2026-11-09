import { logos } from "@/components/(pitch)/ClientLogos";
import Image from "next/image";

export default function LogoLinedUp() {
  return (
    <div className="bg-white py-20 sm:py-28 border-y border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-sm font-semibold uppercase tracking-wider text-gray-500">
          Trusted by the world&apos;s most innovative teams
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
          {logos.map((logo) => (
            <div key={logo.alt} className="flex justify-center items-center">
              <Image
                className="max-h-10 w-auto object-contain opacity-75 hover:opacity-100 transition-opacity"
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
