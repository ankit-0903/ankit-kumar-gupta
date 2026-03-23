import { usePortfolioData } from "@/hooks/usePortfolioData";
import { RevealWrapper } from "../layout/RevealWrapper";
import { ProjectCard } from "./projects/ProjectCard";

export function Projects() {
  const { projects, titles } = usePortfolioData();

  return (
    <section id="work" className="py-16 md:py-24 max-w-5xl mx-auto">
      <RevealWrapper>
        <h2 className="flex items-center text-foreground text-2xl md:text-3xl font-bold mb-10 whitespace-nowrap">
          <span className="text-accent font-mono text-xl mr-3 font-normal">04.</span> {titles.projects} 🚀
          <div className="ml-5 w-full md:w-72 h-[1px] bg-border"></div>
        </h2>
      </RevealWrapper>

      <div className="space-y-32 md:space-y-48 mt-12">
        {projects.map((project, i) => (
          <RevealWrapper key={i} delay={i * 100}>
            <ProjectCard project={project} index={i} />
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
}
