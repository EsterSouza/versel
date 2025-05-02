"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { CtaButton } from "@/components/cta-button"

export function MobileBenefitsSection() {
  const [isVisible, ref] = useIntersectionObserver({
    rootMargin: "0px 0px -5% 0px",
    threshold: 0.01,
  })

  const benefits = [
    {
      title: "Documentação 100% Personalizada",
      description:
        "Cada documento é elaborado especificamente para seu estabelecimento, considerando suas particularidades e necessidades.",
    },
    {
      title: "Conformidade Garantida",
      description:
        "Documentação elaborada de acordo com as normas e legislações sanitárias vigentes, reduzindo riscos de autuações.",
    },
    {
      title: "Profissionais Especializados",
      description:
        "Equipe com experiência em vigilância sanitária e conhecimento técnico específico para cada tipo de estabelecimento.",
    },
    {
      title: "Entrega Rápida",
      description: "Receba sua documentação completa em tempo recorde, pronta para implementação imediata.",
    },
  ]

  return (
    <section id="beneficios" className="py-12 bg-navy-900" ref={ref}>
      <div className="container">
        <div className="mx-auto text-center mb-6">
          <h2 className="text-2xl font-bold mb-3 text-white">Por que escolher nossa documentação sanitária?</h2>
          <p className="text-base text-gray-300">
            Oferecemos soluções personalizadas que garantem conformidade e tranquilidade para seu estabelecimento.
          </p>
        </div>

        {/* Botão CTA no topo da seção */}
        <div className="flex justify-center mb-6">
          <CtaButton text="Adquirir Agora" className="w-full" />
        </div>

        <div className="relative h-[200px] rounded-xl overflow-hidden mb-6">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Benefícios da documentação sanitária"
            fill
            className="object-cover"
          />
        </div>

        <ul className="space-y-4 list-none pl-0 mb-6">
          {benefits.map((item, index) => (
            <li key={index} className="flex gap-3 mb-3">
              <CheckCircle className="h-5 w-5 text-pink-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold mb-1 text-white">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
