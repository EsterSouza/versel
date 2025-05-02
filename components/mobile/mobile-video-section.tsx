"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { CtaButton } from "@/components/cta-button"

export function MobileVideoSection() {
  const [isVisible, ref] = useIntersectionObserver()

  return (
    <section className="py-12 bg-navy-800" ref={ref}>
      <div className="container">
        <div className="mx-auto text-center mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">Conheça nossa metodologia</h2>
          <p className="text-base text-gray-300">
            Entenda como nosso processo de trabalho garante documentação de qualidade e conformidade com as normas
            sanitárias.
          </p>
        </div>

        <div className="relative mx-auto h-[200px] rounded-xl overflow-hidden shadow-xl bg-navy-700 flex items-center justify-center">
          <div className="text-center">
            <div className="rounded-full bg-pink-500/20 p-4 mx-auto mb-3 w-14 h-14 flex items-center justify-center hover-scale">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
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
            <p className="text-gray-300 text-sm font-medium">Vídeo em breve</p>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <CtaButton text="Garantir Minha Documentação" className="w-full" />
        </div>
      </div>
    </section>
  )
}
