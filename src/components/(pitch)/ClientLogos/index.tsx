import Image from "next/image";

export const logos = [
  {
    src: "/logos/acme.svg",
    alt: "Acme Corp",
    width: 140,
    height: 36,
  },
  {
    src: "/logos/apex.svg",
    alt: "Apex",
    width: 130,
    height: 36,
  },
  {
    src: "/logos/catalyst.svg",
    alt: "Catalyst",
    width: 140,
    height: 36,
  },
  {
    src: "/logos/horizon.svg",
    alt: "Horizon",
    width: 140,
    height: 36,
  },
  {
    src: "/logos/pulse.svg",
    alt: "Pulse",
    width: 130,
    height: 36,
  },
  {
    src: "/logos/vertex.svg",
    alt: "Vertex",
    width: 130,
    height: 36,
  },
];

export default function ClientLogos() {
  const logoCount = logos.length;

  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-sm font-semibold uppercase tracking-wider text-gray-500">
          Trusted by forward-thinking teams and modern developers worldwide
        </h2>
        <div className="mx-auto mt-8 relative overflow-hidden">
          <div className="flex items-center justify-between space-x-8 animate-marquee whitespace-nowrap">
            {/* First set of logos */}
            {logos.map((logo) => (
              <div
                key={logo.alt}
                className="flex-none px-4"
                style={{ width: `${100 / logoCount}%` }}
              >
                <Image
                  className="h-8 w-auto mx-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo) => (
              <div
                key={`${logo.alt}-duplicate`}
                className="flex-none px-4"
                style={{ width: `${100 / logoCount}%` }}
              >
                <Image
                  className="h-8 w-auto mx-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
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
    </div>
  );
}
