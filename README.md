# Agni Patel — Personal Portfolio (Next.js & shadcn/ui)

A modern, responsive, high-performance portfolio website migrated from legacy static HTML/CSS/JS to **Next.js (App Router)** with **TypeScript**, **Tailwind CSS v4**, and **shadcn/ui** components. Managed entirely with **pnpm**.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Start Development Server
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
pnpm build
pnpm start
```

---

## 📁 File Structure

```text
├── legacy_backup/            # Safe backup of the original HTML/CSS/JS files
│   ├── index.html
│   ├── style.css
│   ├── responsive.css
│   └── script.js
├── public/                   # Public assets & images
│   └── images/               # Structured images (hero, avatar, projects, certificates)
│       ├── about-me.jpg
│       ├── hero-web.jpg
│       ├── logo.jpg
│       ├── project-ecommerce.png
│       ├── project-microsoft.png
│       ├── project-tts.png
│       ├── project-clock.png
│       ├── project-sorting.png
│       ├── cert-iit-bhu.jpg
│       ├── cert-national-conf.jpg
│       └── cert-cloud-computing.jpg
├── src/
│   ├── app/
│   │   ├── globals.css       # Tailwind CSS v4 styling & shadcn HSL theme variables
│   │   ├── layout.tsx        # RootLayout with SEO metadata, fonts & ThemeProvider
│   │   └── page.tsx          # Assembled main portfolio page
│   ├── components/
│   │   ├── ui/               # shadcn/ui component library
│   │   │   ├── badge.tsx     # Skill and category badges
│   │   │   ├── button.tsx    # CVA button with variants (default, gradient, outline, etc.)
│   │   │   ├── card.tsx      # Glassmorphic card primitives
│   │   │   ├── input.tsx     # Accessible form input
│   │   │   ├── tabs.tsx      # Tabbed navigation for Skills/Education
│   │   │   └── textarea.tsx  # Accessible message textarea
│   │   ├── about-section.tsx # About section with portrait, bio & interactive tabs
│   │   ├── certificates-section.tsx # Certificate cards + high-res modal lightbox
│   │   ├── contact-section.tsx # Direct contact cards, copy-to-clipboard & message form
│   │   ├── footer.tsx        # Footer with back-to-top button
│   │   ├── hero-section.tsx  # Dynamic typewriter hero, CTA buttons & social links
│   │   ├── icons.tsx         # Crisp SVG brand icons (GitHub, LinkedIn, Instagram)
│   │   ├── navbar.tsx        # Sticky frosted-glass navbar with active scroll tracking
│   │   ├── projects-section.tsx # Work showcase with category filtering & live Netlify links
│   │   ├── services-section.tsx # Services cards with deliverable checklists
│   │   ├── tab-blur-listener.tsx # Easter egg tab blur title updater ("Come back! 👋")
│   │   ├── theme-provider.tsx# next-themes integration
│   │   └── theme-toggle.tsx  # Animated sun/moon light/dark mode switcher
│   ├── data/
│   │   └── portfolio-data.ts # Single source of truth for all projects, skills, and bio data
│   └── lib/
│       └── utils.ts          # cn() class merging utility (clsx + tailwind-merge)
├── components.json           # shadcn/ui configuration
├── next.config.ts            # Next.js configuration
├── package.json              # Project scripts and dependencies
├── pnpm-lock.yaml            # pnpm lockfile
├── postcss.config.mjs        # PostCSS configuration for Tailwind v4
└── tsconfig.json             # TypeScript configuration
```

---

## 🎨 Features & Technologies

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19, TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with CSS variables
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) inspired design system
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Theme Support**: Dark and Light mode switching with `next-themes`
- **Dynamic Typing Animation**: Interactive hero title cycling through roles
- **Interactive Modals**: Certificate lightbox modal for high-res certificate inspection
- **Email Quick-Copy**: Copy email address with animated clipboard feedback
- **Smooth Navigation**: One-page smooth scrolling with auto-highlighting nav links
- **Tab Blur Easter Egg**: Preserved and upgraded document title changer on tab focus change

---

## ✏️ Customizing Content

All personal details, skills, services, projects, certificates, and links can be easily updated in:
👉 [`src/data/portfolio-data.ts`](src/data/portfolio-data.ts)
