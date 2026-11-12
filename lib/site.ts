/**
 * ข้อมูลติดต่อ — แก้ไขที่ไฟล์นี้ไฟล์เดียว
 * ค่าที่ขึ้นต้นด้วย "TODO" เป็นค่าตัวอย่าง ต้องเปลี่ยนเป็นข้อมูลจริงก่อนเปิดเว็บ
 * (ข้อความต่าง ๆ บนหน้าเว็บทั้งสองภาษาอยู่ใน lib/i18n.tsx)
 */
export const SITE = {
  name: "Thongsuk Sawatnatee",
  email: "TODO-email@example.com",
  phone: "TODO 08x-xxx-xxxx",
  lineId: "TODO-line-id",
  /** ลิงก์ LINE เช่น https://line.me/ti/p/~yourid */
  lineUrl: "https://line.me/ti/p/~TODO-line-id",
} as const

export const NAV = [
  { href: "#gallery", key: "gallery" },
  { href: "#about", key: "about" },
  { href: "#how-to-buy", key: "howToBuy" },
  { href: "#contact", key: "contact" },
] as const
