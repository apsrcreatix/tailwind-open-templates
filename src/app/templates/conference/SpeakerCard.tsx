import Image from "next/image";

interface SpeakerCardProps {
  name: string;
  role: string;
  imageUrl: string;
}

export default function SpeakerCard({
  name,
  role,
  imageUrl,
}: SpeakerCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 w-72 items-center flex flex-col hover:border border-gray-100 transition-shadow duration-300 hover:shadow-md hover:translate-y-[-10px] grayscale hover:grayscale-0">
      <div className="relative min-h-48 w-full overflow-hidden rounded-lg">
        <Image
          alt={name}
          src={imageUrl}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 "
          width={500}
          height={500}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-gray-900">
        {name}
      </h3>
      <p className="mt-1 text-sm tracking-tight text-gray-500">{role}</p>
    </div>
  );
}
