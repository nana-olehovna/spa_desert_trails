# Desert Trails — SPA Travel Website

A Single Page Application (SPA) travel website built with Vite and vanilla JavaScript.

---

## About the Project

**Desert Trails** is a modern SPA (Single Page Application) that simulates a multi-page travel website using only one HTML file and client-side routing.

Instead of traditional page reloads, navigation is handled dynamically in JavaScript.

---

## Tech Stack

- HTML5 (single entry point)
- CSS3
- Vanilla JavaScript
- Vite (build tool)
- Custom client-side routing (SPA architecture)

---

## Features

- Fast development with Vite
- Single HTML file structure
- Client-side routing (no page reloads)
- Multi-view navigation (Home, Destinations, etc.)
- Responsive design
- Minimal travel-themed UI

---

## How SPA Works

This project is a **Single Page Application (SPA)**:

- Only one `index.html` is loaded in the browser
- Navigation is handled by JavaScript
- Views/pages are dynamically rendered
- URL changes without full page reload

---

## Project Structure

```bash
src/
 ├── pages/        # Page views (Home, About, etc.)
 ├── router/       # SPA routing logic
 ├── components/   # Reusable UI components
 ├── i18n/   # JSON translations
 ├── languages/   # Language change functions
 ├── submit_listener/   # Event listener for Forms
 ├── styles/       # CSS styles
 └── main.js       # App entry point

```

---

## Run Locally

```bash
 npm install
 npm run dev
```
Then open: 
http://localhost:5173

---

## Build for Production

```bash
 npm run build
```

---

## Deploy

```bash
 npm run deploy
```

### GitHub Pages Notes

GitHub Pages can work well for this project because it is a static Vite SPA.

The main catch is client-side routing:

- URLs like `/about` or `/oman` do not exist as real files on the server
- after a browser refresh, GitHub Pages looks for those files and returns `404`
- to fix that for SPAs, the production build must include a `404.html` fallback that loads the app

This project is configured for a repository deployment at:

`https://<your-github-username>.github.io/spa_desert_trails/`

Important details:

- `vite.config.js` uses `base: "/spa_desert_trails/"`
- `src/router/index.js` uses `page.base("/spa_desert_trails")`
- `npm run deploy` now builds the app first and creates `dist/404.html` automatically

### Deploy Steps

1. Create a GitHub repository named `spa_desert_trails`
2. Push this project to that repository
3. Install dependencies:

```bash
npm install
```

4. Deploy:

```bash
npm run deploy
```

5. In GitHub, open:
   `Settings -> Pages`
6. Confirm the site is being published from the `gh-pages` branch
7. Open:
   `https://<your-github-username>.github.io/spa_desert_trails/`

### When GitHub Pages Is A Good Idea

GitHub Pages is a good option if:

- this is a frontend-only portfolio project
- you want free static hosting
- you do not need server-side rendering or a backend

You may prefer Netlify or Vercel if:

- you want easier SPA routing setup
- you want preview deployments for every push
- you expect to add forms, server functions, or more advanced hosting features

---

## Project Goal

- Practice client-side routing
- Learn SPA architecture without frameworks
- Build real-world frontend structure
- Improve vanilla JavaScript skills
- Create a portfolio-ready project

---

## Author

Created by: Anastasiia Hainova

---

## Status

Work in progress — routing and UI improvements coming soon

---

## Live Demo

https://nana-olehovna.github.io/spa_desert_trails/
