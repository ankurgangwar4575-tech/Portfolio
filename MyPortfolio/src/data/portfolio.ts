import type { PortfolioData } from '../types/portfolio'

export const portfolio: PortfolioData = {
  name: 'Ankur Gangwar',
  role: 'Software Developer',
  tagline: 'I build thoughtful, reliable web experiences.',
  about:
    'I am a software developer focused on building clean, accessible, and user-friendly products',
  location: 'India',
  email: 'ankurgangwar4575@gmail.com',
  resumeUrl: '/Resume Software2.pdf',
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/ankurgangwar4575-tech' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ankur-gangwar/' },
  ],
  skillGroups: [
    { title: 'Frontend', skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'] },
    { title: 'Tools', skills: ['Git', 'GitHub', 'VS Code'] },
  ],
  experience: [],
  projects: [],
  education: [],
}
