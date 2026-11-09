"use client";

import { useState } from "react";
import SpeakerCard from "./SpeakerCard";
import TabButton from "./TabButton";
import { unsplash_avatars } from "@/data";

// Define the type for a single speaker
interface Speaker {
  name: string;
  role: string;
  imageUrl: string;
}

// Define the type for the speakers object
type SpeakersMap = Record<string, Speaker[]>;

const SPEAKERS: SpeakersMap = {
  "AI Innovation Day": [
    {
      name: "Dr. Priya Sharma",
      role: "AI Research Director at Google India",
      imageUrl: unsplash_avatars[0],
    },
    {
      name: "Sam Anderson",
      role: "OpenAI Lead Researcher",
      imageUrl: unsplash_avatars[1],
    },
  ],
  "Global Collaboration": [
    {
      name: "Dr. Wei Chen",
      role: "AI Ethics Lead at Tencent",
      imageUrl: unsplash_avatars[2],
    },
    {
      name: "Vikram Malhotra",
      role: "CTO at NVIDIA India",
      imageUrl: unsplash_avatars[3],
    },
  ],
  "Future Roadmap": [
    {
      name: "Dr. Sarah Miller",
      role: "DeepMind Research Lead",
      imageUrl: unsplash_avatars[4],
    },
    {
      name: "Raj Patel",
      role: "Director of AI, Microsoft India",
      imageUrl: unsplash_avatars[5],
    },
  ],
};

const TABS = [
  { day: "AI Innovation Day", date: "March 15" },
  { day: "Global Collaboration", date: "March 16" },
  { day: "Future Roadmap", date: "March 17" },
];

function SpeakersSection() {
  const [activeTab, setActiveTab] = useState<string>(TABS[0].day);

  return (
    <section className="py-20 sm:py-32 opacity-0 translate-y-4 animate-[fade-in_0.8s_ease-out_0.9s_forwards]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-orange-600 sm:text-5xl"
          >
            Global AI Leaders &{" "}
            <span className="text-emerald-600">Innovators</span>
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-gray-900">
            Connect with pioneering minds shaping the future of AI through
            international collaboration.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4">
          <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute top-2 bottom-0 left-0.5 hidden w-px bg-slate-200 lg:block" />
            <div
              className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 px-4 whitespace-nowrap sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left"
              role="tablist"
              aria-orientation="horizontal"
            >
              {TABS.map((tab) => (
                <TabButton
                  key={tab.day}
                  day={tab.day}
                  date={tab.date}
                  isActive={activeTab === tab.day}
                  onClick={() => setActiveTab(tab.day)}
                />
              ))}
            </div>
          </div>

          {/* Speakers Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 justify-center">
              {SPEAKERS[activeTab].map((speaker) => (
                <SpeakerCard key={speaker.name} {...speaker} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpeakersSection;
