'use client';

import { useState } from "react";
import Image from "next/image";
import { RevealWrapper } from "@/components/layout/RevealWrapper";
import { usePortfolioData } from "@/hooks/usePortfolioData";

export function About() {
  const [isActive, setIsActive] = useState(false);
  const { about } = usePortfolioData();

  return (
    <section id="about" className="py-16 md:py-24 max-w-4xl mx-auto">
      <RevealWrapper>
        <h2 className="flex items-center text-foreground text-xl md:text-2xl font-bold mb-10 whitespace-nowrap">
          <span className="text-accent font-mono text-xl mr-3 font-normal">{about.number}</span> {about.title} ✨
          <div className="ml-5 w-full md:w-72 h-[1px] bg-border"></div>
        </h2>
      </RevealWrapper>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        <div className="w-full md:w-3/5 order-2 md:order-1 text-muted-foreground text-lg leading-[1.6] space-y-5 text-left md:pr-4">
          {about.paragraphs.map((p, i) => (
            <p key={i}>
              {/* Note: In a real system we might use a markdown renderer for the inline spans, 
                  but for now we map the simplified text from aboutData.ts */}
              {p}
            </p>
          ))}
        </div>

        <div className="w-full md:w-2/5 max-w-[250px] md:max-w-[300px] mx-auto md:mx-0 order-1 md:order-2">
          <div
            className="relative group cursor-pointer"
            onClick={() => setIsActive(!isActive)}
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
          >
            {/* Accent offset frame */}
            <div className={`absolute inset-0 border-2 border-accent rounded transition-transform duration-300 ${isActive ? 'translate-x-3 translate-y-3' : 'translate-x-4 translate-y-4'}`}></div>
            {/* Photo container */}
            <div className="relative rounded overflow-hidden bg-accent/20 mt-2">
              <Image
                src={about.profilePhoto}
                alt={about.title}
                width={300}
                height={300}
                className={`w-full aspect-square object-cover object-top transition-all duration-500 ${isActive ? 'grayscale-0' : 'grayscale'}`}
                priority
              />
              {/* Accent color overlay that fades on hover */}
              <div className={`absolute inset-0 bg-accent/20 mix-blend-multiply transition-opacity duration-500 pointer-events-none ${isActive ? 'opacity-0' : 'opacity-100'}`}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
