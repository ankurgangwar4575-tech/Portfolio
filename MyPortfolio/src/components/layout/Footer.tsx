import { portfolio } from '../../data/portfolio'
import { Container } from './Container'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800 py-8">
      <Container className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-slate-500">
          © {year} {portfolio.name}. Built with React and TypeScript.
        </p>
        <div className="flex items-center gap-4">
          {portfolio.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-slate-400 transition-colors hover:text-cyan-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  )
}
