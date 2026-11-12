"use client"

import { useLang, type Lang } from "@/lib/i18n"
import { cn } from "@/lib/utils"

const OPTIONS: { value: Lang; label: string; full: string }[] = [
  { value: "en", label: "EN", full: "English" },
  { value: "th", label: "TH", full: "ภาษาไทย" },
]

/** EN | TH switch. English is the default until the visitor picks Thai. */
export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang, t } = useLang()
  return (
    <div role="group" aria-label={t.nav.switchLang} className={cn("inline-flex items-center rounded-full border p-0.5 text-xs font-medium", className)}>
      {OPTIONS.map((o) => (
        <button
          key={o.value}
          type="button"
          lang={o.value}
          aria-label={o.full}
          aria-pressed={lang === o.value}
          onClick={() => setLang(o.value)}
          className={cn(
            "rounded-full px-2.5 py-1 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring",
            lang === o.value ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground",
          )}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}
