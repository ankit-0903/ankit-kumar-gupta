'use client';

import Image from "next/image";
import { Skill } from "@/hooks/types";

interface SkillCardProps {
  skill: Skill;
  onClick?: () => void;
}

export function SkillCard({ skill, onClick }: SkillCardProps) {
  return (
    <div 
      onClick={onClick}
      className="flex items-center gap-4 px-6 py-4 bg-surface/30 backdrop-blur-sm border border-border/80 rounded-2xl min-w-[240px] hover:border-accent/60 transition-all duration-300 shadow-sm group cursor-pointer"
    >
      <div className="w-10 h-10 relative flex-shrink-0 flex items-center justify-center filter group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-all">
         <Image 
           src={skill.url} 
           alt={skill.name} 
           fill 
           className={`object-contain ${skill.invert ? 'brightness-0 invert opacity-90' : ''}`}
           unoptimized
         />
      </div>
      <div className="flex flex-col">
        <span className="font-extrabold text-foreground text-sm tracking-widest uppercase">{skill.name}</span>
        <span className="text-[10px] text-muted-foreground tracking-[0.2em] font-mono mt-1 group-hover:text-accent/80 transition-colors">TECHNOLOGY</span>
      </div>
    </div>
  );
}
