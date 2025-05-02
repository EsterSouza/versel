"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { useMobile } from "@/hooks/use-mobile"
import { CtaButton } from "@/components/cta-button"
import { MobileFaqSection } from "@/components/mobile/mobile-faq-section"

export function FaqSection() {
  const [isVisible, ref] = useIntersectionObserver()
  const isMobile = useMobile()

  if (isMobile) {
    return <MobileFaqSection />
  }

  const faqs = [
    {
      question: "Quanto tempo leva para elaborar a documentação?",
      answer:
        "O prazo varia de acordo com a complexidade e o tipo de estabelecimento, mas geralmente entregamos a documentação completa em 15 a 30 dias.",
      delay: 1,
    },
    {
      question: "A documentação é válida em todo o Brasil?",
      answer:
        "Sim, elaboramos a documentação de acordo com as normas federais e também consideramos as particularidades da legislação estadual e municipal do seu estabelecimento.",
      delay: 2,
    },
    {
      question: "Como recebo os documentos após a compra?",
      answer:
        "Após a compra, você receberá um formulário para preencher com as informações do seu estabelecimento. Com base nessas informações, elaboramos os documentos e enviamos em formato digital (PDF) para o seu e-mail.",
      delay: 3,
    },
    {
      question: "Como é feito o processo de elaboração da documentação?",
      answer:
        "Iniciamos com uma análise detalhada das informações do seu estabelecimento. Em seguida, elaboramos os documentos personalizados e realizamos revisões até a versão final, garantindo conformidade com as normas sanitárias.",
      delay: 4,
    },
  ]

  return (
    <section id="faq" className="py-16 md:py-24 bg-navy-900" ref={ref}>
      <div className="container">
        <div className={`max-w-3xl mx-auto text-center mb-16 reveal ${isVisible ? "active" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Perguntas Frequentes</h2>
          <p className="text-lg text-gray-300">Tire suas dúvidas sobre nossa documentação sanitária personalizada.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`border border-navy-700 bg-navy-800 rounded-lg p-6 hover-lift reveal reveal-delay-${item.delay}`}
            >
              <h3 className="text-xl font-bold mb-2 text-white">{item.question}</h3>
              <p className="text-gray-300">{item.answer}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 reveal reveal-delay-5">
          <CtaButton text="Aproveitar Essa Oportunidade" />
        </div>
      </div>
    </section>
  )
}
