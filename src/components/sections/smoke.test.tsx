import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { About } from './About';
import { Projects } from './Projects';
import { Skills } from './Skills';
import { Education } from './Education';
import { Awards } from './Awards';
import React from 'react';

// Mock usePortfolioData
vi.mock('@/hooks/usePortfolioData', () => ({
  usePortfolioData: () => ({
    titles: {
      about: 'About Me',
      skills: 'Technical Skills',
      education: 'Education',
      projects: "Some Things I've Built",
      awards: 'Awards & Achievements',
      contact: 'Get In Touch'
    },
    projects: [],
    skills: { list: [], categories: [] },
    awards: { publications: [], achievements: [] },
    education: [],
    about: { title: 'About Me', number: '01', paragraphs: ['Test Paragraph'], profilePhoto: '/img.jpg' },
    hero: { greeting: 'Hi', name: 'Test', tagline: 'Test', bio: 'Test' },
    quote: { quote: 'Test', author: 'Test', updatedAt: 'Test' }
  })
}));

// Mock RevealWrapper
vi.mock('../layout/RevealWrapper', () => ({
  RevealWrapper: ({ children }: { children: React.ReactNode }) => <div>{children}</div>
}));

// Mock react-icon-cloud (it uses canvas which is hard to test in jsdom)
vi.mock('react-icon-cloud', () => ({
  Cloud: () => <div>Cloud Mock</div>,
  fetchSimpleIcons: vi.fn().mockResolvedValue({ simpleIcons: {} }),
  renderSimpleIcon: vi.fn()
}));

describe('Portfolio Sections Smoke Tests', () => {
  it('renders About section', () => {
    render(<About />);
    expect(screen.getByText(/About Me/i)).toBeInTheDocument();
  });

  it('renders Projects section', () => {
    render(<Projects />);
    expect(screen.getByText(/Some Things I've Built/i)).toBeInTheDocument();
  });

  it('renders Skills section', () => {
    render(<Skills />);
    expect(screen.getByText(/Technical Skills/i)).toBeInTheDocument();
  });

  it('renders Education section', () => {
    render(<Education />);
    expect(screen.getByText(/Education/i)).toBeInTheDocument();
  });

  it('renders Awards section', () => {
    render(<Awards />);
    expect(screen.getByText(/Awards & Achievements/i)).toBeInTheDocument();
  });
});
