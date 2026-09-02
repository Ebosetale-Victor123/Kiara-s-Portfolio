# Anita Ehiri Ihechi — Portfolio Website

A modern professional portfolio and downloadable CV site built with React + Vite + TypeScript + Tailwind CSS.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## How to customise

### Edit resume content
All text on the site **and** in the downloadable PDF comes from one file:

```
src/data/resume.ts
```

Open it and update:
- `[Add Date Range]` placeholders with real employment dates
- `[Add Start Year]` with the Miva University enrolment year
- `[Add Year]` with the secondary school graduation year
- `personal.linkedin` and `personal.instagram` with your real profile URLs

---

### Replace the profile photo
The current photo is at `public/images/kiara-profile.jpg`.

To change it:
1. Drop your new photo into `public/images/`
2. In `src/data/resume.ts`, update `personal.photo` to the new filename (e.g. `'/images/new-photo.jpg'`)

---

### Add real video files
1. Place `.mp4` files in `public/videos/`
2. In `src/data/resume.ts`, find the `videos` array and set `src` to the path:
   ```ts
   { title: 'Content Campaign Walkthrough', src: '/videos/demo.mp4', ... }
   ```
   The player will appear automatically; if `src` is `null`, the placeholder card is shown.

---

## Build & Deploy

```bash
npm run build    # outputs to /dist
npm run preview  # preview the production build locally
```

Deploy the `/dist` folder to Vercel, Netlify, or any static host.
