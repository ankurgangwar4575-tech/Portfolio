import { portfolio } from "../../data/portfolio";
import { Container } from "./Container";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-lg">
      <Container className="flex h-16 items-center justify-between gap-6">
        <a href="#home" className="text-lg font-bold tracking-tight text-white">
          {portfolio.name}
          <span className="text-cyan-300"></span>
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-6 md:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-400 transition-colors hover:text-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={portfolio.resumeUrl}
          download
          className="rounded-md border border-cyan-400/70 px-3 py-2 text-xs font-semibold text-cyan-300 transition-colors hover:bg-cyan-400 hover:text-slate-950"
        >
          Resume
        </a>
      </Container>
    </header>
  );
}
