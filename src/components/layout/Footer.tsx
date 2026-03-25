import { usePortfolioData } from '@/hooks/usePortfolioData';

export function Footer() {
  const { socials } = usePortfolioData();
  const currentYear = new Date().getFullYear();

  const footerSocials = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
      ),
      href: socials.github,
      label: 'GitHub'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
      ),
      href: socials.linkedin,
      label: 'LinkedIn'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
      ),
      href: `mailto:${socials.gmail}`,
      label: 'Email'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-13.5 8.38 8.38 0 0 1 3.8.9L21 3z"></path></svg>
      ),
      href: socials.whatsapp,
      label: 'WhatsApp'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
      ),
      href: socials.instagram,
      label: 'Instagram'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
      ),
      href: socials.facebook,
      label: 'Facebook'
    },
  ];

  return (
    <footer className="w-full py-8 px-6 relative overflow-hidden bg-background text-center">
      {/* Top Divider - Adjusted width for desktop/laptop */}
      <div className="mx-auto h-[1px] bg-border/30 w-full md:w-[85%] lg:w-[80%] mb-6" />

      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-24 bg-accent/5 blur-[100px] -z-10 rounded-full" />

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Social Links (Mobile Only) */}
        <div className="flex md:hidden flex-wrap items-center justify-center gap-6 mb-6">
          {footerSocials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-all duration-300 hover:-translate-y-1"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Brand & Stack */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <p className="font-mono text-sm group cursor-default">
            <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              Designed & Built by
            </span>
            <span className="text-accent ml-2 relative">
              Ankit Kumar Gupta
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
            </span>
          </p>

          <div className="flex items-center gap-2 text-muted-foreground/60 text-[11px] font-mono tracking-wider uppercase">
            <span>Next.js 15</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Tailwind 4</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>TypeScript</span>
          </div>
        </div>

        {/* Secondary Info */}
        <div className="flex flex-col items-center">
          <p className="text-xs text-muted-foreground/40 font-mono tracking-tighter uppercase">
            © {currentYear} ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}
