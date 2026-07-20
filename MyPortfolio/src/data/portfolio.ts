import type { PortfolioData } from '../types/portfolio'

// Keep all resume content here. The UI will read from this single file.
export const portfolio: PortfolioData = {
  name: 'Your Name',
  role: 'Software Developer',
  tagline: 'I build thoughtful, reliable web experiences.',
  about:
    'I am a software developer focused on building clean, accessible, and user-friendly products.',
  location: 'India',
  email: 'your.email@example.com',
  resumeUrl: '/Resume Software2.pdf',
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/your-username' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-username' },
  ],
  skillGroups: [
    { title: 'Frontend', skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'] },
    { title: 'Tools', skills: ['Git', 'GitHub', 'VS Code'] },
  ],
  experience: [],
  projects: [],
  education: [],
}
