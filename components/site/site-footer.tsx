"use client"

import { SITE } from "@/lib/site"
import { useLang } from "@/lib/i18n"

export function SiteFooter() {
  const { t } = useLang()
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <p className="font-serif text-foreground">{SITE.name}</p>
        <p>© 2026 {SITE.name} · {t.footer.rights}</p>
      </div>
    </footer>
  )
}
