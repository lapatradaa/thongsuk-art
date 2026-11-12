"use client"

import * as React from "react"

type Inquiry = { artworkId: string; setArtworkId: (id: string) => void; inquire: (id: string) => void }

const InquiryContext = React.createContext<Inquiry | null>(null)

/** Shares "which artwork is the visitor asking about" between the gallery wall, the grid and the contact form. */
export function InquiryProvider({ children }: { children: React.ReactNode }) {
  const [artworkId, setArtworkId] = React.useState("")
  const inquire = React.useCallback((id: string) => {
    setArtworkId(id)
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" })
    window.setTimeout(() => document.getElementById("inquiry-name")?.focus({ preventScroll: true }), 600)
  }, [])
  const value = React.useMemo(() => ({ artworkId, setArtworkId, inquire }), [artworkId, inquire])
  return <InquiryContext.Provider value={value}>{children}</InquiryContext.Provider>
}

export function useInquiry() {
  const ctx = React.useContext(InquiryContext)
  if (!ctx) throw new Error("useInquiry must be used inside <InquiryProvider>")
  return ctx
}
