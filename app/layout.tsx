import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thongsuk Sawatnatee — Original Paintings",
  description: "View and buy original paintings by Thongsuk Sawatnatee — oils, watercolours and charcoal. Every piece is one of a kind. ชมและสั่งซื้อภาพวาดต้นฉบับ",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Sans+Thai:wght@400;500;600&family=Noto+Serif:wght@400;500&family=Noto+Serif+Thai:wght@400;500&display=swap"
        />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
