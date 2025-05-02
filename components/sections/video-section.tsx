"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { useMobile } from "@/hooks/use-mobile"
import { CtaButton } from "@/components/cta-button"
import { MobileVideoSection } from "@/components/mobile/mobile-video-section"

export function VideoSection() {
  const [isVisible, ref] = useIntersectionObserver()
  const isMobile = useMobile()

  if (isMobile) {
    return <MobileVideoSection />
  }

  return (
    <section className="py-16 bg-navy-800" ref={ref}>
      <div className="container">
        <div className={`max-w-3xl mx-auto text-center mb-12 reveal ${isVisible ? "active" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Conheça nossa metodologia</h2>
          <p className="text-lg text-gray-300">
            Entenda como nosso processo de trabalho garante documentação de qualidade e conformidade com as normas
            sanitárias.
          </p>
        </div>

        <div
          className={`relative mx-auto max-w-4xl h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-xl bg-navy-700 flex items-center justify-center hover-lift reveal reveal-delay-2 ${isVisible ? "active" : ""}`}
        >
          <div className="text-center">
            <div className="rounded-full bg-pink-500/20 p-6 mx-auto mb-4 w-20 h-20 flex items-center justify-center hover-scale">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-pink-500"
              >
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
            <p className="text-gray-300 font-medium">Vídeo em breve</p>
          </div>
        </div>

        <div className="flex justify-center mt-12 reveal reveal-delay-3">
          <CtaButton text="Garantir Minha Documentação" />
        </div>
      </div>
    </section>
  )
}
