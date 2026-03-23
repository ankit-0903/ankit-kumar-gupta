import { heroData } from "@/data/heroData";
import { aboutData } from "@/data/aboutData";
import { navItems } from "@/data/navData";
import { sectionTitles } from "@/data/titlesData";
import { socialData } from "@/data/socialData";
import { featuredProjects } from "@/data/projectsData";
import { publications, achievements } from "@/data/awardsData";
import { educationData } from "@/data/educationData";
import { skillsData, skillCategories } from "@/data/skillsData";
import currentQuote from "@/data/current-quote.json";
import { PortfolioData } from "./types";

export function usePortfolioData(): PortfolioData {
  return {
    hero: heroData,
    about: aboutData,
    titles: sectionTitles,
    nav: navItems,
    socials: socialData,
    projects: featuredProjects,
    awards: {
      publications,
      achievements,
    },
    education: educationData,
    skills: {
      list: skillsData,
      categories: skillCategories,
    },
    quote: currentQuote,
  };
}
