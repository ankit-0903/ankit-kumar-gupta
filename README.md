# 🚀 Ankit Kumar Gupta | Professional Portfolio

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel)](https://ankit-kumar-gupta.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![Bun](https://img.shields.io/badge/Bun-Fast-fbf0df?logo=bun&logoColor=black)](https://bun.sh/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

A premium, high-performance developer portfolio built with a focus on **SOLID principles**, modern engineering patterns, and a dark terminal aesthetic. Engineered for speed and efficiency using the **Bun** runtime. 🚀

> **Live Demo**: [ankit-kumar-gupta.vercel.app](https://ankit-kumar-gupta.vercel.app/)

---

## ✨ Key Features

- 🏎️ **Bun Runtime**: Blazing fast installations, builds, and execution environment.
- 🎨 **Premium UI/UX**: Custom terminal-themed design with smooth Intersection Observer animations and "Reveal on Scroll" interactions.
- 🛠️ **SOLID Architecture**: Highly modular component-based structure with custom hooks and centralized data management.
- 🛰️ **Enterprise SEO**: Automated sitemaps, robots.txt, and comprehensive JSON-LD (Schema.org) integration for Google indexing.
- 🛡️ **Robust CI/CD**: 
    - **Husky & lint-staged**: Automated linting and testing on every commit via Bun.
    - **Vitest**: Suite of unit and smoke tests for core functionality.
- 🤖 **Automated Workflows**: GitHub Actions integration that automatically updates the "Thought of the Day" daily at midnight UTC.
- 📈 **Google Analytics**: Integrated with GA4 tracking via `@next/third-parties` for privacy-compliant, performant user insights.
- 📱 **Fully Responsive**: Optimized for every screen size, from mobile to ultra-wide displays.

---

## 🛠️ Tech Stack

- **Core**: Next.js 16, React 19, TypeScript, Bun Runtime
- **Package Manager**: Bun
- **Styling**: Tailwind CSS
- **Testing**: Vitest, React Testing Library
- **CI/CD**: Husky, lint-staged, GitHub Actions
- **Analytics**: GA4 via `@next/third-parties/google`
- **Tools**: ESLint 9 (Flat Config), Prettier

---

## 📂 Project Structure

```bash
├── 📁 .github/workflows   # Automated Daily Quote Update & CI/CD
├── 📁 .husky              # Git Hooks (Pre-commit Testing & Linting)
├── 📁 public              # Optimized Assets & Favicons
├── 📁 src
│   ├── 📁 app             # App Router (Pages, Layouts, SEO)
│   ├── 📁 components
│   │   ├── 📁 common      # Reusable UI Atoms (Loaders, etc.)
│   │   ├── 📁 layout      # Navbar, Sidebar, Custom Cursor
│   │   └── 📁 sections    # Feature-specific Page Sections
│   ├── 📁 data            # Centralized Site Content (Markdown/JSON)
│   ├── 📁 hooks           # Custom Portfolio Logic
│   └── 📁 styles          # Global Themes & Animations
```

---

## 🚀 Getting Started

1.  **Clone & Install**:
    ```bash
    git clone https://github.com/ankit-0903/ankit-kumar-gupta.git
    cd ankit-kumar-gupta
    bun install
    ```

2.  **Environment Setup**:
    Create a `.env.local` based on `.env.example`:
    ```bash
    NEXT_PUBLIC_GMAIL=your-email@gmail.com
    NEXT_PUBLIC_FORMSPREE_URL=https://formspree.io/f/your-id
    NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX # Optional
    ```

3.  **Run Development Server**:
    ```bash
    bun run dev
    ```

4.  **Test & Lint**:
    ```bash
    bun run test     # Run Vitest suite
    bun run lint     # Check for code quality (ESLint 9)
    ```

---

## 👔 Professional Summary

"I build software solutions for the future. I am a Full-Stack Developer and Computer Science student specializing in building scalable, AI-driven solutions and high-impact technical projects that solve real-world problems."

**Let's Connect!**
- [LinkedIn](https://www.linkedin.com/in/ankit-kumar-gupta-a39688234)
- [GitHub](https://github.com/ankit-0903)
- [Portfolio](https://ankit-kumar-gupta.vercel.app/)

---

## 📜 License
MIT © Ankit Kumar Gupta
