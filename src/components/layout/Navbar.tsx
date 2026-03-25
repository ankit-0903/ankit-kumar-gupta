'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePortfolioData } from '@/hooks/usePortfolioData';

export function Navbar() {
  const { nav: navItems } = usePortfolioData();
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    
    if (isMobileMenuOpen) {
      html.style.overflow = 'hidden';
      body.style.overflow = 'hidden';
      body.style.touchAction = 'none'; // Further prevent scrolling on some mobile browsers
    } else {
      html.style.overflow = '';
      body.style.overflow = '';
      body.style.touchAction = '';
    }
    return () => {
      html.style.overflow = '';
      body.style.overflow = '';
      body.style.touchAction = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;

      // Ensure it hits 100% if we're near the bottom
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 5;
      setScrollProgress(isAtBottom ? 100 : progress);
      setScrolled(window.scrollY > 60);

      const sections = navItems.map(item => document.getElementById(item.id));
      let current = 'home';
      sections.forEach(section => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            current = section.id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className={`fixed top-0 left-0 right-0 z-50 h-[56px] transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-background/60 border-b border-border/30' : 'max-md:backdrop-blur-md max-md:bg-background/80 bg-transparent'
      }`}>
        <div className="h-full flex items-center justify-between px-6 lg:px-10">
          <div className="text-accent font-mono font-bold text-3xl transition-colors tracking-tighter relative z-[60]">
            <Link
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                scrollToSection('home');
              }}
            >
              AKG.
            </Link>
          </div>

          {/* Hamburger Menu Toggle (Mobile) */}
          <button
            className="md:hidden text-foreground hover:text-accent transition-all duration-300 z-[60] relative w-8 h-8 flex flex-col justify-center items-end gap-1.5 active:scale-90"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className={`h-[2px] bg-current transition-all duration-300 ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-[8px]' : 'w-7'}`}></span>
            <span className={`h-[2px] bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-4 opacity-100'}`}></span>
            <span className={`h-[2px] bg-current transition-all duration-300 ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-[8px]' : 'w-2'}`}></span>
          </button>
        </div>
        {/* Accent gradient bottom line */}
        {scrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent relative z-[50]" />
        )}
      </div>

      {/* Mobile Sidebar Drawer Menu */}
      <div 
        id="mobile-menu-overlay"
        className={`fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm transition-opacity duration-500 md:hidden touch-none ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div 
        id="mobile-menu"
        className={`fixed top-0 right-0 bottom-0 z-[80] w-[65%] max-w-[280px] bg-[#111111] shadow-2xl transition-transform duration-500 ease-in-out md:hidden flex flex-col p-6 overflow-y-auto ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button Inside Drawer */}
        <div className="flex justify-end mb-8">
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-muted-foreground hover:text-accent transition-colors p-2 active:scale-90"
            aria-label="Close Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <nav className="flex flex-col items-center gap-8 mt-4">
          {navItems.map((item, i) => (
            <button
              key={item.id}
              onClick={() => {
                setIsMobileMenuOpen(false);
                setTimeout(() => scrollToSection(item.id), 300);
              }}
              className="group flex flex-col items-center gap-1"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <span className={`font-mono text-[10px] text-accent transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
                0{i + 1}.
              </span>
              <span className={`text-base font-bold tracking-widest transition-all duration-500 ${
                isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              } ${activeSection === item.id ? 'text-accent' : 'text-foreground/80 hover:text-accent'}`}>
                {item.label}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Right Vertical Nav (Desktop) */}
      <nav className="hidden md:flex fixed right-6 lg:right-10 bottom-0 z-50 flex-col items-end group mix-blend-difference">
        <div className="relative flex flex-col items-center justify-between py-4" style={{ height: '400px' }}>
          <div className="absolute top-4 bottom-0 right-[3px] w-[1px] bg-white/20 -z-10"></div>

          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <div
                key={item.id}
                className="relative flex items-center justify-end w-48 cursor-pointer group/item py-2"
                onClick={() => scrollToSection(item.id)}
              >
                <div role="button" aria-label={`Scroll to ${item.label}`} className="flex items-center justify-end w-full">
                  <span
                    className={`mr-6 font-sans tracking-wide text-[15px] transition-all duration-300 ${isActive
                      ? 'text-white opacity-100'
                      : 'text-white/60 opacity-0 group-hover:opacity-100 group-hover/item:text-white'
                      }`}
                  >
                    {item.label}
                  </span>

                  <div className="absolute right-0 flex justify-center items-center w-2 h-8">
                    {isActive ? (
                      <div className="w-[2px] h-full bg-accent shadow-[0_0_8px_var(--accent)] transition-all duration-300"></div>
                    ) : (
                      <div className="w-1.5 h-1.5 bg-white/60 group-hover/item:bg-white rounded-full transition-all duration-300"></div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-[1px] h-28"></div>
      </nav>

      {/* Scroll Indicator (Simplified) */}
      <div className="fixed top-0 left-0 h-[2px] bg-accent z-[100] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}></div>
    </>
  );
}

