'use client';

import { Skill } from "@/hooks/types";
import { SkillCard } from "./SkillCard";

interface MarqueeRowProps {
  items: Skill[];
  reverse?: boolean;
  isPaused: boolean;
  togglePause: () => void;
}

export const MarqueeRow = ({ items, reverse = false, isPaused, togglePause }: MarqueeRowProps) => {
  return (
    <div 
      className={`flex w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} hover:[animation-play-state:paused]`}
      style={{ animationPlayState: isPaused ? 'paused' : undefined }}
    >
      {[1, 2, 3].map((groupIndex) => (
        <div key={groupIndex} className="flex w-max space-x-6 pr-6">
          {items.map((skill, i) => (
            <SkillCard key={`${groupIndex}-${skill.name}-${i}`} skill={skill} onClick={togglePause} />
          ))}
        </div>
      ))}
    </div>
  );
};
