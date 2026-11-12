"use client"

import { MessageCircle, BadgeCheck, Truck } from "lucide-react"

import { useLang } from "@/lib/i18n"

const ICONS = [MessageCircle, BadgeCheck, Truck]

export function HowToBuy() {
  const { t } = useLang()
  return (
    <section id="how-to-buy" aria-labelledby="how-heading" className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
      <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">{t.how.eyebrow}</p>
      <h2 id="how-heading" className="mt-2 font-serif text-3xl tracking-tight">{t.how.heading}</h2>
      <ol className="mt-10 grid gap-10 md:grid-cols-3">
        {t.how.steps.map(([title, body], i) => {
          const Icon = ICONS[i] ?? MessageCircle
          return (
            <li key={i} className="flex flex-col gap-3 border-t pt-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                <Icon aria-hidden className="size-5 text-brass" />
              </div>
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
