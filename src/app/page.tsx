import { Navbar } from "@/components/layout/Navbar";
import { SocialSidebar } from "@/components/layout/SocialSidebar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Projects } from "@/components/sections/Projects";
import { Awards } from "@/components/sections/Awards";
import { Contact } from "@/components/sections/Contact";
import { Loader } from "@/components/common/Loader";
import { PaletteDemo } from "@/components/sections/PaletteDemo";

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <SocialSidebar />
      <main className="mx-auto min-h-screen max-w-7xl px-4 xs:px-6 md:px-12 lg:px-24">
        {/* HERO SECTION */}
        <Hero />

        {/* PAGE CONTENT SECTIONS */}
        <About />
        <Skills />
        <Education />
        <Projects />
        <Awards />
        <Contact />

        {/* TEMPORARY PALETTE DEMO */}
        <div className="mt-32 border-t border-border pt-16">
          <PaletteDemo />
        </div>
      </main>

      {/* FOOTER */}
      <footer className="text-center font-mono py-6 text-sm text-muted-foreground mt-24 hover:text-accent transition-colors cursor-pointer pb-8">
        <a href="https://github.com/ankit-0903" target="_blank" rel="noopener noreferrer">
          Designed & Built by Ankit Kumar Gupta
        </a>
      </footer>
    </>
  );
}
