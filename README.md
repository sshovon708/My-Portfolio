<div align="center">

# 👨‍💻 Iftakhar Ahmmed Shovon — Developer Portfolio

### A modern, full-featured portfolio website built with React, Vite, and Tailwind CSS

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2024-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

<br />

**[🌐 Live Demo](https://ias.dev)** · **[📧 Contact Me](mailto:sshovon708@gmail.com)** · **[💬 WhatsApp](https://wa.me/8801315585665)**

</div>

---

## ✨ Features

- **🚀 Blazing Fast** — Powered by Vite for sub-second hot-module replacement and optimized production builds
- **📱 Fully Responsive** — Pixel-perfect layout from 320px mobile to 4K desktop with a smooth hamburger mobile menu
- **🌑 Dark Tech Aesthetic** — Developer-themed dark UI with dot-grid backgrounds, code-block accents, and glow effects
- **🗂️ Filterable Projects** — 22+ showcase projects with category filters (Frontend / Full-Stack / Backend)
- **📝 Blog with Modal Reader** — 21+ in-depth technical articles readable in a beautiful modal overlay
- **📬 Contact Form** — Formspree-powered contact form with WhatsApp number capture field
- **🔍 Full SEO** — Comprehensive meta tags, Open Graph, Twitter Card, JSON-LD structured data, and `robots.txt`
- **⚡ Client-Side Routing** — React Router v6 with smooth page transitions
- **♿ Accessible** — Semantic HTML, keyboard-navigable, ARIA labels on all interactive elements

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend Framework** | React 18 + JSX |
| **Build Tool** | Vite 5 |
| **Styling** | Tailwind CSS 4 |
| **Routing** | React Router v6 |
| **Icons** | react-icons (FontAwesome) |
| **Form Backend** | Formspree |
| **Deployment** | Vercel / Netlify |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x — [Download](https://nodejs.org/)
- **npm** ≥ 9.x (ships with Node.js) or **pnpm** / **yarn**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/sshovon708/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The site will be available at **http://localhost:5173**

### Build for Production

```bash
# Generate an optimized production build
npm run build

# Preview the production build locally
npm run preview
```

Production output is placed in the `dist/` folder, ready to deploy to any static hosting provider.

---

## 📁 Project Structure

```
My Portfolio/
├── public/
│   ├── favicon.svg          # Site favicon
│   ├── icons.svg            # Sprite sheet
│   └── robots.txt           # SEO robots config
│
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── logo.webp    # Navigation logo
│   │       └── my-image.jpg # Profile photo
│   │
│   ├── components/
│   │   ├── Header.jsx       # Responsive nav + hamburger menu
│   │   └── Footer.jsx       # Social links + contact info
│   │
│   ├── data/
│   │   └── mockData.js      # 22+ projects & 21+ blog posts
│   │
│   ├── pages/
│   │   ├── Home.jsx         # Hero + Recent Projects + Recent Blogs
│   │   ├── About.jsx        # Bio, tech stack, education
│   │   ├── Projects.jsx     # Filterable project showcase
│   │   ├── Blog.jsx         # Article grid + modal reader
│   │   └── Contact.jsx      # Formspree form + contact cards
│   │
│   ├── App.jsx              # Root layout + router config
│   ├── main.jsx             # React DOM entry point
│   └── index.css            # Global styles + Tailwind imports
│
├── index.html               # HTML shell with full SEO meta tags
├── vite.config.js           # Vite build configuration
├── package.json             # Project metadata and scripts
└── README.md                # You are here
```

---

## 🔧 Customization Guide

### 1. Update Personal Information

All personal details are centralized. Update these files:

| What | Where |
|------|-------|
| Name, bio, location | `src/pages/About.jsx` and `src/pages/Home.jsx` |
| Email & WhatsApp | `src/components/Footer.jsx` and `src/pages/Contact.jsx` |
| Social media links | `src/components/Footer.jsx` → `socialLinks` array |
| Profile photo | Replace `src/assets/images/my-image.jpg` |
| Logo | Replace `src/assets/images/logo.webp` |

### 2. Add / Edit Projects

Open `src/data/mockData.js` and add an entry to the `allProjects` array:

```js
{
  id: 23,
  title: "My New Project",
  description: "A brief description of what it does and why it matters.",
  category: "Full-Stack",   // "Frontend" | "Full-Stack" | "Backend"
  tags: ["React", "Node.js", "MongoDB"],
  liveLink: "https://your-live-url.com",
  githubLink: "https://github.com/your-repo",
}
```

### 3. Add Blog Posts

Add an entry to the `allBlogPosts` array in `src/data/mockData.js`:

```js
{
  id: 22,
  title: "Your Article Title",
  excerpt: "A 1-2 sentence teaser shown on the card.",
  content: `Full article body text here.
Multi-line content is supported.`,
  date: "June 1, 2026",
  readTime: "5 min read",
  category: "React",   // Any string — displayed as a badge
}
```

### 4. Update SEO

Edit `index.html` and replace:
- `https://ias.dev/` → your actual domain
- `https://ias.dev/og-image.jpg` → a 1200×630px Open Graph image
- Twitter handle `@sshovon708` → your actual handle

### 5. Update Contact Form

The form uses [Formspree](https://formspree.io). Replace the endpoint in `src/pages/Contact.jsx`:

```js
const formspreeEndpoint = "https://formspree.io/f/YOUR_FORM_ID";
```

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Drag and drop the dist/ folder to app.netlify.com/drop
```

### GitHub Pages

Add `base: '/repo-name/'` to `vite.config.js`, then:

```bash
npm run build
npx gh-pages -d dist
```

---

## 📈 SEO Checklist

- ✅ Title tag with primary keywords
- ✅ Meta description (under 160 characters)
- ✅ Open Graph tags (og:title, og:description, og:image)
- ✅ Twitter Card tags
- ✅ JSON-LD structured data (Person schema)
- ✅ Canonical URL
- ✅ `robots.txt`
- ⬜ `sitemap.xml` — Generate with [vite-plugin-sitemap](https://github.com/jbmoelker/vite-plugin-sitemap) after adding your domain
- ⬜ Submit to Google Search Console after deployment

---

## 📬 Contact

**Iftakhar Ahmmed Shovon**

📧 [sshovon708@gmail.com](mailto:sshovon708@gmail.com)
💬 [WhatsApp](https://wa.me/8801315585665)
🐙 [GitHub](https://github.com/sshovon708)
📍 Chapainawabganj Sadar, Rajshahi, Bangladesh

---

<div align="center">

Made with ❤️ by **Iftakhar Ahmmed Shovon**

⭐ If this project helped you, please give it a star!

</div>
