"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { CtaButton } from "@/components/cta-button"

export function MobileHeroSection() {
  const [isVisible, ref] = useIntersectionObserver()

  return (
    <section id="hero" className="relative bg-gradient-to-r from-navy-800 to-navy-950 py-16 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500 rounded-full filter blur-3xl animate-float"></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600 rounded-full filter blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
      <div className="container flex flex-col items-center gap-6 relative">
        <div className="space-y-4 text-center">
          <div className="inline-block rounded-full bg-pink-500/10 px-3 py-1 text-sm text-pink-300 backdrop-blur-sm border border-pink-500/20">
            Documentação Sanitária Especializada
          </div>
          <h1 className="text-3xl font-bold text-white leading-tight">
            Documentação sanitária <span className="text-pink-500">personalizada</span> para seu estabelecimento
          </h1>
          <p className="text-base text-white/90">
            Elaboramos toda a documentação sanitária que seu estabelecimento precisa, garantindo conformidade com as
            normas.
          </p>
        </div>

        <div className="w-full">
          <div className="relative h-[250px] w-full hover-float">
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

        <div className="flex flex-col w-full gap-3">
          <CtaButton text="Quero Comprar Agora" className="w-full" />
          <Button size="lg" variant="outline" className="w-full border-white text-white hover:bg-white/10 hover-lift">
            Garantir Essa Oferta
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  )
}
