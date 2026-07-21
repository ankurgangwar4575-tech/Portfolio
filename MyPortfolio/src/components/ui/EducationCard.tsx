import type { Education } from '../../types/portfolio'
import { Card } from './Card'

type EducationCardProps = {
  education: Education
}

export function EducationCard({ education }: EducationCardProps) {
  return (
    <Card className="relative overflow-hidden border-cyan-400/20">
      <div className="absolute left-0 top-0 h-full w-1 bg-cyan-400" />
      <p className="text-sm font-semibold text-cyan-300">{education.period}</p>
      <h3 className="mt-2 text-xl font-semibold text-white">{education.degree}</h3>
      <p className="mt-2 text-slate-400">{education.institution}</p>
      {education.score && <p className="mt-4 text-sm font-medium text-slate-300">{education.score}</p>}
    </Card>
  )
}
