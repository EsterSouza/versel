"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { useMobile } from "@/hooks/use-mobile"
import { CtaButton } from "@/components/cta-button"
import { MobileHeroSection } from "@/components/mobile/mobile-hero-section"

export function HeroSection() {
  const [isVisible, ref] = useIntersectionObserver()
  const isMobile = useMobile()

  if (isMobile) {
    return <MobileHeroSection />
  }

  return (
    <section
      id="hero"
      className="relative bg-gradient-to-r from-navy-800 to-navy-950 py-20 md:py-28 overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500 rounded-full filter blur-3xl animate-float"></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600 rounded-full filter blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
      <div className="container flex flex-col md:flex-row items-center gap-8 md:gap-12 relative">
        <div
          className={`space-y-6 md:w-1/2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-1000 ease-out`}
        >
          <div className="inline-block rounded-full bg-pink-500/10 px-3 py-1 text-sm text-pink-300 backdrop-blur-sm border border-pink-500/20">
            Documentação Sanitária Especializada
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Documentação sanitária <span className="text-pink-500">personalizada</span> para seu estabelecimento de
            saúde
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Elaboramos toda a documentação sanitária que seu estabelecimento precisa, garantindo conformidade com as
            normas e reduzindo riscos de autuações.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <CtaButton text="Quero Comprar Agora" />
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover-lift">
              Garantir Essa Oferta
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
        <div
          className={`md:w-1/2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-1000 ease-out delay-300`}
        >
          <div className="relative h-[350px] md:h-[500px] w-full hover-float">
            <Image
              src="/images/pasta-sanitaria.png"
              alt="Pasta Sanitária - Documentação sanitária profissional"
              fill
              className="object-contain transition-transform duration-500 hover:scale-105"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
