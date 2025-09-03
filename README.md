# FolioHub — Portfolio Website

A sleek and modern **Next.js + TypeScript** portfolio site built to showcase your work and experience.

---

## 🐳 About Docker

Apologies  this project currently **does not include a Docker setup**.  
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

# Dependencies
npm install @radix-ui/react-hover-card@^1.1.15 \
  @tsparticles/engine@^3.9.1 \
  @tsparticles/react@^3.0.0 \
  @tsparticles/slim@^3.9.1 \
  clsx@^2.1.1 \
  locomotive-scroll@^4.1.4 \
  lucide-react@^0.542.0 \
  mini-svg-data-uri@^1.4.4 \
  motion@^12.23.12 \
  next@15.5.1 \
  qss@^3.0.0 \
  react@19.1.0 \
  react-dom@19.1.0 \
  resend@^6.0.2 \
  simplex-noise@^4.0.3 \
  tailwind-merge@^3.3.1 \
  -D @eslint/eslintrc@^3 \
  @tailwindcss/postcss@^4 \
  @types/locomotive-scroll@^4.1.4 \
  @types/node@^20 \
  @types/react@^19 \
  @types/react-dom@^19 \
  eslint@^9 \
  eslint-config-next@15.5.1 \
  tailwindcss@^4 \
  typescript@^5

git clone https://github.com/kapilsingh09/foliohub.git
cd foliohub
npm install
npm run dev