<!-- ======================= HEADER ======================= -->
<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:071a33,50:0b2545,100:c9a227&height=240&section=header&text=AI%20Automation%20Research&fontSize=48&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Why%20Do%20Businesses%20Need%20AI%20Automation%3F&descAlignY=60&descSize=20" alt="AI Automation Research banner" width="100%" />


<a href="https://github.com/YOUR_USERNAME/ai-automation-research">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&duration=3200&pause=900&color=C9A227&center=true&vCenter=true&width=700&lines=A+33-page+research+paper%2C+turned+into+a+website;Searchable+documentation+with+light+%26+dark+mode;Workflows%2C+use+cases+and+an+implementation+timeline;Built+with+Next.js%2C+React+and+Tailwind+CSS" alt="Typing animation" />
</a>

<br/>

![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-18-087EA4?style=for-the-badge&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18.17+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Lucide](https://img.shields.io/badge/Icons-Lucide-F56565?style=for-the-badge)

![Responsive](https://img.shields.io/badge/Design-Responsive-0b2545?style=flat-square)
![Dark Mode](https://img.shields.io/badge/Theme-Light%20%2F%20Dark-14325c?style=flat-square)
![Accessibility](https://img.shields.io/badge/Accessibility-Semantic%20HTML%20%2B%20ARIA-c9a227?style=flat-square)
![Static](https://img.shields.io/badge/Rendering-Static%20Generation-2f855a?style=flat-square)
![License](https://img.shields.io/badge/License-All%20rights%20reserved-lightgrey?style=flat-square)

<h3>
  <a href="#-live-demo">Live Demo</a>
  &nbsp;•&nbsp;
  <a href="#-getting-started">Getting Started</a>
  &nbsp;•&nbsp;
  <a href="#-features">Features</a>
  &nbsp;•&nbsp;
  <a href="#-content-management">Content</a>
  &nbsp;•&nbsp;
  <a href="#-deployment">Deploy</a>
</h3>

</div>

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [Screenshots](#-screenshots)
- [Research at a Glance](#-research-at-a-glance)
- [Features](#-features)
- [Pages and Routes](#-pages-and-routes)
- [Technology Stack](#-technology-stack)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Project Structure](#-project-structure)
- [Content Management](#-content-management)
- [Design System](#-design-system)
- [Accessibility](#-accessibility)
- [Performance and SEO](#-performance-and-seo)
- [Responsive Behaviour](#-responsive-behaviour)
- [Deployment](#-deployment)
- [Environment Variables](#-environment-variables)
- [Troubleshooting](#-troubleshooting)
- [Roadmap](#-roadmap)
- [About the Author](#-about-the-author)
- [Acknowledgements](#-acknowledgements)

---

## 🌐 Overview

**AI Automation Research** is a professional research and documentation website built from the internship paper
**"Why Does a Business Need AI Automation?"**, the first practical assignment of the **AI Automation Internship at Zayan Soft Tech**.

The paper explains, in plain language and from a client's point of view, why a business should consider AI automation for its products, shop or store, company and day-to-day operations. It covers practical examples, a sample workflow, benefits, challenges, an implementation approach and the future potential of the technology.

The website keeps the **full text of the paper** and improves how it is read:

> Research paper + business report + interactive documentation, in one fast, searchable website.

**Good for:** internship submission, portfolio presentation, client demonstrations, academic or professional sharing, and sharing on LinkedIn or WhatsApp.

> [!NOTE]
> This is a presentation of an existing paper. The site does not add research statistics, sources or claims that are not in the original document.

---

## 🚀 Live Demo

| | |
|---|---|
| **Website** | https://ai-automation-research.vercel.app/ |
| **Repository** | https://github.com/YasirAwan4831/ai-automation-research-Zayan-Soft-Tech |

> Replace the placeholders above after you deploy.

---

## 📊 Research at a Glance

| Item | Count / detail |
|---|---|
| Original paper | 33 pages |
| Sections | 26 (Executive Summary + 25 numbered chapters) |
| Tables | 55, converted to responsive tables |
| Practical business examples | 8 |
| Sample workflow | 9 steps, from customer message to report |
| Implementation framework | 9 steps |
| Key takeaways | 10 |

---

## ✨ Features

### 📖 Reading experience
- Documentation layout: **left sidebar | content | right "On this page" contents**
- Comfortable reading width, generous line height and clear heading hierarchy
- **Reading progress bar**
- **Previous / Next** section navigation and **breadcrumbs**
- **Copy-link button** on every subsection heading
- Active-section highlighting in the contents list

### 🔎 Search
- Client-side search with **no external API**
- Open with **`/`** or **`Ctrl / Cmd + K`**
- Results show the section, the matching subsection heading and a short snippet
- Matching words are highlighted

### 🎨 Interface
- Sticky navbar with active state and a **mobile hamburger menu**
- **Light and dark mode**, remembered between visits
- Tables turn into **cards on mobile**
- Callout boxes for notes, examples and warnings from the paper

### 🔄 Visual explanations
- `WorkflowDiagram` component for the general 9-step workflow, the department flow and the lead journey
- Expandable cards for the 8 business use cases, each with a workflow strip
- Vertical timeline for the 9-step implementation approach
- Every diagram sits next to the original text, never in place of it

---

## 🧭 Pages and Routes

| Route | What it shows |
|---|---|
| `/` | Home: hero, research highlights, AI vs automation vs AI automation, the 12 reasons businesses need it |
| `/research` | Index of all 26 sections |
| `/research/[slug]` | A full section, e.g. `/research/3-why-businesses-need-ai-automation` |
| `/use-cases` | The 8 practical business examples |
| `/workflows` | Visual workflows |
| `/implementation` | The 9-step implementation timeline |
| `/about` | Research information and author |
| `/search-index.json` | Static search index used by the search dialog |

---

## 🛠 Technology Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 14](https://nextjs.org/) (App Router, static generation) |
| UI library | [React 18](https://react.dev/) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Language | JavaScript |
| Content | Structured JSON generated from the PDF |
| Extraction tools | Python 3, `pdfplumber`, Pillow, `pdftotext` (only needed to regenerate content) |

---

## ⚡ Getting Started

### Prerequisites
- **Node.js 18.17 or newer**
- **npm**

### Installation

```bash
# 1. Open the project folder
cd ai-automation-research

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open **http://localhost:3000** in your browser.

### Production build

```bash
npm run build
npm start
```

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Create an optimized production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run extract` | Rebuild `content/` from `source/research.pdf` (needs Python tools) |

---

## 🗂 Project Structure

```text
ai-automation-research/
├── app/
│   ├── layout.js                 # Root layout, metadata, theme script
│   ├── page.js                   # Home page
│   ├── research/
│   │   ├── layout.js             # Sidebar + reading progress
│   │   ├── page.js               # Section index
│   │   └── [slug]/page.js        # One research section
│   ├── use-cases/page.js
│   ├── workflows/page.js
│   ├── implementation/page.js
│   ├── about/page.js
│   └── search-index.json/route.js
│
├── components/
│   ├── layout/                   # Footer
│   ├── navigation/               # Navbar, Search, ResearchSidebar,
│   │                             # TableOfContents, ReadingProgress
│   ├── research/                 # Blocks (content renderer), ResponsiveTable
│   ├── workflows/                # WorkflowDiagram
│   ├── ui/                       # ThemeToggle, CopyLink, Logo, Timeline
│   └── shared/                   # Breadcrumbs, PrevNext
│
├── content/
│   ├── document.json             # The research, rendered by the site
│   └── research.json             # Raw extraction from the PDF
│
├── data/
│   ├── site.js                   # Titles, metadata, navigation
│   └── workflows.js              # Workflow diagram steps
│
├── lib/content.js                # Content helpers and search index
├── scripts/                      # PDF extraction and content build
├── source/research.pdf           # The original paper
├── public/                       # Logos and images
├── styles/globals.css            # Tailwind layers and base styles
├── tailwind.config.js
├── next.config.mjs
└── package.json
```

---

## 📝 Content Management

All research text lives in **`content/document.json`**: an array of sections, each holding a list of `blocks`.

| Block type | Used for |
|---|---|
| `h2` | Numbered subsection heading (also feeds the contents list and search) |
| `h3` | Minor heading |
| `p` | Paragraph |
| `li` | Bullet list item |
| `table` | Responsive table (`rows`, first row is the header) |
| `keyvalue` | Two-column fact box such as "The Problem / How AI Automation Helps" |
| `callout` | Highlighted note or example box |
| `steps` | Implementation timeline |
| `numbered` | Numbered list (e.g. key takeaways) |
| `workflow` | Inserts a workflow diagram by id |

**To change wording:** edit `content/document.json` and save. The pages, sidebar, contents list and search update automatically.

**To change workflow diagrams:** edit `data/workflows.js`.

**To regenerate everything from a revised PDF:**

```bash
pip install pdfplumber pillow
# replace source/research.pdf with the new file, then:
npm run extract
```

> [!IMPORTANT]
> Always review the regenerated content. Table layouts are reconstructed from the PDF and may need small corrections.

---

## 🎨 Design System

| Token | Value | Use |
|---|---|---|
| Navy 950 / 900 / 800 | `#041022` / `#071a33` / `#0b2545` | Backgrounds, headings, footer |
| Gold 500 | `#c9a227` | Accents, progress bar, active markers |
| Slate | Tailwind slate scale | Body text and borders |
| Serif (Charter / Palatino / Georgia) | System fonts | Long-form reading text |
| Sans-serif (system UI) | System fonts | Navigation, tables, labels |

The palette follows the navy and gold of the original paper's cover. No web fonts are downloaded, so text renders immediately.

---

## ♿ Accessibility

- Semantic HTML with a proper heading hierarchy
- **Skip to content** link
- Full keyboard navigation and visible focus outlines
- ARIA labels on icon buttons, navigation regions, the search dialog and the progress bar
- Workflow steps are real ordered lists; step numbers are announced to screen readers
- Scrollable tables are keyboard focusable
- Meaning is never carried by color alone
- Respects `prefers-reduced-motion`
- Alt text on logos and images

---

## 🚄 Performance and SEO

- **Every page is pre-rendered** at build time (static generation)
- Server Components by default; client code only for search, theme, navigation and progress
- `next/image` for logos and photos
- No external fonts, analytics or runtime APIs
- Page title, meta description, canonical URL, Open Graph and Twitter metadata on every page
- Per-section titles and descriptions generated from the content

---

## 📱 Responsive Behaviour

| Width | Behaviour |
|---|---|
| ≤ 767 px | Hamburger menu, collapsible section list, tables become cards |
| 768 – 1023 px | Full tables, single content column |
| ≥ 1024 px | Sticky sidebar |
| ≥ 1280 px | Sticky "On this page" contents on the right |

Designed for 320 px phones up to wide desktop screens, without horizontal page scrolling.

---

## ☁️ Deployment

### Vercel (recommended)

1. Push the project to GitHub.
2. Go to [vercel.com](https://vercel.com/) and choose **Add New → Project**.
3. Import the repository. Vercel detects **Next.js** automatically.
4. Add the environment variable below, then click **Deploy**.

### Any Node.js host

```bash
npm install
npm run build
npm start
```

The server listens on port `3000` by default. Set `PORT` to change it.

---

## 🔐 Environment Variables

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Recommended | Public address of the site, for example `https://your-site.vercel.app`. Used for canonical and Open Graph URLs. Defaults to `http://localhost:3000`. |

---

## 🧰 Troubleshooting

| Problem | Fix |
|---|---|
| `npm install` fails | Check `node -v` is 18.17 or newer, then delete `node_modules` and try again |
| Port 3000 is busy | Run `npm run dev -- -p 3001` |
| Search shows nothing | Make sure `/search-index.json` loads in the browser; rebuild with `npm run build` |
| Theme resets to light | Check that the browser allows `localStorage` |
| `npm run extract` fails | Install `pdfplumber`, `pillow` and `poppler-utils` (for `pdftotext`) |
| Social previews show the wrong address | Set `NEXT_PUBLIC_SITE_URL` and redeploy |

---

## 🗺 Roadmap

- [x] Full paper converted to structured content
- [x] Documentation layout, search and reading progress
- [x] Workflows, use cases and implementation timeline
- [x] Light and dark mode
- [ ] Add screenshots and the live demo link to this README
- [ ] Downloadable PDF link on the About page
- [ ] More papers in the same knowledge platform

---

## 👤 About the Author

<div align="center">

<img src="public/images/profile.jpg" alt="Muhammad Yasir" width="180" style="border-radius:50%" />

### Muhammad Yasir
**AI Automation Intern · Zayan Soft Tech**
Full-stack web developer and AI automation developer

[![Portfolio](https://img.shields.io/badge/Portfolio-yasirawaninfo.vercel.app-0b2545?style=for-the-badge&logo=vercel&logoColor=white)](https://yasirawaninfo.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-yasirawan4831-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/yasirawan4831)
[![Email](https://img.shields.io/badge/Email-Contact-c9a227?style=for-the-badge&logo=gmail&logoColor=white)](mailto:my3154831409@gmail.com)

</div>

| | |
|---|---|
| **Research topic** | Why Does a Business Need AI Automation? |
| **Research area** | AI & Business Automation |
| **Prepared by** | Muhammad Yasir |
| **Internship program** | AI Automation Internship |
| **Organization** | Zayan Soft Tech |
| **Task type** | First Practical Internship Assignment |

---

## 🙏 Acknowledgements

- **Zayan Soft Tech** for the internship and the assignment
- [Next.js](https://nextjs.org/), [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/) and [Lucide](https://lucide.dev/)
- [capsule-render](https://github.com/kyechan99/capsule-render), [readme-typing-svg](https://github.com/DenverCoder1/readme-typing-svg) and [Shields.io](https://shields.io/) for the README visuals

---

<!-- ======================= FOOTER ======================= -->
<div align="center">

⭐ **If this project helped you, consider giving it a star.** ⭐

<br/>

*Innovating Digital Solutions | Empowering Digital Futures*

<br/>

Prepared by **Muhammad Yasir** · AI Automation Internship · **Zayan Soft Tech**

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:c9a227,50:0b2545,100:071a33&height=140&section=footer" alt="Footer wave" width="100%" />

</div>