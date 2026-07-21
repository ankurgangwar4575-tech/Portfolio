# Ankur Gangwar | Portfolio

A responsive personal portfolio website for **Ankur Gangwar**, built to present education, skills, projects, coding profiles, and contact information in a clean, modern interface.

## Preview

Run the project locally to preview it:

```powershell
npm.cmd run dev
```

Vite will print a local address, usually `http://localhost:5173`.

## Features

- Responsive single-page portfolio with desktop and mobile navigation.
- Hero, About, Skills, Education, Projects, Coding Profiles, and Contact sections.
- Downloadable resume button.
- Project cards with optional live-demo and GitHub source-code links.
- Coding-profile cards for platforms such as LeetCode, CodeChef, HackerRank, and Codeforces.
- Contact form that opens the visitor's default email app with a prepared message.
- Active navigation link while scrolling and a scroll-to-top button.
- Accessible focus states, smooth scrolling, and a dark responsive design.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- ESLint

## Project Structure

```text
src/
├── assets/                 # Central image-path definitions
├── components/
│   ├── layout/             # Navbar, Footer, Container
│   └── ui/                 # Reusable buttons, cards, forms, and section UI
├── data/
│   └── portfolio.ts        # All personal portfolio content
├── hooks/
│   └── useScrollSpy.ts     # Active navigation on scroll
├── lib/
│   └── utils.ts            # Shared utility functions
├── pages/
│   └── HomePage.tsx        # Main portfolio page
├── styles/
│   └── globals.css         # Global styles and Tailwind import
├── types/
│   └── portfolio.ts        # TypeScript data models
├── App.tsx
└── main.tsx

public/
├── Resume Software2.pdf    # Downloadable resume
└── images/
    └── projects/           # Optional project screenshots
```

## Installation

### Prerequisites

- Node.js 20 or later
- npm

### Steps

```powershell
git clone <your-repository-url>
cd MyPortfolio
npm install
npm.cmd run dev
```

> On Windows systems where PowerShell blocks `npm.ps1`, use `npm.cmd` as shown above.

## Customization

All portfolio content is stored in [src/data/portfolio.ts](src/data/portfolio.ts). Update this file to change your name, introduction, skills, education, projects, social links, and coding profiles.

### Add a project

```ts
{
  title: 'Project Name',
  description: 'What the project does and the problem it solves.',
  technologies: ['React', 'TypeScript', 'Tailwind CSS'],
  image: '/images/projects/project-name.png',
  liveUrl: 'https://your-project-demo.com',
  repoUrl: 'https://github.com/your-username/project-name',
}
```

`image`, `liveUrl`, and `repoUrl` are optional. Their related UI elements appear only when a value is provided.

### Add coding profiles

```ts
codingProfiles: [
  { label: 'LeetCode', href: 'https://leetcode.com/u/your-username/' },
  { label: 'CodeChef', href: 'https://www.codechef.com/users/your-username' },
]
```

The Coding Profiles section and its navigation link appear automatically when this list contains at least one profile.

### Add images

1. Put your profile photo in `public/images/profile.jpg` if you plan to use one.
2. Put project screenshots in `public/images/projects/`.
3. Reference screenshots in the relevant project object using `/images/projects/filename.png`.

### Update the resume

The resume button currently uses `public/Resume Software2.pdf`. Replace it with an updated PDF while keeping that filename, or update `resumeUrl` in `src/data/portfolio.ts`.

## Available Commands

| Command | Purpose |
| --- | --- |
| `npm.cmd run dev` | Starts the development server. |
| `npm.cmd run build` | Creates an optimized production build in `dist/`. |
| `npm.cmd run preview` | Serves the production build locally. |
| `npm.cmd run lint` | Checks code quality with ESLint. |

## Deployment

Run a production build before deployment:

```powershell
npm.cmd run build
```

Upload the generated `dist` folder to a static hosting service such as Vercel, Netlify, or GitHub Pages. If using Vercel or Netlify with GitHub, connect the repository and set:

- Build command: `npm run build`
- Publish directory: `dist`

## Contact Form Note

The contact form uses a `mailto:` link. It opens the visitor's configured email application with the submitted details prefilled. It does not store messages or require a backend.

## License

This project is for personal portfolio use.
