export type SocialLink = {
  label: string
  href: string
}

export type SkillGroup = {
  title: string
  skills: string[]
}

export type Experience = {
  company: string
  role: string
  period: string
  location?: string
  highlights: string[]
}

export type Project = {
  title: string
  description: string
  technologies: string[]
  image?: string
  liveUrl?: string
  repoUrl?: string
}

export type Education = {
  institution: string
  degree: string
  period: string
  score?: string
}

export type PortfolioData = {
  name: string
  role: string
  tagline: string
  about: string
  location: string
  email: string
  resumeUrl: string
  socialLinks: SocialLink[]
  codingProfiles: SocialLink[]
  skillGroups: SkillGroup[]
  experience: Experience[]
  projects: Project[]
  education: Education[]
}
