import { useState, type FormEvent } from 'react'
import { portfolio } from '../../data/portfolio'

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '')
    const email = String(formData.get('email') ?? '')
    const message = String(formData.get('message') ?? '')
    const subject = `Portfolio enquiry from ${name}`
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`

    window.location.href = `mailto:${portfolio.email}?${new URLSearchParams({ subject, body })}`
    setIsSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-8 grid max-w-2xl gap-4 text-left">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-300">
          Name
          <input
            required
            name="name"
            autoComplete="name"
            placeholder="Your name"
            className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-600 focus:border-cyan-400"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-300">
          Email
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@example.com"
            className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-600 focus:border-cyan-400"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium text-slate-300">
        Message
        <textarea
          required
          name="message"
          rows={5}
          placeholder="Tell me a little about your idea or opportunity..."
          className="resize-y rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-600 focus:border-cyan-400"
        />
      </label>
      <button
        type="submit"
        className="justify-self-center rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
      >
        Send message
      </button>
      {isSubmitted && (
        <p className="text-center text-sm text-cyan-200">
          Your email app should now be open with the message prepared.
        </p>
      )}
    </form>
  )
}
