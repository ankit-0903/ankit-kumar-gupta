import { usePortfolioData } from '@/hooks/usePortfolioData';
import { Award } from '@/hooks/types';
import { RevealWrapper } from '../layout/RevealWrapper';

export function Awards() {
  const { awards, titles } = usePortfolioData();
  const { publications, achievements } = awards;
  return (
    <section id="awards" className="py-16 md:py-24 max-w-4xl mx-auto">
      <RevealWrapper>
        <h2 className="flex items-center text-foreground text-xl md:text-2xl font-bold mb-10 whitespace-nowrap">
          <span className="text-accent font-mono text-xl mr-3 font-normal">05.</span> {titles.awards} 🏅
          <div className="ml-5 w-full md:w-72 h-[1px] bg-border"></div>
        </h2>
      </RevealWrapper>

      <div className="space-y-16">
        {/* Publications */}
        {publications.length > 0 && (
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">Publications</h3>
            <div className="space-y-6">
              {publications.map((pub: Award, i: number) => (
                <div key={i} className="rounded-xl border-2 border-border/80 bg-surface/30 p-6 md:p-8 shadow-lg hover:border-accent/60 hover:bg-surface/50 transition-all duration-300 backdrop-blur-sm hover:-translate-y-1">
                  <header className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-bold text-foreground pr-4">{pub.title}</h4>
                    <span className="text-accent font-mono text-sm bg-accent/10 px-2 py-1 rounded">{pub.year}</span>
                  </header>
                  <p className="text-muted-foreground text-[15px] leading-relaxed">
                    {pub.description}
                  </p>
                  {pub.link && (
                    <a 
                      href={pub.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1.5 mt-5 text-accent hover:text-accent/80 font-mono text-sm transition-colors duration-300 w-max"
                    >
                      Read IEEE Paper
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Achievements */}
        {achievements.length > 0 && (
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">Achievements</h3>
            <ul className="space-y-6">
              {achievements.map((achieve: Award, i: number) => (
                <li key={i} className="flex justify-between items-start gap-4 p-5 rounded-xl border-2 border-border/80 bg-surface/30 shadow-lg hover:border-accent/60 hover:bg-surface/50 transition-all duration-300 backdrop-blur-sm">
                  <div className="flex items-start">
                    <span className="text-accent mr-4 mt-1">▹</span>
                    <div>
                      <strong className="text-foreground text-lg">{achieve.title}</strong>
                      <p className="text-muted-foreground text-sm mt-1">{achieve.description}</p>
                    </div>
                  </div>
                  <span className="text-accent font-mono text-xs whitespace-nowrap pt-1">{achieve.year}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
