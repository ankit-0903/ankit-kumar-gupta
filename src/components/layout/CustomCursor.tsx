'use client';

import { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorCircleRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursorDot = cursorDotRef.current;
    const cursorCircle = cursorCircleRef.current;
    if (!cursorDot || !cursorCircle) return;

    const onMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      // Both elements now follow with zero latency
      if (cursorDot) {
        cursorDot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      if (cursorCircle) {
        cursorCircle.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isInteractive = !!(
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('.cursor-pointer') ||
        (target.style && target.style.cursor === 'pointer') ||
        (window.getComputedStyle(target).cursor === 'pointer')
      );

      setIsHovering(isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Primary Dot - No Latency */}
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 w-1.5 h-1.5 bg-foreground rounded-full pointer-events-none z-[9999] -ml-[3px] -mt-[3px] mix-blend-difference transition-transform duration-300 ${isHovering ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
      />

      {/* Secondary Circle (Spotlight) - No Position Latency */}
      <div
        ref={cursorCircleRef}
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9998] -ml-4 -mt-4"
      >
        <div
          className={`w-full h-full rounded-full transition-all duration-500 cubic-bezier(0.23, 1, 0.32, 1) ${isHovering
            ? 'scale-[1.8] bg-accent/30 border-none'
            : 'scale-100 border border-accent/80 bg-transparent'
            }`}
        />
      </div>
    </>
  );
}
