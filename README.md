# Ankur's Portfolio

A responsive portfolio built with React, TypeScript, Vite, and Tailwind CSS.

## Run locally

```powershell
npm.cmd run dev
```

Open the local URL Vite shows in the terminal (normally `http://localhost:5173`).

## Your content checklist

Edit `src/data/portfolio.ts` to update:

- Your headline, introduction, skills, GitHub, and LinkedIn links.
- The education placeholder with your actual college, degree, dates, and score.
- The three project placeholders with your projects, technologies, and optional live/GitHub links.

For project images:

1. Add images to `public/images/projects`.
2. Add their paths to the corresponding project objects, for example `image: '/images/projects/my-project.png'`.

The resume download button uses `public/Resume Software2.pdf`. Replace that file only when you have an updated resume, keeping the same filename or updating `resumeUrl` in `src/data/portfolio.ts`.

## Checks

```powershell
npm.cmd run build
npm.cmd run lint
```
