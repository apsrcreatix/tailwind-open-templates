'use client'
import Image from "next/image";
import { useState, useMemo } from "react";
import { TEAM_MEMBERS } from "./constants";

export interface Member {
  name: string;
  role: string;
  image: string;
}

interface OrbitingAvatarsProps {
  members?: readonly Member[] | Member[];
  className?: string;
  height?: string;
  baseRadius?: number;
  radiusIncrement?: number;
  baseSpeed?: number;
}

export default function OrbitingAvatars({
  members = TEAM_MEMBERS,
  className = "",
  height = "800px",
  baseRadius = 200,
  radiusIncrement = 80,
  baseSpeed = 45,
}: OrbitingAvatarsProps) {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  const randomizedMembers = useMemo(() => {
    const speedVariation = 5;

    return members.map((member, index) => {
      const randomAngle = Math.random() * 180 + 90;

      return {
        ...member,
        startAngle: randomAngle,
        orbitDuration: baseSpeed + Math.random() * speedVariation,
        orbitRadius: baseRadius + index * radiusIncrement,
        delay: index * 0.2,
      };
    });
  }, [members, baseRadius, radiusIncrement, baseSpeed]);

  return (
    <div className={`relative w-full ${className}`} style={{ height }}>
      <div className="absolute inset-0 flex items-end justify-center">
        <div
          className="absolute w-full max-w-[1400px] h-[1400px] bottom-[-200px]"
          style={{ clipPath: "inset(50% 0 0 0)" }}
        >
          {/* Orbital Rings */}
          {randomizedMembers.map((member, index) => (
            <div
              key={`orbit-${member.name}`}
              className="absolute rounded-full border border-gray-100"
              style={{
                width: `${member.orbitRadius * 2}px`,
                height: `${member.orbitRadius * 2}px`,
                left: "50%",
                top: "100%",
                transform: "translate(-50%, -50%)",
                opacity: 0,
                animation: `fadeIn 0.5s ease-out ${member.delay}s forwards`,
              }}
            />
          ))}

          {/* Team Members */}
          {randomizedMembers.map((member, index) => {
            return (
              <div
                key={member.name}
                className={`absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2 ${
                  hoveredMember === member.name ? "pause-animation" : ""
                }`}
                style={
                  {
                    "--translate-x": `${member.orbitRadius}px`,
                    "--start-angle": `${member.startAngle}deg`,
                    animation: `orbitFromLeft ${member.orbitDuration}s linear ${member.delay}s infinite`,
                    opacity: 0,
                    animationFillMode: "forwards",
                  } as React.CSSProperties
                }
                onMouseEnter={() => setHoveredMember(member.name)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="group absolute -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full overflow-hidden shadow-lg bg-white transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info Tooltip - Now positioned above */}
                  <div
                    className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-2 bg-white rounded-lg shadow-lg opacity-0 transition-opacity duration-300 pointer-events-none whitespace-nowrap ${
                      hoveredMember === member.name ? "opacity-100" : ""
                    }`}
                  >
                    <p className="font-semibold text-sm text-gray-900">
                      {member.name}
                    </p>
                    <p className="text-xs text-gray-500">{member.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
