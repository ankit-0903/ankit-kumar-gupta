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
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
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
        scrolled ? 'backdrop-blur-md bg-background/60 border-b border-border/30' : 'bg-transparent'
      }`}>
        <div className="h-full flex items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <div className="text-accent font-mono font-bold text-3xl transition-colors tracking-tighter relative z-[60]">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>AKG.</Link>
          </div>

          {/* Hamburger Menu Toggle (Mobile) */}
          <button 
            className="md:hidden text-foreground hover:text-accent transition-colors z-[60] relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className={`w-6 h-[2px] bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
            <span className={`w-6 h-[2px] bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`w-6 h-[2px] bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
          </button>
        </div>
        {/* Accent gradient bottom line */}
        {scrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent relative z-[50]" />
        )}
      </div>

      {/* Mobile Fullscreen Menu Overlay */}
      <div 
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-background/98 backdrop-blur-xl transition-all duration-500 ease-in-out md:hidden flex flex-col justify-center items-center ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-8 text-center w-full px-6">
          {navItems.map((item, i) => (
            <button
              key={item.id}
              onClick={() => {
                setIsMobileMenuOpen(false);
                setTimeout(() => scrollToSection(item.id), 300); // small delay to clear the overlay first
              }}
              className={`text-2xl font-sans tracking-widest transition-all duration-500 transform ${
                isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              } ${activeSection === item.id ? 'text-accent font-bold' : 'text-foreground/80 hover:text-foreground'}`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {item.label}
            </button>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`mt-6 text-accent border border-accent rounded px-10 py-4 font-mono text-sm transition-all duration-500 transform hover:bg-accent/10 ${
              isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: `${navItems.length * 50}ms` }}
          >
            Resume
          </a>
        </div>
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

