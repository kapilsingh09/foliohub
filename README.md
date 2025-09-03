# FolioHub — Portfolio Website

A sleek and modern **Next.js + TypeScript** portfolio site built to showcase your work and experience.

---

## 🐳 About Docker

Apologies — this project currently **does not include a Docker setup**.  
All installation and running steps are provided using **npm** directly.  

If you need Docker support, you are welcome to add your own `Dockerfile` and `docker-compose.yml`.  
For now, the recommended way to run this project is:

---

##  Tech & Tools

- **Framework:** Next.js  
- **Language:** TypeScript  
- **Styling:** PostCSS (with Tailwind CSS integration likely based on `postcss.config.mjs`)  
- **Linting:** ESLint (configured via `eslint.config.mjs`)  
- **Bundler/Compiler:** Vite or the Next.js default (depending on project config)  
- **Other:** `public/` for static assets and `src/app/` for core files  

---

##  Here the Started

Follow these steps to fire up the project locally:

```bash
git clone https://github.com/kapilsingh09/foliohub.git
cd foliohub
npm install
npm run dev
