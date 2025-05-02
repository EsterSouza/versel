"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { useMobile } from "@/hooks/use-mobile"
import { CtaButton } from "@/components/cta-button"
import { MobileBenefitsSection } from "@/components/mobile/mobile-benefits-section"

export function BenefitsSection() {
  const [isVisible, ref] = useIntersectionObserver({
    rootMargin: "0px 0px -5% 0px",
    threshold: 0.01,
  })
  const isMobile = useMobile()

  if (isMobile) {
    return <MobileBenefitsSection />
  }

  const benefits = [
    {
      title: "Documentação 100% Personalizada",
      description:
        "Cada documento é elaborado especificamente para seu estabelecimento, considerando suas particularidades e necessidades.",
      delay: 1,
    },
    {
      title: "Conformidade Garantida",
      description:
        "Documentação elaborada de acordo com as normas e legislações sanitárias vigentes, reduzindo riscos de autuações.",
      delay: 2,
    },
    {
      title: "Profissionais Especializados",
      description:
        "Equipe com experiência em vigilância sanitária e conhecimento técnico específico para cada tipo de estabelecimento.",
      delay: 3,
    },
    {
      title: "Entrega Rápida",
      description: "Receba sua documentação completa em tempo recorde, pronta para implementação imediata.",
      delay: 4,
    },
  ]

  return (
    <section id="beneficios" className="py-16 md:py-24 bg-navy-900" ref={ref}>
      <div className="container">
        <div className={`max-w-3xl mx-auto text-center mb-12 reveal ${isVisible ? "active" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Por que escolher nossa documentação sanitária?
          </h2>
          <p className="text-lg text-gray-300">
            Oferecemos soluções personalizadas que garantem conformidade e tranquilidade para seu estabelecimento.
          </p>
        </div>

        {/* Botão CTA no topo para ser visto mais cedo */}
        <div className="flex justify-center mb-12">
          <CtaButton text="Adquirir Agora" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            {benefits.map((item, index) => (
              <li key={index} className={`flex gap-4 mb-6 reveal reveal-delay-${(index % 3) + 1}`}>
                <CheckCircle className="h-6 w-6 text-pink-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </li>
            ))}
          </div>
          <div className={`relative h-[400px] rounded-xl overflow-hidden hover-lift reveal reveal-delay-1`}>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Benefícios da documentação sanitária"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
