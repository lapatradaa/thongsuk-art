"use client"

import { SITE } from "@/lib/site"
import { useLang } from "@/lib/i18n"

export function About() {
  const { t } = useLang()
  const a = t.about
  return (
    <section id="about" aria-labelledby="about-heading" className="border-t bg-card">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:py-28 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="aspect-[4/5] w-full overflow-hidden bg-muted">
            {/* แทนที่ด้วยรูปศิลปินจริง: วางไฟล์ที่ /public/art/artist.jpg แล้วเปลี่ยน src เป็น "/art/artist.jpg" */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://cdn.21st.dev/assets/mirror/18/18129f9729d7e9fd5393c61d23efb785da4320478b3a878a3e6dd084d86a229d.jpg"
              alt={a.imageAlt}
              loading="lazy"
              className="size-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-6 lg:col-span-6 lg:col-start-7">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">{a.eyebrow}</p>
          <h2 id="about-heading" className="font-serif text-3xl tracking-tight sm:text-4xl">{SITE.name}</h2>
          {/* TODO: เขียนประวัติจริงของศิลปินใน lib/i18n.tsx (about.p1, about.p2) ทั้งสองภาษา */}
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>{a.p1}</p>
            <p>{a.p2}</p>
          </div>
          <dl className="grid grid-cols-3 gap-6 border-t pt-6">
            {a.facts.map(([k, v]) => (
              <div key={k}>
                <dt className="text-xs text-muted-foreground">{k}</dt>
                <dd className="mt-1 text-sm font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
