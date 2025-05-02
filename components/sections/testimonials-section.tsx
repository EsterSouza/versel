"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { useMobile } from "@/hooks/use-mobile"
import { CtaButton } from "@/components/cta-button"
import { MobileTestimonialsSection } from "@/components/mobile/mobile-testimonials-section"

export function TestimonialsSection() {
  const [isVisible, ref] = useIntersectionObserver()
  const isMobile = useMobile()

  if (isMobile) {
    return <MobileTestimonialsSection />
  }

  const testimonials = [
    {
      text: "A documentação elaborada foi fundamental para passarmos na fiscalização da Vigilância Sanitária. Tudo personalizado e de acordo com as normas. Recomendo!",
      name: "Dra. Ana Silva",
      role: "Clínica Odontológica",
      delay: 1,
    },
    {
      text: "Profissionalismo e qualidade impecáveis. Os documentos são claros, objetivos e totalmente adequados à realidade da nossa farmácia. Valeu cada centavo!",
      name: "Carlos Mendes",
      role: "Farmácia Popular",
      delay: 2,
    },
    {
      text: "Nossa ILPI estava com dificuldades para se adequar às normas sanitárias. Com a documentação personalizada, conseguimos regularizar tudo e hoje operamos com tranquilidade.",
      name: "Márcia Oliveira",
      role: "Residencial para Idosos",
      delay: 3,
    },
  ]

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-navy-800" ref={ref}>
      <div className="container">
        <div className={`max-w-3xl mx-auto text-center mb-16 reveal ${isVisible ? "active" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">O que nossos clientes dizem</h2>
          <p className="text-lg text-gray-300">
            Veja como nossa documentação sanitária tem ajudado estabelecimentos de saúde em todo o Brasil.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <Card
              key={index}
              className={`border-none bg-navy-700 shadow-lg hover-lift reveal reveal-delay-${item.delay}`}
            >
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-pink-400 fill-pink-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">"{item.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-pink-500/20 w-12 h-12"></div>
                  <div>
                    <p className="font-bold text-white">{item.name}</p>
                    <p className="text-sm text-gray-400">{item.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12 reveal reveal-delay-4">
          <CtaButton text="Quero Estes Resultados" />
        </div>
      </div>
    </section>
  )
}
