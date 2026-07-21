import { Container } from "../components/layout/Container";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { ContactForm } from "../components/ui/ContactForm";
import { EducationCard } from "../components/ui/EducationCard";
import { ProjectCard } from "../components/ui/ProjectCard";
import { ScrollToTop } from "../components/ui/ScrollToTop";
import { SectionHeading } from "../components/ui/SectionHeading";
import { portfolio } from "../data/portfolio";

export function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main>
        <section id="home" className="relative overflow-hidden py-24 sm:py-32">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.16),_transparent_35%)]" />
          <Container className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
            <div>
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
                <Button href="#projects">Explore Projects</Button>
                <Button href={portfolio.resumeUrl} download variant="secondary">
                  Download Resume
                </Button>
              </div>
            </div>
            <div className="mx-auto w-56 rounded-3xl border border-cyan-400/30 bg-slate-900/60 p-2 shadow-2xl shadow-cyan-950/20 sm:w-64 lg:mx-0">
              <img
                src="/images/profile.jpeg"
                alt={`Portrait of ${portfolio.name}`}
                className="aspect-square w-full rounded-2xl object-cover"
              />
            </div>
          </Container>
        </section>

        <section id="about" className="py-20">
          <Container>
            <SectionHeading
              eyebrow="About me"
              title="Building software that solves real problems"
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
              description="A few projects that reflect how I learn, build, and solve problems."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {portfolio.projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </Container>
        </section>
        <section id="education" className="py-20">
          <Container>
            <SectionHeading
              eyebrow="Academic background"
              title="Education"
              description="The foundation that shaped my technical learning journey."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {portfolio.education.map((education) => (
                <EducationCard
                  key={`${education.institution}-${education.degree}`}
                  education={education}
                />
              ))}
            </div>
          </Container>
        </section>

        {portfolio.codingProfiles.length > 0 && (
          <section id="profiles" className="py-20">
            <Container>
              <SectionHeading
                eyebrow="Problem solving"
                title="Coding profiles"
                description="Explore my progress and practice across competitive programming platforms."
              />
              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {portfolio.codingProfiles.map((profile) => (
                  <Card key={profile.label} className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold text-white">{profile.label}</h3>
                    <Button href={profile.href} target="_blank" rel="noreferrer" variant="secondary">
                      View profile
                    </Button>
                  </Card>
                ))}
              </div>
            </Container>
          </section>
        )}

        <section id="contact" className="py-20">
          <Container>
            <Card className="border-cyan-400/20 text-center">
              <SectionHeading
                align="center"
                eyebrow="Get in touch"
                title="Let's build something great."
              />
              <ContactForm />
            </Card>
          </Container>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
