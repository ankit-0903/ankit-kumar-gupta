import { RevealWrapper } from "@/components/layout/RevealWrapper";
import { ThoughtOfTheDay } from "@/components/layout/ThoughtOfTheDay";
import { usePortfolioData } from "@/hooks/usePortfolioData";

export function Hero() {
  const { hero } = usePortfolioData();
  const { ideSnippet } = hero;

  return (
    <section id="home" className="grid grid-cols-1 lg:grid-cols-12 min-h-screen items-center pt-8 gap-8">
      {/* Left Column - Text Content */}
      <div className="flex flex-col justify-center items-start lg:col-span-7">
        <RevealWrapper>
          <h1 className="text-accent font-mono mb-4 lg:mb-7 ml-1">{hero.greeting}</h1>
        </RevealWrapper>
        <RevealWrapper>
          <h2 className="text-foreground text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-2">
            {hero.name}
          </h2>
        </RevealWrapper>
        <RevealWrapper>
          <h3 className="text-muted-foreground text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold tracking-tight mb-6 mt-2">
            {hero.tagline}
          </h3>
        </RevealWrapper>
        <RevealWrapper>
          <p className="max-w-xl text-muted-foreground text-base leading-relaxed mb-4 mt-4 text-justify">
            {hero.bio}
          </p>
        </RevealWrapper>
        <RevealWrapper>
          <div className="max-w-xl">
            <ThoughtOfTheDay />
          </div>
        </RevealWrapper>
        <RevealWrapper>
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <a
              href="#contact"
              className="text-accent bg-transparent border border-accent rounded px-7 py-4 font-mono text-sm leading-none transition-all duration-200 inline-block hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_var(--color-accent)]"
            >
              {hero.ctaText}
            </a>
            <a
              href={hero.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent bg-transparent border border-accent rounded px-7 py-4 font-mono text-sm leading-none transition-all duration-200 inline-block hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_var(--color-accent)]"
            >
              {hero.resumeText}
            </a>
          </div>
        </RevealWrapper>
      </div>

      {/* Right Column - IDE Snippet */}
      <div className="hidden lg:block lg:col-span-5 w-full">
        <RevealWrapper>
          <div className="rounded-xl border-2 border-border/80 bg-[#0d1117] shadow-2xl shadow-accent/10 overflow-hidden font-mono text-[13px] leading-relaxed relative">
            {/* Glow effect */}
            <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-accent/20 blur-3xl -z-10 rounded-full"></div>

            {/* Header */}
            <div className="bg-[#050505]/50 px-4 py-3 flex items-center gap-2 border-b border-border/50">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>

            {/* Code Area */}
            <div className="p-6 text-gray-300">
              <div><span className="text-pink-400">const</span> <span className="text-blue-300">{ideSnippet.title}</span> <span className="text-pink-400">=</span> {'{'}</div>
              <div className="ml-4">
                <span className="text-blue-300">name:</span> <span className="text-yellow-300">&apos;{ideSnippet.name}&apos;</span>,
              </div>
              <div className="ml-4 mt-1">
                <span className="text-blue-300">skills:</span> [
              </div>
              <div className="ml-8">
                {ideSnippet.skills.slice(0, 4).map((skill, i) => (
                  <span key={i}><span className="text-yellow-300">&apos;{skill}&apos;</span>{i < 3 ? ', ' : ''}</span>
                ))}
              </div>
              <div className="ml-8">
                {ideSnippet.skills.slice(4).map((skill, i) => (
                  <span key={i}><span className="text-yellow-300">&apos;{skill}&apos;</span>{i < ideSnippet.skills.length - 5 ? ', ' : ''}</span>
                ))}
              </div>
              <div className="ml-4">],</div>
              <div className="ml-4 mt-1">
                <span className="text-blue-300">hardWorker:</span> <span className="text-orange-400">{String(ideSnippet.hardWorker)}</span>,
              </div>
              <div className="ml-4 mt-1">
                <span className="text-blue-300">quickLearner:</span> <span className="text-orange-400">{String(ideSnippet.quickLearner)}</span>,
              </div>
              <div className="ml-4 mt-1">
                <span className="text-blue-300">problemSolver:</span> <span className="text-orange-400">{String(ideSnippet.problemSolver)}</span>,
              </div>
              <div className="ml-4 mt-1">
                <span className="text-green-400">hireable:</span> <span className="text-pink-400">function</span>() {'{'}
              </div>
              <div className="ml-8 mt-1 text-pink-400">return (</div>
              <div className="ml-12">
                <span className="text-blue-300">this.</span>hardWorker <span className="text-pink-400">&&</span>
              </div>
              <div className="ml-12">
                <span className="text-blue-300">this.</span>problemSolver <span className="text-pink-400">&&</span>
              </div>
              <div className="ml-12">
                <span className="text-blue-300">this.</span>skills.length <span className="text-pink-400">{'>='}</span> <span className="text-orange-400">5</span>
              </div>
              <div className="ml-8 text-pink-400">);</div>
              <div className="ml-4">{'}'}</div>
              <div>{'};'}</div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
