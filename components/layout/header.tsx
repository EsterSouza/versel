"use client"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import ScrollToSection from "@/components/scroll-to-section"
import { useMobile } from "@/hooks/use-mobile"
import { usePurchaseForm } from "@/contexts/purchase-form-context"
import { MobileMenu } from "@/components/mobile/mobile-menu"

export function Header() {
  const isMobile = useMobile()
  const { openPurchaseForm } = usePurchaseForm()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-navy-900 backdrop-blur-md bg-opacity-90">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="h-6 w-6 text-pink-500" />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-white">Pasta Sanitária</span>
            <span className="text-xs text-gray-300">da Consultora Sanitária®</span>
          </div>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-6">
          <ScrollToSection
            href="#sobre"
            className="text-sm font-medium text-white hover:text-pink-400 transition-colors"
          >
            Sobre
          </ScrollToSection>
          <ScrollToSection
            href="#servicos"
            className="text-sm font-medium text-white hover:text-pink-400 transition-colors"
          >
            Serviços
          </ScrollToSection>
          <ScrollToSection
            href="#beneficios"
            className="text-sm font-medium text-white hover:text-pink-400 transition-colors"
          >
            Benefícios
          </ScrollToSection>
          <ScrollToSection
            href="#depoimentos"
            className="text-sm font-medium text-white hover:text-pink-400 transition-colors"
          >
            Depoimentos
          </ScrollToSection>
          <ScrollToSection href="#faq" className="text-sm font-medium text-white hover:text-pink-400 transition-colors">
            FAQ
          </ScrollToSection>
        </nav>

        {/* Botão CTA Desktop */}
        <div className="hidden md:block">
          <Button className="bg-pink-600 hover:bg-pink-700 hover-glow" onClick={openPurchaseForm}>
            Comprar Agora
          </Button>
        </div>

        {/* Menu Mobile */}
        <MobileMenu />
      </div>
    </header>
  )
}
