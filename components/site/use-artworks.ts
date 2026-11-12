"use client"

import * as React from "react"

import { artworksFor } from "@/lib/artworks"
import { useLang } from "@/lib/i18n"

/** The artworks in the visitor's current language. */
export function useArtworks() {
  const { lang, t } = useLang()
  return React.useMemo(() => artworksFor(lang, t), [lang, t])
}
