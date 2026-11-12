import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface CtaProps {
  ctaEnabled: boolean
  text: string
  link: string
  variant?: NonNullable<ButtonProps["variant"]>
  className?: string
}

export function Cta({ cta }: { cta: CtaProps }) {
  const isLink = cta.variant === "link"
  const external = /^https?:\/\//.test(cta.link)
  return (
    <Button
      asChild
      variant={cta.variant ?? "default"}
      className={cn(isLink ? "h-auto px-0 text-foreground" : "rounded-full px-6", cta.className)}
    >
      <Link href={cta.link || "#"} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
        {cta.text}
        {isLink && <ArrowRight aria-hidden className="ml-1.5 size-4" />}
      </Link>
    </Button>
  )
}
