"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollToSection from "@/components/scroll-to-section"
import { usePurchaseForm } from "@/contexts/purchase-form-context"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const { openPurchaseForm } = usePurchaseForm()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        className="text-white hover:bg-navy-800"
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <Menu size={24} />
      </Button>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeMenu}></div>}

      {/* Menu Slide-in */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-navy-900 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b border-navy-800">
            <span className="text-lg font-bold text-white">Menu</span>
            <Button variant="ghost" size="icon" className="text-white" onClick={closeMenu}>
              <X size={24} />
            </Button>
          </div>

          <nav className="flex flex-col p-4 space-y-4">
            <ScrollToSection
              href="#sobre"
              className="text-white hover:text-pink-400 transition-colors py-2 border-b border-navy-800"
              onClick={closeMenu}
            >
              Sobre
            </ScrollToSection>
            <ScrollToSection
              href="#servicos"
              className="text-white hover:text-pink-400 transition-colors py-2 border-b border-navy-800"
              onClick={closeMenu}
            >
              Serviços
            </ScrollToSection>
            <ScrollToSection
              href="#beneficios"
              className="text-white hover:text-pink-400 transition-colors py-2 border-b border-navy-800"
              onClick={closeMenu}
            >
              Benefícios
            </ScrollToSection>
            <ScrollToSection
              href="#depoimentos"
              className="text-white hover:text-pink-400 transition-colors py-2 border-b border-navy-800"
              onClick={closeMenu}
            >
              Depoimentos
            </ScrollToSection>
            <ScrollToSection
              href="#faq"
              className="text-white hover:text-pink-400 transition-colors py-2 border-b border-navy-800"
              onClick={closeMenu}
            >
              FAQ
            </ScrollToSection>
          </nav>

          <div className="mt-auto p-4">
            <Button
              className="w-full bg-pink-600 hover:bg-pink-700"
              onClick={() => {
                openPurchaseForm()
                closeMenu()
              }}
            >
              Comprar Agora
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
