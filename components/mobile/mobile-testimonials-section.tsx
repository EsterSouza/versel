"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { CtaButton } from "@/components/cta-button"

export function MobileTestimonialsSection() {
  const [isVisible, ref] = useIntersectionObserver()

  const testimonials = [
    {
      text: "A documentação elaborada foi fundamental para passarmos na fiscalização da Vigilância Sanitária. Tudo personalizado e de acordo com as normas. Recomendo!",
      name: "Dra. Ana Silva",
      role: "Clínica Odontológica",
    },
    {
      text: "Profissionalismo e qualidade impecáveis. Os documentos são claros, objetivos e totalmente adequados à realidade da nossa farmácia. Valeu cada centavo!",
      name: "Carlos Mendes",
      role: "Farmácia Popular",
    },
    {
      text: "Nossa ILPI estava com dificuldades para se adequar às normas sanitárias. Com a documentação personalizada, conseguimos regularizar tudo e hoje operamos com tranquilidade.",
      name: "Márcia Oliveira",
      role: "Residencial para Idosos",
    },
  ]

  return (
    <section id="depoimentos" className="py-12 bg-navy-800" ref={ref}>
      <div className="container">
        <div className="mx-auto text-center mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">O que nossos clientes dizem</h2>
          <p className="text-base text-gray-300">
            Veja como nossa documentação sanitária tem ajudado estabelecimentos de saúde em todo o Brasil.
          </p>
        </div>

        <div className="space-y-4">
          {testimonials.map((item, index) => (
            <Card key={index} className="border-none bg-navy-700 shadow-lg hover-lift">
              <CardContent className="pt-4 pb-4">
                <div className="flex items-center mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 text-pink-400 fill-pink-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-300 mb-4">"{item.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-pink-500/20 w-10 h-10 flex-shrink-0"></div>
                  <div>
                    <p className="font-bold text-white text-sm">{item.name}</p>
                    <p className="text-xs text-gray-400">{item.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <CtaButton text="Quero Estes Resultados" className="w-full" />
        </div>
      </div>
    </section>
  )
}
