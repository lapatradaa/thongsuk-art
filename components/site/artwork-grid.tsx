"use client"

import { priceLabel } from "@/lib/artworks"
import { useLang } from "@/lib/i18n"
import { useArtworks } from "@/components/site/use-artworks"
import { useInquiry } from "@/components/site/inquiry-context"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/** Plain list of every work: easy to scan on phones and readable by search engines. */
export function ArtworkGrid() {
  const { inquire } = useInquiry()
  const { t } = useLang()
  const ARTWORKS = useArtworks()
  return (
    <section id="works" aria-labelledby="works-heading" className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
      <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">{t.works.eyebrow}</p>
          <h2 id="works-heading" className="mt-2 font-serif text-3xl tracking-tight">{t.works.heading}</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          {t.works.count(ARTWORKS.filter((a) => a.status === "available").length, ARTWORKS.length)}
        </p>
      </div>

      <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {ARTWORKS.map((a) => (
          <li key={a.id} className="group flex flex-col">
            <div className="relative flex aspect-[4/5] items-center justify-center bg-muted p-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={a.image}
                alt={`${a.title} — ${a.medium}`}
                loading="lazy"
                decoding="async"
                className={cn(
                  "max-h-full max-w-full object-contain shadow-[0_10px_25px_-12px_rgb(0_0_0/0.45)] transition-transform duration-500 group-hover:-translate-y-1 motion-reduce:transition-none",
                  a.status === "sold" && "opacity-70 grayscale-[30%]",
                )}
                style={{ aspectRatio: a.aspect }}
              />
              {a.status !== "available" && (
                <span className="absolute left-3 top-3 rounded-full bg-background px-2.5 py-1 text-[11px] font-medium">
                  {t.status[a.status]}
                </span>
              )}
            </div>
            <div className="mt-4 flex items-start justify-between gap-3">
              <div>
                <h3 className="font-medium">{a.title}</h3>
                <p className="mt-0.5 text-sm text-muted-foreground">{a.medium} · {a.size} · {a.year}</p>
              </div>
              <p className="shrink-0 text-sm font-medium tabular-nums">{priceLabel(a, t)}</p>
            </div>
            {a.status === "available" && (
              <Button variant="outline" size="sm" className="mt-3 self-start rounded-full" onClick={() => inquire(a.id)}>
                {t.works.ask}
              </Button>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
