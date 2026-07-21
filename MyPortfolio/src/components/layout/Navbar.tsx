import { useState } from "react";
import { portfolio } from "../../data/portfolio";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { Container } from "./Container";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  ...(portfolio.codingProfiles.length > 0
    ? [{ label: "Profiles", href: "#profiles" }]
    : []),
  { label: "Contact", href: "#contact" },
];
const sectionIds = navItems.map((item) => item.href.slice(1));

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useScrollSpy(sectionIds);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-lg">
      <Container className="relative flex h-16 items-center justify-between gap-4">
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
              className={`text-sm font-medium transition-colors hover:text-cyan-300 ${
                activeSection === item.href.slice(1)
                  ? "text-cyan-300"
                  : "text-slate-400"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          className="rounded-md border border-slate-700 px-3 py-2 text-xs font-semibold text-slate-200 transition-colors hover:border-cyan-400 hover:text-cyan-300 md:hidden"
        >
          Menu
        </button>

        <a
          href={portfolio.resumeUrl}
          download
          className="hidden rounded-md border border-cyan-400/70 px-3 py-2 text-xs font-semibold text-cyan-300 transition-colors hover:bg-cyan-400 hover:text-slate-950 sm:inline-flex"
        >
          Resume
        </a>

        {isMenuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="absolute left-0 right-0 top-[4.5rem] rounded-xl border border-slate-800 bg-slate-900 p-3 shadow-2xl shadow-slate-950 md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-slate-800 ${
                  activeSection === item.href.slice(1) ? "text-cyan-300" : "text-slate-300"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href={portfolio.resumeUrl}
              download
              className="mt-2 block rounded-lg bg-cyan-400 px-4 py-3 text-center text-sm font-semibold text-slate-950"
            >
              Get My Resume
            </a>
          </nav>
        )}
      </Container>
    </header>
  );
}
