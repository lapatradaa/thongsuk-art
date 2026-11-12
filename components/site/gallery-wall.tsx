"use client"

import * as React from "react"
import { MessageCircle } from "lucide-react"

import { PictureRailGallery } from "@/components/ui/picture-rail-gallery"
import { Button } from "@/components/ui/button"
import { useLang } from "@/lib/i18n"
import { useArtworks } from "@/components/site/use-artworks"
import { useInquiry } from "@/components/site/inquiry-context"

/** The sales wall: hover/brush along the rail to light a print, click to lift it and flip it over. */
export function GalleryWall() {
  const { inquire } = useInquiry()
  const { t } = useLang()
  const ARTWORKS = useArtworks()
  // Remember the last lit print so the button keeps pointing at it after the pointer leaves the wall.
  const [selected, setSelected] = React.useState(0)
  const onActiveChange = React.useCallback((i: number | null) => { if (i !== null) setSelected(i) }, [])

  const artwork = ARTWORKS[selected]
  const available = artwork?.status === "available"

  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="border-y bg-background">
      <h2 id="gallery-heading" className="sr-only">{t.gallery.srHeading}</h2>
      <PictureRailGallery
        items={ARTWORKS}
        eyebrow={t.gallery.eyebrow}
        heading={t.gallery.heading}
        caption={t.gallery.caption}
        labels={t.gallery.labels}
        autoplay
        interval={3200}
        onActiveChange={onActiveChange}
        action={
          artwork && (
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                className="rounded-full px-6"
                disabled={!available}
                onClick={() => inquire(artwork.id)}
              >
                <MessageCircle aria-hidden className="mr-2 size-4" />
                {available ? t.gallery.inquire(artwork.title) : t.gallery.unavailable(artwork.title, t.status[artwork.status])}
              </Button>
              <Button asChild variant="link" className="text-foreground">
                <a href="#works">{t.gallery.list}</a>
              </Button>
            </div>
          )
        }
      />
    </section>
  )
}
