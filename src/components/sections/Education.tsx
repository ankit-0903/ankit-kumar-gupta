import { usePortfolioData } from "@/hooks/usePortfolioData";
import { RevealWrapper } from "../layout/RevealWrapper";
import { EducationCard } from "./education/EducationCard";

export function Education() {
  const { education: educationData, titles } = usePortfolioData();
  return (
    <section id="education" className="py-16 md:py-24 max-w-4xl mx-auto">
      <RevealWrapper>
        <h2 className="flex items-center text-foreground text-2xl md:text-3xl font-bold mb-12 whitespace-nowrap">
          <span className="text-accent font-mono text-xl mr-3 font-normal">03.</span> {titles.education} 🎓
          <div className="ml-5 w-full md:w-72 h-[1px] bg-border"></div>
        </h2>
      </RevealWrapper>

      <div className="relative">
        <div className="space-y-6">
          {educationData.map((edu, i) => (
            <RevealWrapper key={i} delay={i * 100}>
               <EducationCard edu={edu} />
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
