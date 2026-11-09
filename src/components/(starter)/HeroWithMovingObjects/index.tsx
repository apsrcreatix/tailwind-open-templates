import OrbitingAvatars from '@/components/(starter)/OrbitingAvatars';
import { CAREERS_CONTENT, TEAM_MEMBERS } from '@/components/(starter)/OrbitingAvatars/constants';
import Link from 'next/link';

export default function HeroWithMovingObjects() {
  return (
    <div className="relative bg-white overflow-hidden h-[calc(100vh-64px)]">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 py-12 md:py-24 flex flex-col">
        <div className="relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            {CAREERS_CONTENT.HEADING}
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-600 mb-6">
            {CAREERS_CONTENT.SUBHEADING}
          </h2>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-500 mb-10">
            {CAREERS_CONTENT.DESCRIPTION}
          </p>
          <Link 
            href={CAREERS_CONTENT.CTA_HREF}
            className="relative z-20 inline-block bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md text-base sm:text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            {CAREERS_CONTENT.CTA_BUTTON}
          </Link>
        </div>

        <OrbitingAvatars 
          members={[...TEAM_MEMBERS]}
          className="mt-32"
          height="800px"
          baseRadius={200}
          radiusIncrement={80}
          baseSpeed={45}
        />
      </div>
    </div>
  );
}
