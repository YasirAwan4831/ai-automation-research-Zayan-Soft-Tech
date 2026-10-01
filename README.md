# AI Automation Research

A responsive research website for **"Why Does a Business Need AI Automation?"**, the first practical assignment of Muhammad Yasir's AI Automation Internship at Zayan Soft Tech. The 33-page paper is presented in full as a documentation-style site with search, workflows, use cases and an implementation timeline.

## Technology stack
Next.js 14 (App Router, static generation), React 18, Tailwind CSS 3, Lucide React icons, JavaScript. No external services or search API: search runs in the browser.

## Installation and development
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
```
Node.js 18.17 or newer is required.

## Project structure
```
app/                  Routes: / , /research, /research/[slug], /use-cases, /workflows, /implementation, /about, /search-index.json
components/
  layout/             Footer
  navigation/         Navbar, Search, ResearchSidebar, TableOfContents, ReadingProgress
  research/           Blocks (content renderer), ResponsiveTable
  workflows/          WorkflowDiagram
  ui/                 ThemeToggle, CopyLink, Logo, Timeline
  shared/             Breadcrumbs, PrevNext
content/document.json The research as sections and blocks (this is what the site renders)
content/research.json Raw extraction from the PDF (intermediate file)
data/                 site.js (titles, metadata, navigation), workflows.js (diagram steps)
lib/content.js        Content helpers and the search index
scripts/              PDF extraction and content build
source/research.pdf   The original paper
public/               Logos and images
styles/globals.css    Tailwind and base styles
```

## Content management
All text lives in `content/document.json`: an array of sections, each with `blocks` of type `h2`, `h3`, `p`, `li`, `table`, `keyvalue`, `callout`, `steps`, `numbered` or `workflow`. Edit it to change wording; pages, sidebar, contents and search update automatically.
To regenerate it from a revised PDF, replace `source/research.pdf` and run `npm run extract` (needs Python 3 with `pdfplumber` and Pillow, plus `pdftotext`), then review the result.
Workflow diagram steps for sections 6.2, 11.3 and 19 are in `data/workflows.js`.

## Features
Sticky navbar with mobile menu, light/dark mode, docs layout (sidebar, content, "on this page" contents), search (press `/` or `Ctrl/Cmd+K`), reading progress bar, previous/next navigation, breadcrumbs, copy-link buttons on subsections, tables that become cards on mobile, SEO metadata.

## Deployment
Deploy to Vercel (import the repository, framework preset "Next.js") or any Node host with `npm run build && npm start`. Set `NEXT_PUBLIC_SITE_URL` to the public address so canonical and Open Graph URLs are correct.
