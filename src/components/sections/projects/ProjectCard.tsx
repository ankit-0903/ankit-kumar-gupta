'use client';

import Image from "next/image";
import { Project } from "@/hooks/types";
import { useState } from "react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0;
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-12 items-center gap-y-8 md:gap-x-4">
      {/* Image Container */}
      <div className={`w-full relative z-10 md:col-span-6 ${!isEven ? 'md:col-start-7' : 'md:col-start-1'} md:row-start-1 flex items-center`}>
        <div 
          className="block w-full relative aspect-video cursor-pointer"
          onClick={() => setIsActive(!isActive)}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
        >
          {/* Photo container */}
          <div className="w-full h-full rounded overflow-hidden bg-accent/20 shadow-2xl relative z-10">
            {project.image ? (
              <>
                <div className={`absolute inset-0 bg-accent/20 mix-blend-multiply transition-opacity duration-500 z-10 pointer-events-none ${isActive ? 'opacity-0' : 'opacity-100'}`}></div>
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`object-cover transition-all duration-500 ${isActive ? 'grayscale-0' : 'grayscale'}`}
                  priority={index === 0}
                />
              </>
            ) : (
              <div className={`w-full h-full bg-accent/20 transition-all duration-300 rounded flex items-center justify-center text-muted-foreground font-mono relative z-10 ${isActive ? 'bg-transparent' : 'bg-accent/20'}`}>Project Image</div>
            )}
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className={`w-full relative z-20 md:col-span-6 ${!isEven ? 'md:col-start-1 md:text-left' : 'md:col-start-7 md:text-right'} md:row-start-1 mt-2 md:mt-0`}>
        <p className="text-accent font-mono text-sm mb-2">Featured Project</p>
        <h3 className="text-foreground text-2xl font-bold mb-6">{project.title}</h3>

        <div className={`bg-surface p-6 rounded shadow-xl text-muted-foreground text-sm leading-relaxed mb-6 border border-border/40 text-left relative z-30 ${!isEven ? 'md:-mr-12 lg:-mr-20' : 'md:-ml-12 lg:-ml-20'}`}>
          <ul className="flex flex-col gap-3">
            {project.description.map((desc, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-accent text-[10px] mt-1.5 font-mono">▹</span>
                <span className="leading-relaxed">{desc}</span>
              </li>
            ))}
          </ul>
        </div>

        <ul className={`flex flex-wrap gap-4 font-mono text-xs text-subtle-foreground mb-6 ${!isEven ? 'justify-start' : 'justify-end'}`}>
          {project.tech.map((t, idx) => <li key={idx}>{t}</li>)}
        </ul>

        <div className={`flex items-center gap-5 ${!isEven ? 'md:justify-start' : 'md:justify-end'} text-muted-foreground`}>
          {project.github && project.github !== '#' && (
            <a href={project.github} target="_blank" rel="noreferrer" title="GitHub" className="hover:text-accent transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
          )}
          {project.external && project.external !== '#' && (
            <a href={project.external} target="_blank" rel="noreferrer" title="Live Site" className="hover:text-accent transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
