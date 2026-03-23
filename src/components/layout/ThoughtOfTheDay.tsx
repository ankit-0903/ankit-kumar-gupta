'use client';

import { useState } from 'react';
import { usePortfolioData } from '@/hooks/usePortfolioData';

export function ThoughtOfTheDay() {
  const { quote: currentQuote } = usePortfolioData();
  const [current] = useState(currentQuote);

  return (
    <div className="relative z-10 my-8">
      {!current ? (
        <div className="animate-pulse flex gap-4">
          <div className="w-[2px] h-12 bg-border/40 rounded-full" />
          <div className="flex-1 space-y-2 py-1">
            <div className="h-4 bg-border/40 rounded w-full" />
            <div className="h-4 bg-border/40 rounded w-2/3" />
          </div>
        </div>
      ) : (
        <div className="flex gap-4">
          {/* Vertical Line */}
          <div className="w-[2px] bg-accent/30 rounded-full shrink-0" />

          <div className="flex flex-col gap-1">
            <p className="text-foreground text-base md:text-lg leading-relaxed italic">
              &ldquo;{current.quote}&rdquo;
            </p>
            <p className="text-accent font-mono text-xs md:text-sm">
              &mdash; {current.author}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

