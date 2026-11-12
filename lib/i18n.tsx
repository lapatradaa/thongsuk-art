"use client"

import * as React from "react"

/**
 * ระบบสองภาษา (EN / TH)
 * ─────────────────────
 * - เปิดเว็บครั้งแรกเป็นภาษาอังกฤษ (DEFAULT_LANG)
 * - ผู้เข้าชมกดปุ่ม EN / TH ที่เมนูด้านบน และเว็บจะจำภาษาที่เลือกไว้ในเบราว์เซอร์
 * - ข้อความทั้งหมดของหน้าเว็บอยู่ใน DICT ด้านล่าง แก้ได้ที่นี่ที่เดียว
 *   (ข้อมูลผลงานแต่ละชิ้นอยู่ใน lib/artworks.ts)
 */
export type Lang = "en" | "th"
export const DEFAULT_LANG: Lang = "en"
const STORAGE_KEY = "thongsuk-lang"

/** A value written in both languages. */
export type Bi = { en: string; th: string }

export const DICT = {
  en: {
    nav: { gallery: "Works", about: "About", howToBuy: "How to buy", contact: "Contact", cta: "View the wall", menuOpen: "Open menu", menuClose: "Close menu", main: "Main menu", switchLang: "เปลี่ยนเป็นภาษาไทย" },
    hero: {
      tagline: "Original paintings by the artist's own hand. Every piece is one of a kind.",
      title: "Paintings that hold the light, the wind and the memories of home.",
      description:
        "Original oils, watercolours and charcoal drawings by Thongsuk Sawatnatee. Browse them on the gallery wall below, then ask about or buy a piece directly from the artist's family.",
      imageAlt: "A still lake at dawn, a work by the artist",
      primary: "See the gallery wall",
      secondary: "About the artist",
    },
    gallery: {
      srHeading: "Works on the wall",
      eyebrow: "Gallery wall · Original works",
      heading: "Walk along the wall, just like in a gallery.",
      caption: "Move along the rail to light a painting, drag to slide it, click to lift it and see the back.",
      labels: { front: "Front", back: "Back", close: "Close", open: "Click to look closer" },
      inquire: (t: string) => `Ask about / buy “${t}”`,
      unavailable: (t: string, s: string) => `“${t}” · ${s}`,
      list: "See all works as a list",
    },
    works: { eyebrow: "Catalogue", heading: "All works", count: (a: number, n: number) => `${a} of ${n} available`, ask: "Ask about this piece" },
    status: { available: "Available", reserved: "Reserved", sold: "Sold" },
    artwork: { original: "One-of-a-kind original", signed: "Signed by the artist" },
    about: {
      eyebrow: "About the artist",
      imageAlt: "The artist's studio",
      p1: "Thongsuk has painted all his life, drawn to morning light, rice fields, rivers and the canal-side houses he knows by heart. Every painting begins with sitting quietly in front of the scene, then slowly bringing it onto canvas and paper.",
      p2: "Every work on this site is an original, one of a kind, signed by the artist, with a certificate on the back of the frame.",
      facts: [["Originals", "Every piece"], ["Media", "Oil · Watercolour · Charcoal"], ["Studio", "Bangkok, Thailand"]],
    },
    how: {
      eyebrow: "How to buy",
      heading: "How to buy",
      steps: [
        ["Choose a painting and ask", "Press “Ask” on a painting, or message us on LINE or by phone with the title you like."],
        ["Confirm and pay", "We'll confirm the piece is still available, send extra photos, and share bank transfer details."],
        ["Receive it at home", "Shipped anywhere in Thailand, carefully packed, or arrange to pick it up in person."],
      ],
    },
    contact: {
      eyebrow: "Contact",
      heading: "Like a painting? Just ask.",
      intro: "Ask for details, more photos, or an appointment to see the work in person. Every message gets a reply.",
      name: "Name",
      phone: "Phone / LINE ID",
      artwork: "Painting you're interested in",
      none: "— None yet / general question —",
      message: "Message",
      placeholder: "e.g. How much is shipping to Chiang Mai? Could I see more photos?",
      send: "Send message",
      subjectArt: (t: string) => `Enquiry about “${t}”`,
      subject: "Enquiry about artwork",
      bodyName: "Name",
      bodyPhone: "Phone / LINE",
      bodyArt: "Painting",
    },
    footer: { rights: "All works © the artist." },
  },
  th: {
    nav: { gallery: "ผลงาน", about: "เกี่ยวกับศิลปิน", howToBuy: "วิธีสั่งซื้อ", contact: "ติดต่อ", cta: "ชมผลงาน", menuOpen: "เปิดเมนู", menuClose: "ปิดเมนู", main: "เมนูหลัก", switchLang: "Switch to English" },
    hero: {
      tagline: "ภาพวาดต้นฉบับจากฝีมือศิลปิน ทุกชิ้นมีเพียงชิ้นเดียว",
      title: "ภาพวาดที่เก็บแสง ลม และความทรงจำของบ้านเรา",
      description:
        "ผลงานต้นฉบับของ Thongsuk Sawatnatee ทั้งสีน้ำมัน สีน้ำ และชาร์โคล เลือกชมบนผนังแกลเลอรีด้านล่าง แล้วสอบถามหรือสั่งซื้อได้โดยตรงกับครอบครัวศิลปิน",
      imageAlt: "ภาพบึงน้ำยามเช้า ผลงานของศิลปิน",
      primary: "ชมผลงานบนผนัง",
      secondary: "เกี่ยวกับศิลปิน",
    },
    gallery: {
      srHeading: "ผลงานบนผนัง",
      eyebrow: "Gallery wall · Original works",
      heading: "เลือกชมภาพบนผนัง เหมือนเดินอยู่ในแกลเลอรี",
      caption: "เลื่อนเมาส์ไปตามราวแขวนเพื่อเปิดไฟส่องภาพ ลากเพื่อขยับ คลิกเพื่อยกขึ้นดูด้านหลัง",
      labels: { front: "ด้านหน้า", back: "ด้านหลัง", close: "ปิด", open: "คลิกเพื่อยกชมใกล้ ๆ" },
      inquire: (t: string) => `สอบถาม / สั่งซื้อ “${t}”`,
      unavailable: (t: string, s: string) => `“${t}” · ${s}`,
      list: "ดูผลงานทั้งหมดแบบรายการ",
    },
    works: { eyebrow: "Catalogue", heading: "ผลงานทั้งหมด", count: (a: number, n: number) => `${a} จาก ${n} ชิ้น พร้อมจำหน่าย`, ask: "สอบถามชิ้นนี้" },
    status: { available: "พร้อมจำหน่าย", reserved: "จองแล้ว", sold: "ขายแล้ว" },
    artwork: { original: "ต้นฉบับชิ้นเดียว", signed: "ลงนามโดยศิลปิน" },
    about: {
      eyebrow: "About the artist",
      imageAlt: "สตูดิโอของศิลปิน",
      p1: "คุณทองสุขวาดภาพมาตลอดชีวิต ด้วยความรักในแสงยามเช้า ทุ่งนา สายน้ำ และบ้านเรือนริมคลองที่คุ้นตา ทุกภาพเริ่มจากการนั่งมองสิ่งที่อยู่ตรงหน้าอย่างช้า ๆ แล้วค่อย ๆ ถ่ายทอดลงบนผ้าใบและกระดาษ",
      p2: "ผลงานในเว็บนี้เป็นภาพต้นฉบับทั้งหมด แต่ละชิ้นมีเพียงชิ้นเดียว ลงนามโดยศิลปิน และมาพร้อมใบรับรองผลงานที่ด้านหลังกรอบ",
      facts: [["ต้นฉบับ", "ทุกชิ้น"], ["สื่อ", "สีน้ำมัน · สีน้ำ · ชาร์โคล"], ["สตูดิโอ", "กรุงเทพฯ ประเทศไทย"]],
    },
    how: {
      eyebrow: "How to buy",
      heading: "วิธีสั่งซื้อ",
      steps: [
        ["เลือกภาพที่ชอบ แล้วสอบถาม", "กดปุ่ม “สอบถาม” ที่ภาพ หรือทักทาง LINE / โทร แจ้งชื่อภาพที่สนใจ"],
        ["ยืนยันและชำระเงิน", "เราจะยืนยันว่าภาพยังว่างอยู่ ส่งรูปเพิ่มเติมให้ดู แล้วแจ้งช่องทางโอนเงิน"],
        ["รับภาพถึงบ้าน", "จัดส่งทั่วประเทศ ห่อกันกระแทกอย่างดี หรือนัดรับด้วยตนเอง"],
      ],
    },
    contact: {
      eyebrow: "Contact",
      heading: "สนใจภาพไหน ทักมาได้เลย",
      intro: "สอบถามรายละเอียด ขอดูรูปเพิ่ม หรือนัดชมผลงานจริงได้ ยินดีตอบทุกข้อความ",
      name: "ชื่อ",
      phone: "เบอร์โทร / LINE ID",
      artwork: "ภาพที่สนใจ",
      none: "— ยังไม่ได้เลือก / สอบถามทั่วไป —",
      message: "ข้อความ",
      placeholder: "เช่น อยากทราบค่าจัดส่งไปเชียงใหม่ หรือขอดูรูปภาพจริงเพิ่มเติม",
      send: "ส่งข้อความ",
      subjectArt: (t: string) => `สอบถามภาพ “${t}”`,
      subject: "สอบถามผลงานศิลปะ",
      bodyName: "ชื่อ",
      bodyPhone: "เบอร์ติดต่อ",
      bodyArt: "ภาพที่สนใจ",
    },
    footer: { rights: "ภาพทุกชิ้นสงวนลิขสิทธิ์โดยศิลปิน" },
  },
}

