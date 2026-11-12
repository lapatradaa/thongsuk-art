"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { NAV, SITE } from "@/lib/site"
import { useLang } from "@/lib/i18n"
import { LanguageToggle } from "@/components/site/language-toggle"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const { t } = useLang()
  const [open, setOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-[background-color,border-color] duration-300",
        scrolled || open ? "border-b bg-background/85 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="#top" className="font-serif text-lg tracking-tight" onClick={() => setOpen(false)}>
          {SITE.name}
        </Link>

        <nav aria-label={t.nav.main} className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {t.nav[item.key]}
            </Link>
          ))}
          <LanguageToggle />
          <Button asChild size="sm" className="rounded-full px-5">
            <Link href="#gallery">{t.nav.cta}</Link>
          </Button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
        <LanguageToggle />
        <Button
          variant="ghost"
          size="icon"
          aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label={t.nav.main} className="border-t px-6 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)} className="block py-3 text-base">
                  {t.nav[item.key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
