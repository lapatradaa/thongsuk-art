import { SiteHeader } from "@/components/site/site-header"
import { Hero } from "@/components/site/hero"
import { GalleryWall } from "@/components/site/gallery-wall"
import { ArtworkGrid } from "@/components/site/artwork-grid"
import { About } from "@/components/site/about"
import { HowToBuy } from "@/components/site/how-to-buy"
import { Contact } from "@/components/site/contact"
import { SiteFooter } from "@/components/site/site-footer"
import { InquiryProvider } from "@/components/site/inquiry-context"
import { LanguageProvider } from "@/lib/i18n"

export default function Home() {
  return (
    <LanguageProvider>
      <InquiryProvider>
        <div id="top" />
        <SiteHeader />
        <main className="flex-1">
          <Hero />
          <GalleryWall />
          <ArtworkGrid />
          <About />
          <HowToBuy />
          <Contact />
        </main>
        <SiteFooter />
      </InquiryProvider>
    </LanguageProvider>
  )
}