export type Dict = (typeof DICT)["en"]
/** Compile-time check: the Thai dictionary must have every key the English one has. */
const THAI: Dict = DICT.th
const DICTS: Record<Lang, Dict> = { en: DICT.en, th: THAI }

type LangCtx = { lang: Lang; setLang: (l: Lang) => void; t: Dict }
const LangContext = React.createContext<LangCtx | null>(null)

// The chosen language lives in localStorage; useSyncExternalStore renders English on the server
// and switches to the saved choice right after hydration, without a mismatch.
const listeners = new Set<() => void>()
/** In-memory fallback so switching still works when storage is blocked (private mode). */
let current: Lang | null = null
function readLang(): Lang {
  if (current) return current
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    return saved === "th" || saved === "en" ? saved : DEFAULT_LANG
  } catch {
    return DEFAULT_LANG
  }
}
function subscribe(cb: () => void) {
  listeners.add(cb)
  const onStorage = (e: StorageEvent) => { if (e.key === STORAGE_KEY) { current = null; cb() } }
  window.addEventListener("storage", onStorage)
  return () => { listeners.delete(cb); window.removeEventListener("storage", onStorage) }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = React.useSyncExternalStore(subscribe, readLang, () => DEFAULT_LANG)

  React.useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = React.useCallback((l: Lang) => {
    current = l
    try { window.localStorage.setItem(STORAGE_KEY, l) } catch {}
    listeners.forEach((cb) => cb())
  }, [])

  const value = React.useMemo<LangCtx>(() => ({ lang, setLang, t: DICTS[lang] }), [lang, setLang])
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = React.useContext(LangContext)
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>")
  return ctx
}
