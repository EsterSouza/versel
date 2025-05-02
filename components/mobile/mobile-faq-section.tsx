"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { CtaButton } from "@/components/cta-button"

export function MobileFaqSection() {
  const [isVisible, ref] = useIntersectionObserver()

  const faqs = [
    {
      question: "Quanto tempo leva para elaborar a documentação?",
      answer:
        "O prazo varia de acordo com a complexidade e o tipo de estabelecimento, mas geralmente entregamos a documentação completa em 15 a 30 dias.",
    },
    {
      question: "A documentação é válida em todo o Brasil?",
      answer:
        "Sim, elaboramos a documentação de acordo com as normas federais e também consideramos as particularidades da legislação estadual e municipal do seu estabelecimento.",
    },
    {
      question: "Como recebo os documentos após a compra?",
      answer:
        "Após a compra, você receberá um formulário para preencher com as informações do seu estabelecimento. Com base nessas informações, elaboramos os documentos e enviamos em formato digital (PDF) para o seu e-mail.",
    },
    {
      question: "Como é feito o processo de elaboração da documentação?",
      answer:
        "Iniciamos com uma análise detalhada das informações do seu estabelecimento. Em seguida, elaboramos os documentos personalizados e realizamos revisões até a versão final, garantindo conformidade com as normas sanitárias.",
    },
  ]

  return (
    <section id="faq" className="py-12 bg-navy-900" ref={ref}>
      <div className="container">
        <div className="mx-auto text-center mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">Perguntas Frequentes</h2>
          <p className="text-base text-gray-300">Tire suas dúvidas sobre nossa documentação sanitária personalizada.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div key={index} className="border border-navy-700 bg-navy-800 rounded-lg p-4 hover-lift">
              <h3 className="text-lg font-bold mb-2 text-white">{item.question}</h3>
              <p className="text-sm text-gray-300">{item.answer}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <CtaButton text="Aproveitar Essa Oportunidade" className="w-full" />
        </div>
      </div>
    </section>
  )
}
