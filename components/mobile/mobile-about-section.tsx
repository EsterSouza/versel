"use client"

import { Card, CardContent } from "@/components/ui/card"
import { FileText, ChevronRight } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { CtaButton } from "@/components/cta-button"
import { usePurchaseForm } from "@/contexts/purchase-form-context"

export function MobileAboutSection() {
  const [isVisible, ref] = useIntersectionObserver({
    rootMargin: "0px 0px -5% 0px", // Detecta ainda mais cedo
    threshold: 0.01, // Threshold muito baixo para detectar assim que começar a aparecer
  })
  const { openPurchaseForm } = usePurchaseForm()

  const services = [
    {
      title: "Clínicas Médicas",
      description:
        "Documentação completa para clínicas médicas, incluindo POPs, manuais e planos de gerenciamento de resíduos.",
    },
    {
      title: "Consultórios",
      description:
        "Documentação personalizada para consultórios médicos e odontológicos, atendendo às exigências específicas da vigilância sanitária.",
    },
    {
      title: "ILPIs",
      description:
        "Documentação especializada para Instituições de Longa Permanência para Idosos, atendendo às normas específicas do setor.",
    },
    {
      title: "Farmácias",
      description:
        "Documentação técnica para farmácias e drogarias, incluindo manuais de boas práticas e procedimentos operacionais.",
    },
    {
      title: "Estética",
      description:
        "Documentação para centros de estética e salões de beleza, garantindo conformidade com as normas sanitárias.",
    },
    {
      title: "Unidades Psiquiátricas",
      description:
        "Documentação especializada para unidades com internação psiquiátrica, atendendo às normas específicas e garantindo conformidade legal.",
    },
  ]

  return (
    <section id="sobre" className="py-12 bg-navy-900" ref={ref}>
      <div className="container">
        <div className="mx-auto text-center mb-6">
          <h2 className="text-2xl font-bold mb-3 text-white">Soluções completas em documentação sanitária</h2>
          <p className="text-base text-gray-300">
            Oferecemos elaboração de documentos sanitários personalizados para estabelecimentos de saúde.
          </p>
        </div>

        {/* Botão CTA no topo da seção para ser visto mais cedo */}
        <div className="flex justify-center mb-6">
          <CtaButton text="Garantir Minha Documentação" className="w-full" />
        </div>

        <div id="servicos" className="grid grid-cols-1 gap-4 mt-6">
          {services.map((item, index) => (
            <Card key={index} className="border-none bg-navy-800 shadow-lg hover-lift">
              <CardContent className="pt-4 pb-4">
                <div className="flex items-start">
                  <div className="rounded-full bg-pink-500/10 p-2 w-10 h-10 flex items-center justify-center mr-3 flex-shrink-0">
                    <FileText className="h-5 w-5 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-white">{item.title}</h3>
                    <p className="text-sm text-gray-300 mb-2">{item.description}</p>
                    <div
                      className="text-pink-400 p-0 hover:text-pink-300 group flex items-center cursor-pointer text-sm"
                      onClick={openPurchaseForm}
                    >
                      Comprar agora
                      <ChevronRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
