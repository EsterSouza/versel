"use client"

import { Card, CardContent } from "@/components/ui/card"
import { FileText, ChevronRight } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { useMobile } from "@/hooks/use-mobile"
import { CtaButton } from "@/components/cta-button"
import { usePurchaseForm } from "@/contexts/purchase-form-context"
import { MobileAboutSection } from "@/components/mobile/mobile-about-section"

export function AboutSection() {
  const [isVisible, ref] = useIntersectionObserver({
    rootMargin: "0px 0px -5% 0px", // Detecta ainda mais cedo
    threshold: 0.01, // Threshold muito baixo para detectar assim que começar a aparecer
  })
  const isMobile = useMobile()
  const { openPurchaseForm } = usePurchaseForm()

  if (isMobile) {
    return <MobileAboutSection />
  }

  const services = [
    {
      title: "Clínicas Médicas",
      description:
        "Documentação completa para clínicas médicas, incluindo POPs, manuais e planos de gerenciamento de resíduos.",
      delay: 1,
    },
    {
      title: "Consultórios",
      description:
        "Documentação personalizada para consultórios médicos e odontológicos, atendendo às exigências específicas da vigilância sanitária.",
      delay: 2,
    },
    {
      title: "ILPIs",
      description:
        "Documentação especializada para Instituições de Longa Permanência para Idosos, atendendo às normas específicas do setor.",
      delay: 3,
    },
    {
      title: "Farmácias",
      description:
        "Documentação técnica para farmácias e drogarias, incluindo manuais de boas práticas e procedimentos operacionais.",
      delay: 4,
    },
    {
      title: "Estética",
      description:
        "Documentação para centros de estética e salões de beleza, garantindo conformidade com as normas sanitárias.",
      delay: 5,
    },
    {
      title: "Unidades Psiquiátricas",
      description:
        "Documentação especializada para unidades com internação psiquiátrica, atendendo às normas específicas e garantindo conformidade legal.",
      delay: 6,
    },
  ]

  return (
    <section id="sobre" className="py-16 md:py-24 bg-navy-900" ref={ref}>
      <div className="container">
        <div className={`max-w-3xl mx-auto text-center mb-12 reveal ${isVisible ? "active" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Soluções completas em documentação sanitária
          </h2>
          <p className="text-lg text-gray-300">
            Oferecemos elaboração de documentos sanitários personalizados para estabelecimentos de saúde, garantindo
            conformidade com as exigências da Vigilância Sanitária.
          </p>
        </div>

        <div id="servicos" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((item, index) => (
            <Card
              key={index}
              className={`border-none bg-navy-800 shadow-lg hover-lift reveal reveal-delay-${(index % 3) + 1}`}
            >
              <CardContent className="pt-6">
                <div className="rounded-full bg-pink-500/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-pink-500" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <div
                  className="text-pink-400 p-0 hover:text-pink-300 group flex items-center cursor-pointer"
                  onClick={openPurchaseForm}
                >
                  Comprar agora
                  <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <CtaButton text="Garantir Minha Documentação" />
        </div>
      </div>
    </section>
  )
}
