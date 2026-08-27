import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/utils'

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'group rounded-2xl border border-white/10 bg-slate-900/50 p-6 shadow-xl shadow-slate-950/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-slate-900/70 hover:shadow-cyan-950/30',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
