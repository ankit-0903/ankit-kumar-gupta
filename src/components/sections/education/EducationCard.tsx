'use client';

import { EducationEntry } from "@/hooks/types";

interface EducationCardProps {
  edu: EducationEntry;
}

export function EducationCard({ edu }: EducationCardProps) {
  return (
    <div className="relative group">
      <div className="rounded-xl border-2 border-border/80 bg-surface/30 p-6 hover:border-accent/60 hover:bg-surface/50 transition-all duration-300 backdrop-blur-sm shadow-lg">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
          <div>
            <h3 className="text-foreground text-lg font-bold leading-snug">{edu.degree}</h3>
            <p className="text-accent text-[15px] mt-1 font-medium">
              {edu.institution}
              <span className="text-muted-foreground font-normal"> · {edu.location}</span>
            </p>
          </div>

          <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
            <span className="text-accent font-mono text-xs bg-accent/10 border border-accent/20 px-3 py-1 rounded-full whitespace-nowrap">
              {edu.period}
            </span>
            {edu.current && (
              <span className="flex items-center gap-1.5 text-green-400 text-xs font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                Currently Enrolled
              </span>
            )}
          </div>
        </div>

        {/* Grade badge */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <div className="flex items-center gap-2 bg-background/60 border border-border/50 rounded-lg px-3 py-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-accent shrink-0">
              <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
              <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.71 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.44.121-2.87.255-4.284a48.415 48.415 0 0 1 7.667 3.282c.301.15.634.15.935 0Zm-7.093 3.98a49.156 49.156 0 0 1 6.033 3.272 49.15 49.15 0 0 1 6.033-3.272 48.29 48.29 0 0 0-12.066 0Z" />
            </svg>
            <span className="text-muted-foreground text-[12px] font-mono">{edu.gradeLabel}</span>
            <span className="text-foreground text-[13px] font-mono font-semibold">{edu.grade}</span>
          </div>
        </div>

        {/* Description */}
        {edu.description && (
          <p className="text-muted-foreground text-sm leading-relaxed border-t border-border/40 pt-4">
            {edu.description}
          </p>
        )}
      </div>
    </div>
  );
}
