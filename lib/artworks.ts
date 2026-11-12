import type { PictureRailItem } from "@/components/ui/picture-rail-gallery"
import type { Bi, Dict, Lang } from "@/lib/i18n"

/**
 * ผลงานที่แขวนบน gallery wall (สองภาษา)
 * ─────────────────────────────
 * - `title` และ `medium` ใส่ทั้งภาษาอังกฤษ (en) และไทย (th)
 * - แทนที่ `image` ด้วยรูปถ่ายผลงานจริง (วางไฟล์ไว้ที่ /public/art/ แล้วใส่ "/art/ชื่อไฟล์.jpg")
 * - `aspect` = กว้าง ÷ สูง ของภาพ เช่น 60×40 ซม. → 1.5, 30×40 ซม. → 0.75
 * - `status` บอกว่าชิ้นไหนขายแล้ว — ชิ้นที่ไม่พร้อมขายจะแสดงสถานะแทนราคา
 */
export type ArtworkStatus = "available" | "reserved" | "sold"

export interface ArtworkData {
  id: string
  title: Bi
  medium: Bi
  year: string
  size: string
  image: string
  aspect: number
  frame: PictureRailItem["frame"]
  mat?: boolean
  drop?: number
  /** ราคาเป็นบาท */
  price: number
  status: ArtworkStatus
}

/** One artwork resolved to a single language, ready for the gallery components. */
export interface Artwork extends PictureRailItem {
  title: string
  medium: string
  size: string
  price: number
  status: ArtworkStatus
}

const ARTIST = "Thongsuk Sawatnatee"

const baht = (n: number) => `฿${n.toLocaleString("en-US")}`

export const ARTWORK_DATA: ArtworkData[] = [
  {
    id: "ochre-curve",
    title: { en: "Rice Fields at Dusk", th: "ทุ่งข้าวยามเย็น" },
    year: "2023",
    image: "https://cdn.21st.dev/assets/mirror/44/4445f03ad28d15cefbb28d15bb1b6d50e0d08c78a776fa5969447c794f82a806.jpg",
    aspect: 0.75,
    frame: "black",
    mat: true,
    drop: 0.04,
    medium: { en: "Oil on canvas", th: "สีน้ำมันบนผ้าใบ" },
    size: "30 × 40 cm",
    price: 8500,
    status: "available",
  },
  {
    id: "spiral-study",
    title: { en: "House by the Canal", th: "บ้านริมคลอง" },
    year: "2021",
    image: "https://cdn.21st.dev/assets/mirror/25/259c0cebf80f6ec168975130a27ee93400c3f62b13c08f4a75f839f0c4472617.jpg",
    aspect: 4 / 3,
    frame: "white",
    mat: true,
    drop: 0.12,
    medium: { en: "Watercolour on paper", th: "สีน้ำบนกระดาษ" },
    size: "40 × 30 cm",
    price: 6200,
    status: "available",
  },
  {
    id: "dune-field",
    title: { en: "Golden Sands", th: "ผืนทรายสีทอง" },
    year: "2024",
    image: "https://cdn.21st.dev/assets/mirror/d8/d81a9b43595ed23c73a955770b69923af9d90ecba76da30395019cb197cde4a8.jpg",
    aspect: 0.75,
    frame: "oak",
    drop: -0.02,
    medium: { en: "Acrylic on canvas", th: "สีอะคริลิกบนผ้าใบ" },
    size: "30 × 40 cm",
    price: 5900,
    status: "reserved",
  },
  {
    id: "rain-study",
    title: { en: "First Rain of the Year", th: "ฝนแรกของปี" },
    year: "2022",
    image: "https://cdn.21st.dev/assets/mirror/6c/6c85d8a9d91f7e39697be27039336ffb8dd489d91171aaaf45aef057b00c2179.jpg",
    aspect: 1,
    frame: "black",
    mat: true,
    drop: 0.16,
    medium: { en: "Watercolour on paper", th: "สีน้ำบนกระดาษ" },
    size: "30 × 30 cm",
    price: 4500,
    status: "available",
  },
  {
    id: "still-lake",
    title: { en: "Still Lake at Dawn", th: "บึงนิ่งยามเช้า" },
    year: "2024",
    image: "https://cdn.21st.dev/assets/mirror/59/59ad9130324eb961582ce6ef06326623e6faad4bd2124749697c8f55a27aeb92.jpg",
    aspect: 1.5,
    frame: "oak",
    drop: 0.06,
    medium: { en: "Oil on canvas", th: "สีน้ำมันบนผ้าใบ" },
    size: "60 × 40 cm",
    price: 14000,
    status: "available",
  },
  {
    id: "concrete-choir",
    title: { en: "City Shadows", th: "เงาในเมือง" },
    year: "2020",
    image: "https://cdn.21st.dev/assets/mirror/31/31b653f5250dba3fe70f29000e39129e43c431fea5076aeece90cedf21a6ad32.jpg",
    aspect: 0.8,
    frame: "white",
    mat: true,
    drop: 0,
    medium: { en: "Charcoal on paper", th: "ถ่านชาร์โคลบนกระดาษ" },
    size: "40 × 50 cm",
    price: 7800,
    status: "sold",
  },
  {
    id: "north-light",
    title: { en: "Northern Light", th: "แสงเหนือ" },
    year: "2024",
    image: "https://cdn.21st.dev/assets/mirror/e2/e245c0be96e28ea1e85ba0957e8ed182e80f1f79bd9934ee00643816e9447f9a.jpg",
    aspect: 1.5,
    frame: "black",
    drop: 0.1,
    medium: { en: "Oil on canvas", th: "สีน้ำมันบนผ้าใบ" },
    size: "90 × 60 cm",
    price: 22000,
    status: "available",
  },
  {
    id: "tide-line",
    title: { en: "Tide Line", th: "เส้นขอบน้ำ" },
    year: "2023",
    image: "https://cdn.21st.dev/assets/mirror/b5/b564beac2d0a0dc33cfb14013770897137298e29ff401bbc7cff0e9383b87e14.jpg",
    aspect: 1,
    frame: "oak",
    mat: true,
    drop: 0.03,
    medium: { en: "Acrylic on canvas", th: "สีอะคริลิกบนผ้าใบ" },
    size: "50 × 50 cm",
    price: 9800,
    status: "available",
  },
]

export function priceLabel(a: Pick<Artwork, "price" | "status">, t: Dict) {
  return a.status === "available" ? baht(a.price) : t.status[a.status]
}

export function artworksFor(lang: Lang, t: Dict): Artwork[] {
  return ARTWORK_DATA.map((a) => {
    const art = { ...a, title: a.title[lang], medium: a.medium[lang], artist: ARTIST }
    return {
      ...art,
      tag: priceLabel(art, t),
      details: [art.medium, art.size, `${t.artwork.original} · ${t.status[a.status]}`, t.artwork.signed],
    }
  })
}
