"use client"

import * as React from "react"
import { Mail, MessageCircle, Phone, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useInquiry } from "@/components/site/inquiry-context"
import { priceLabel } from "@/lib/artworks"
import { useLang } from "@/lib/i18n"
import { useArtworks } from "@/components/site/use-artworks"
import { SITE } from "@/lib/site"

const field =
  "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none transition-shadow placeholder:text-muted-foreground/70 focus-visible:ring-2 focus-visible:ring-ring"

/**
 * แบบฟอร์มสอบถาม — ตอนนี้กดส่งแล้วจะเปิดโปรแกรมอีเมลพร้อมข้อความที่กรอกไว้ (ไม่ต้องมี backend)
 * ถ้าต้องการรับข้อความเข้าระบบ ให้เปลี่ยน onSubmit ไปเรียก API / Formspree / LINE Notify แทน
 */
export function Contact() {
  const { artworkId, setArtworkId } = useInquiry()
  const { t } = useLang()
  const c = t.contact
  const ARTWORKS = useArtworks()
  const [name, setName] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [message, setMessage] = React.useState("")
  const artwork = ARTWORKS.find((a) => a.id === artworkId)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = artwork ? c.subjectArt(artwork.title) : c.subject
    const body = [
      `${c.bodyName}: ${name}`,
      `${c.bodyPhone}: ${phone}`,
      artwork ? `${c.bodyArt}: ${artwork.title} (${artwork.size}, ${priceLabel(artwork, t)})` : "",
      "",
      message,
    ].filter((l, i) => l || i > 2).join("\n")
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="border-t bg-card">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:py-28 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">{c.eyebrow}</p>
          <h2 id="contact-heading" className="mt-2 font-serif text-3xl tracking-tight sm:text-4xl">{c.heading}</h2>
          <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
            {c.intro}
          </p>
          <ul className="mt-8 flex flex-col gap-4 text-sm">
            <li>
              <a href={SITE.lineUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 hover:underline">
                <MessageCircle aria-hidden className="size-4 text-brass" /> LINE: {SITE.lineId}
              </a>
            </li>
            <li>
              <a href={`tel:${SITE.phone.replace(/[^\d+]/g, "")}`} className="inline-flex items-center gap-3 hover:underline">
                <Phone aria-hidden className="size-4 text-brass" /> {SITE.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-3 hover:underline">
                <Mail aria-hidden className="size-4 text-brass" /> {SITE.email}
              </a>
            </li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="grid gap-5 lg:col-span-6 lg:col-start-7">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-1.5 text-sm">
              {c.name}
              <input id="inquiry-name" required value={name} onChange={(e) => setName(e.target.value)} className={field} autoComplete="name" />
            </label>
            <label className="grid gap-1.5 text-sm">
              {c.phone}
              <input required value={phone} onChange={(e) => setPhone(e.target.value)} className={field} autoComplete="tel" />
            </label>
          </div>
          <label className="grid gap-1.5 text-sm">
            {c.artwork}
            <select value={artworkId} onChange={(e) => setArtworkId(e.target.value)} className={field}>
              <option value="">{c.none}</option>
              {ARTWORKS.map((a) => (
                <option key={a.id} value={a.id} disabled={a.status !== "available"}>
                  {a.title} · {a.size} · {priceLabel(a, t)}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-1.5 text-sm">
            {c.message}
            <textarea
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={c.placeholder}
              className={field}
            />
          </label>
          <Button type="submit" className="justify-self-start rounded-full px-6">
            <Send aria-hidden className="mr-2 size-4" /> {c.send}
          </Button>
        </form>
      </div>
    </section>
  )
}
