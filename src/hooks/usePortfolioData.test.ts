import { describe, it, expect, vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import { usePortfolioData } from './usePortfolioData';

// Mock the data files
vi.mock('../data/projectsData', () => ({
  featuredProjects: [{ id: 1, title: 'Mock Project' }]
}));

vi.mock('../data/skillsData', () => ({
  skillsData: ['mock-skill'],
  skillCategories: [{ title: 'Mock Category', skills: ['Mock Skill'] }]
}));

vi.mock('../data/awardsData', () => ({
  publications: [{ title: 'Mock publication' }],
  achievements: [{ title: 'Mock achievement' }]
}));

vi.mock('../data/educationData', () => ({
  educationData: [{ school: 'Mock School' }]
}));

vi.mock('../data/current-quote.json', () => ({
  default: { quote: 'Mock Quote', author: 'Mock Author', updatedAt: '2024-03-21' }
}));

vi.mock('../data/heroData', () => ({
  heroData: { name: 'Mock Hero', greeting: 'Hi', tagline: 'Dev', bio: 'Bio', ctaText: 'Hire', resumeText: 'CV', resumeLink: '#', ideSnippet: { title: 'coder', name: 'Hero', skills: [], hardWorker: true, quickLearner: true, problemSolver: true } }
}));

vi.mock('../data/aboutData', () => ({
  aboutData: { title: 'About', number: '01', paragraphs: ['P1'], profilePhoto: '/img.jpg' }
}));

vi.mock('../data/navData', () => ({
  navItems: [{ id: 'home', label: 'Home' }]
}));

vi.mock('../data/socialData', () => ({
  socialData: { github: 'gh', linkedin: 'li', gmail: 'gm', whatsapp: 'wa', instagram: 'ig', facebook: 'fb' }
}));

vi.mock('../data/titlesData', () => ({
  sectionTitles: { about: 'About', projects: 'Projects' }
}));

describe('usePortfolioData', () => {
  it('should return all portfolio data correctly', () => {
    const { result } = renderHook(() => usePortfolioData());

    expect(result.current.hero.name).toBe('Mock Hero');
    expect(result.current.about.title).toBe('About');
    expect(result.current.titles.projects).toBe('Projects');
    expect(result.current.nav).toHaveLength(1);
    expect(result.current.socials.github).toBe('gh');
    expect(result.current.projects).toHaveLength(1);
    expect(result.current.projects[0].title).toBe('Mock Project');
    expect(result.current.skills.list).toHaveLength(1);
    expect(result.current.awards.publications).toHaveLength(1);
    expect(result.current.awards.achievements).toHaveLength(1);
    expect(result.current.education).toHaveLength(1);
    expect(result.current.quote.quote).toBe('Mock Quote');
  });
});
