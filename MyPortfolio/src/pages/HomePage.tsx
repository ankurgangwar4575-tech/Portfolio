import { Container } from "../components/layout/Container";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { SectionHeading } from "../components/ui/SectionHeading";
import { portfolio } from "../data/portfolio";

export function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main>
        <section id="home" className="relative overflow-hidden py-24 sm:py-32">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.16),_transparent_35%)]" />
          <Container>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              {portfolio.role}
            </p>
            <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-7xl">
              Hi, I&apos;m {portfolio.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              {portfolio.tagline}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="#projects">View my work</Button>
              <Button href={portfolio.resumeUrl} download variant="secondary">
                Download resume
              </Button>
            </div>
          </Container>
        </section>

        <section id="about" className="py-20">
          <Container>
            <SectionHeading
              eyebrow="About me"
              title="Building with intention."
              description={portfolio.about}
            />
          </Container>
        </section>

        <section id="skills" className="py-20">
          <Container>
            <SectionHeading eyebrow="Toolkit" title="Skills and technologies" />
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {portfolio.skillGroups.map((group) => (
                <Card key={group.title}>
                  <h3 className="text-lg font-semibold text-white">
                    {group.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section id="projects" className="py-20">
          <Container>
            <SectionHeading
              eyebrow="Selected work"
              title="Projects"
              description="Your best projects will appear here."
            />
          </Container>
        </section>

        <section id="contact" className="py-20">
          <Container>
            <Card className="border-cyan-400/20 text-center">
              <SectionHeading
                align="center"
                eyebrow="Get in touch"
                title="Let's build something great."
              />
              <Button className="mt-7" href={`mailto:${portfolio.email}`}>
                Email me
              </Button>
            </Card>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
