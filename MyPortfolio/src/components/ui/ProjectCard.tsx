import type { Project } from '../../types/portfolio'
import { Button } from './Button'
import { Card } from './Card'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden p-0 transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
      <div className="relative aspect-[16/9] overflow-hidden bg-slate-800">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.25),_transparent_45%),linear-gradient(135deg,_#0f172a,_#1e293b)]">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200/70">
              Project preview
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-3 flex-1 leading-7 text-slate-400">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span key={technology} className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300">
              {technology}
            </span>
          ))}
        </div>

        {(project.liveUrl || project.repoUrl) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.liveUrl && (
              <Button href={project.liveUrl} target="_blank" rel="noreferrer">
                Live demo
              </Button>
            )}
            {project.repoUrl && (
              <Button href={project.repoUrl} target="_blank" rel="noreferrer" variant="secondary">
                Source code
              </Button>
            )}
          </div>
        )}
      </div>
    </Card>
  )
}
