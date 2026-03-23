'use client';

import { useState, useRef, useEffect } from "react";
import { RevealWrapper } from "../layout/RevealWrapper";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { MarqueeRow } from "./skills/MarqueeRow";

export function Skills() {
  const [isPaused, setIsPaused] = useState(false);
  const { skills } = usePortfolioData();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Split skills into two rows for the marquee
  const midPoint = Math.ceil(skills.list.length / 2);
  const row1 = skills.list.slice(0, midPoint);
  const row2 = skills.list.slice(midPoint);

  const handlePause = () => {
    setIsPaused(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 2500); // Resumes automatically after 2.5 seconds
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <section id="skills" className="py-16 md:py-24 w-full relative overflow-hidden">
      <RevealWrapper>
        <h2 className="flex items-center text-foreground text-2xl md:text-3xl font-bold mb-16 whitespace-nowrap relative z-10 pl-2 md:pl-0">
          <span className="text-accent font-mono text-xl mr-3 font-normal">02.</span> Technical Skills 💻
          <div className="ml-5 w-full md:w-72 h-[1px] bg-border"></div>
        </h2>
      </RevealWrapper>

      <div className="relative flex flex-col gap-6 py-4 w-[110%] -ml-[5%]">
        {/* Left and Right Overlays for smooth entry/exit fade */}
        <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

        <RevealWrapper>
            <div className="flex flex-col gap-6">
                {/* Row 1: Moves Left */}
                <MarqueeRow items={row1} isPaused={isPaused} togglePause={handlePause} />
        
                {/* Row 2: Moves Right */}
                <MarqueeRow items={row2} reverse={true} isPaused={isPaused} togglePause={handlePause} />
            </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
