# Thongsuk Sawatnatee — เว็บโชว์และขายผลงานศิลปะ

Next.js 16 · TypeScript · Tailwind CSS v4 · โครงสร้าง shadcn (`components/ui`)

## เริ่มใช้งาน
```bash
npm install
npm run dev      # เปิด http://localhost:3000
npm run build    # สร้างเวอร์ชันจริง
```

## ไฟล์ที่ต้องแก้ก่อนเปิดเว็บ
| ไฟล์ | แก้อะไร |
|---|---|
| `lib/site.ts` | อีเมล, เบอร์โทร, LINE (ค่าที่ขึ้นต้นด้วย TODO) |
| `lib/i18n.tsx` | ข้อความทุกส่วนของเว็บ ทั้งภาษาอังกฤษ (`en`) และไทย (`th`) รวมประวัติศิลปิน |
| `lib/artworks.ts` | ชื่อภาพและเทคนิค (สองภาษา), ขนาด, ราคา, สถานะ, รูปภาพ |
| `components/site/about.tsx` | รูปศิลปิน |
| `components/site/hero.tsx` | รูปใหญ่ด้านบน |

## สองภาษา (EN / TH)
- เปิดเว็บครั้งแรกเป็น **ภาษาอังกฤษ** ผู้เข้าชมกดปุ่ม EN / TH ที่เมนูด้านบนเพื่อสลับ
- เว็บจำภาษาที่เลือกไว้ในเบราว์เซอร์ ครั้งหน้าที่เข้ามาจะเปิดภาษาเดิม
- เปลี่ยนภาษาเริ่มต้นได้ที่ `DEFAULT_LANG` ใน `lib/i18n.tsx`
- เพิ่มข้อความใหม่: ใส่ใน `DICT.en` และ `DICT.th` ให้ครบทั้งคู่ (TypeScript จะเตือนถ้าลืมฝั่งใดฝั่งหนึ่ง)

รูปผลงานจริง: วางไฟล์ไว้ที่ `public/art/` แล้วใส่ `image: "/art/ชื่อไฟล์.jpg"` และตั้ง `aspect` = กว้าง ÷ สูง

## โครงสร้าง
- `components/ui/hero-05.tsx`, `components/ui/picture-rail-gallery.tsx` — คอมโพเนนต์จาก 21st.dev (ไม่ได้แก้)
- `components/ui/hero-05-utils/cta.tsx` — ปุ่ม CTA ที่ Hero05 ต้องใช้ (ไม่มีมาในไฟล์ต้นฉบับ จึงเขียนเพิ่ม)
- `components/ui/button.tsx` — shadcn button
- `components/site/*` — ส่วนต่าง ๆ ของหน้าเว็บ (เมนู, gallery wall, รายการผลงาน, เกี่ยวกับ, วิธีซื้อ, ติดต่อ)

`components/ui` คือโฟลเดอร์มาตรฐานของ shadcn — คำสั่ง `npx shadcn add ...` และคอมโพเนนต์จาก 21st.dev จะ import จาก `@/components/ui/...` เสมอ จึงควรเก็บไว้ที่นี่

แบบฟอร์มติดต่อตอนนี้จะเปิดโปรแกรมอีเมลพร้อมข้อความที่กรอก (ไม่ต้องมีเซิร์ฟเวอร์) ถ้าต้องการรับข้อความเข้าระบบ ให้ต่อกับ Formspree หรือ API ใน `components/site/contact.tsx`
