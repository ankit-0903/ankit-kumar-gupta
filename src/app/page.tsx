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
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/common/BackToTop";

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
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
