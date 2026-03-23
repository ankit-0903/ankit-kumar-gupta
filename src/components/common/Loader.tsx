'use client';

import { useState, useEffect } from 'react';

export function Loader() {
  const [isMounted, setIsMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Initializing system memory...");

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';
    
    // Status messages timeline
    const statuses = [
      "Loading core modules...",
      "Establishing secure connection...",
      "Mounting UI components...",
      "Access granted. Welcome."
    ];

    let currentStatus = 0;
    const statusInterval = setInterval(() => {
      currentStatus++;
      if (currentStatus < statuses.length) {
        setStatus(statuses[currentStatus]);
      }
    }, 450);

    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return p + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);
    
    // Total loader duration matches the CSS animation
    const timeout = setTimeout(() => {
      setIsMounted(true);
      document.body.style.overflow = '';
      
      // If we are overriding cursors, we restore them here
      if (window.innerWidth > 1024) {
        document.body.style.cursor = 'none';
      }
    }, 2800);

    return () => {
      clearTimeout(timeout);
      clearInterval(statusInterval);
      clearInterval(progressInterval);
      document.body.style.overflow = '';
    };
  }, []);

  if (isMounted) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center animate-loader-fade-out font-mono p-4">
      <div className="flex flex-col items-center w-full max-w-sm gap-5">
        
        {/* Animated Custom Logo */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-2">
          {/* Hexagon Outline */}
          <svg 
            className="absolute inset-0 w-full h-full text-accent" 
            viewBox="0 0 100 100" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon 
              points="50,5 89,27.5 89,72.5 50,95 11,72.5 11,27.5" 
              fill="transparent" 
              stroke="currentColor" 
              strokeWidth="4" 
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-draw-polygon"
            />
          </svg>
          {/* Center Initial */}
          <div className="absolute inset-0 flex items-center justify-center font-sans font-bold text-4xl sm:text-5xl text-accent animate-fade-in-letter opacity-0 mb-1">
            A
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-xl md:text-2xl font-bold tracking-[0.2em] text-accent text-shadow-sm">
          INITIALIZING SYSTEM
        </div>

        {/* Progress Bar Container */}
        <div className="w-full h-1.5 bg-accent/20 rounded-full overflow-hidden mt-2 relative">
          <div 
            className="absolute top-0 left-0 h-full bg-accent transition-all duration-200 ease-out"
            style={{ width: `${Math.min(progress, 100)}%`, boxShadow: '0 0 10px var(--color-accent)' }}
          ></div>
        </div>

        {/* Status Text */}
        <div className="text-[13px] text-muted-foreground w-full flex justify-between font-mono mt-1 opacity-80">
          <span className="truncate pr-4 animate-pulse">{status}</span>
          <span>[{Math.min(progress, 100)}%]</span>
        </div>

      </div>
    </div>
  );
}
