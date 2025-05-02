"use client"

import { FileText, Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react"
import ScrollToSection from "@/components/scroll-to-section"

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="opacity-0 animate-slide-up">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="h-6 w-6 text-pink-500" />
              <div className="flex flex-col">
                <span className="text-xl font-bold">Pasta Sanitária</span>
                <span className="text-xs text-gray-400">da Consultora Sanitária®</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Soluções completas em documentação sanitária para estabelecimentos de saúde.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/consultora.sanitaria"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors hover-scale"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://threads.net/@consultora.sanitaria"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors hover-scale"
                aria-label="Threads"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors hover-scale"
                aria-label="WhatsApp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm.029 18.88a7.947 7.947 0 0 1-3.76-.954l-4.17 1.094 1.116-4.063A7.9 7.9 0 0 1 4.11 12c0-4.368 3.582-7.95 7.95-7.95 4.367 0 7.95 3.582 7.95 7.95 0 4.367-3.583 7.95-7.95 7.95h-.03z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="opacity-0 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-pink-500" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-pink-500" />
                <span>contato@consultora-sanitaria.com.br</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-pink-500 mt-1" />
                <span>São Paulo/SP</span>
              </li>
            </ul>
          </div>
          <div className="opacity-0 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <ScrollToSection href="#sobre" className="text-gray-400 hover:text-pink-500 transition-colors">
                  Sobre Nós
                </ScrollToSection>
              </li>
              <li>
                <ScrollToSection href="#servicos" className="text-gray-400 hover:text-pink-500 transition-colors">
                  Serviços
                </ScrollToSection>
              </li>
              <li>
                <ScrollToSection href="#beneficios" className="text-gray-400 hover:text-pink-500 transition-colors">
                  Benefícios
                </ScrollToSection>
              </li>
              <li>
                <ScrollToSection href="#depoimentos" className="text-gray-400 hover:text-pink-500 transition-colors">
                  Depoimentos
                </ScrollToSection>
              </li>
              <li>
                <ScrollToSection href="#faq" className="text-gray-400 hover:text-pink-500 transition-colors">
                  FAQ
                </ScrollToSection>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="border-t border-navy-800 mt-12 pt-6 text-center text-gray-500 opacity-0 animate-slide-up"
          style={{ animationDelay: "0.6s" }}
        >
          <p>&copy; {new Date().getFullYear()} Pasta Sanitária. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
