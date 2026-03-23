import { usePortfolioData } from "@/hooks/usePortfolioData";

export function SocialSidebar() {
  const { socials } = usePortfolioData();

  return (
    <div className="hidden md:block w-10 fixed bottom-0 left-6 lg:left-10 z-10 text-muted-foreground">
      <ul className="flex flex-col items-center space-y-3 after:content-[''] after:block after:w-[1px] after:h-28 after:bg-muted-foreground after:mx-auto">

        {/* GitHub */}
        <li>
          <a href={socials.github} target="_blank" rel="noreferrer" className="hover:text-accent hover:-translate-y-1 transition-all duration-300 block p-2" title="GitHub" aria-label="Visit my GitHub profile">
            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
        </li>

        {/* LinkedIn */}
        <li>
          <a href={socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent hover:-translate-y-1 transition-all duration-300 block p-2" title="LinkedIn" aria-label="Visit my LinkedIn profile">
            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
        </li>

        {/* Gmail */}
        <li>
          <a href={`mailto:${socials.gmail}`} className="hover:text-accent hover:-translate-y-1 transition-all duration-300 block p-2" title={socials.gmail} aria-label="Send me an email">
            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><title>Gmail</title><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </a>
        </li>

        {/* WhatsApp */}
        <li>
          <a href={socials.whatsapp} target="_blank" rel="noreferrer" className="hover:text-accent hover:-translate-y-1 transition-all duration-300 block p-2" title="WhatsApp" aria-label="Message me on WhatsApp">
            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><title>WhatsApp</title><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          </a>
        </li>

        {/* Instagram */}
        <li>
          <a href={socials.instagram} target="_blank" rel="noreferrer" className="hover:text-accent hover:-translate-y-1 transition-all duration-300 block p-2" title="Instagram" aria-label="Visit my Instagram profile">
            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><title>Instagram</title><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
        </li>

        {/* Facebook */}
        <li>
          <a href={socials.facebook} target="_blank" rel="noreferrer" className="hover:text-accent hover:-translate-y-1 transition-all duration-300 block p-2" title="Facebook" aria-label="Visit my Facebook profile">
            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><title>Facebook</title><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
        </li>

      </ul>
    </div>
  );
}
