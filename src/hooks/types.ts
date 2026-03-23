export interface Project {
  title: string;
  description: string[];
  tech: string[];
  github: string;
  external: string;
  image?: string;
}

export interface Award {
  title: string;
  description: string;
  year: string;
  link?: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  period: string;
  current?: boolean;
  gradeLabel: string;
  grade: string;
  description?: string;
}

export interface AboutData {
  title: string;
  number: string;
  paragraphs: string[];
  profilePhoto: string;
}

export interface HeroData {
  greeting: string;
  name: string;
  tagline: string;
  bio: string;
  ctaText: string;
  resumeText: string;
  resumeLink: string;
  ideSnippet: {
    title: string;
    name: string;
    skills: string[];
    hardWorker: boolean;
    quickLearner: boolean;
    problemSolver: boolean;
  };
}

export interface Skill {
  name: string;
  url: string;
  invert?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Quote {
  quote: string;
  author: string;
  updatedAt: string;
}

export interface Socials {
  github: string;
  linkedin: string;
  gmail: string;
  whatsapp: string;
  instagram: string;
  facebook: string;
}

export interface NavItem {
  id: string;
  label: string;
}

export interface SectionTitles {
  about: string;
  skills: string;
  education: string;
  projects: string;
  awards: string;
  contact: string;
}

export interface PortfolioData {
  hero: HeroData;
  about: AboutData;
  titles: SectionTitles;
  nav: NavItem[];
  socials: Socials;
  projects: Project[];
  awards: {
    publications: Award[];
    achievements: Award[];
  };
  education: EducationEntry[];
  skills: {
    list: Skill[];
    categories: SkillCategory[];
  };
  quote: Quote;
}
