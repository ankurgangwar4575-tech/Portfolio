import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/utils'

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
}

const variants = {
  primary:
    'bg-cyan-400 text-slate-950 hover:bg-cyan-300 focus-visible:outline-cyan-300',
  secondary:
    'border border-slate-700 bg-slate-900 text-slate-100 hover:border-cyan-400 hover:text-cyan-300 focus-visible:outline-cyan-300',
  ghost:
    'text-slate-300 hover:bg-slate-800 hover:text-white focus-visible:outline-cyan-300',
}

export function Button({ children, className, variant = 'primary', ...props }: ButtonProps) {
  return (
    <a
      className={cn(
        'inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}
