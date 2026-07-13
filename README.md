# My Portfolio

A personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS. It provides a fast, modern foundation for presenting your work, skills, and contact information.

## Tech stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- ESLint

## Getting started

### Prerequisites

Install [Node.js](https://nodejs.org/) (version 20 or later is recommended).

### Installation

```bash
git clone <your-repository-url>
cd Portfolio/MyPortfolio
npm install
```

### Run locally

```bash
npm run dev
```

Vite will show a local URL in the terminal, usually `http://localhost:5173`.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server with hot module replacement. |
| `npm run build` | Type-checks the app and creates an optimized production build. |
| `npm run lint` | Runs ESLint checks across the project. |
| `npm run preview` | Serves the production build locally for review. |

## Project structure

```text
Portfolio/
|-- README.md
`-- MyPortfolio/
    |-- src/
    |   |-- App.tsx        # Main application component
    |   |-- main.tsx       # Application entry point
    |   |-- index.css      # Global styles
    |   |-- components/    # Reusable UI components
    |   |-- context/       # Shared React context
    |   `-- pages/         # Page-level components
    |-- public/            # Static assets
    `-- package.json
```

## Customization

Start by updating `MyPortfolio/src/App.tsx` with your name, introduction, projects, skills, experience, and contact links. Add reusable sections to `src/components`, route-level views to `src/pages`, and place images or other static files in `public` (or import them from `src/assets`).

## Deployment

First create a production build:

```bash
cd MyPortfolio
npm run build
```

Deploy the generated `MyPortfolio/dist` folder to a static hosting provider such as Vercel, Netlify, or GitHub Pages.

## License

This project is intended for personal use. Add a license file if you plan to share or distribute it.
