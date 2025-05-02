"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { CtaButton } from "@/components/cta-button"
import { usePurchaseForm } from "@/contexts/purchase-form-context"

export function MobileCtaSection() {
  const [isVisible, ref] = useIntersectionObserver()
  const { openPurchaseForm } = usePurchaseForm()

  return (
    <section className="py-12 bg-gradient-to-r from-pink-700 to-pink-900 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-72 h-72 bg-white rounded-full filter blur-3xl animate-float"></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
      <div className="container relative">
        <div className="mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Garanta a conformidade sanitária do seu estabelecimento hoje mesmo
          </h2>
          <p className="text-base text-white/90 mb-6">
            Adquira sua documentação personalizada e dê o primeiro passo para a tranquilidade nas fiscalizações.
          </p>
          <div className="flex flex-col gap-3">
            <CtaButton variant="white" text="Garantir Essa Oferta" className="w-full" />
            <Button
              size="lg"
              variant="outline"
              className="w-full border-white text-white hover:bg-white/10 hover-lift group"
              onClick={openPurchaseForm}
            >
              Comprar Agora
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
