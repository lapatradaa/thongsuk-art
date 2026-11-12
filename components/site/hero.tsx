"use client"

import { Hero05 } from "@/components/ui/hero-05"
import { useLang } from "@/lib/i18n"

export function Hero() {
  const { t } = useLang()
  const h = t.hero
  return (
    <Hero05
      tagline={h.tagline}
      title={h.title}
      description={h.description}
      landscapeImage="https://cdn.21st.dev/assets/mirror/59/59ad9130324eb961582ce6ef06326623e6faad4bd2124749697c8f55a27aeb92.jpg"
      landscapeAlt={h.imageAlt}
      animation="subtle"
      primaryCTA={{ ctaEnabled: true, text: h.primary, link: "#gallery", variant: "default" }}
      secondaryCTA={{ ctaEnabled: true, text: h.secondary, link: "#about", variant: "link" }}
    />
  )
}
