"use client"

import { useEffect } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { VideoSection } from "@/components/sections/video-section"
import { BenefitsSection } from "@/components/sections/benefits-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { CtaSection } from "@/components/sections/cta-section"
import { FaqSection } from "@/components/sections/faq-section"
import { WhatsappButton } from "@/components/whatsapp-button"
import { LogoCarousel } from "@/components/logo-carousel"
import { SectionDivider } from "@/components/section-divider"
import { PurchaseFormProvider } from "@/contexts/purchase-form-context"
import { PurchaseForm } from "@/components/purchase-form"
import { CountdownTimer } from "@/components/countdown-timer"

export default function LandingPage() {
  // Função para animar elementos quando a página carrega
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal")

    // Verificar se o IntersectionObserver é suportado
    if (!("IntersectionObserver" in window)) {
      revealElements.forEach((element) => {
        element.classList.add("active")
      })
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
          }
        })
      },
      {
        threshold: 0.05, // Reduzido para detectar mais cedo
        rootMargin: "0px 0px -10% 0px", // Detecta antes de entrar completamente na viewport
      },
    )

    revealElements.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      revealElements.forEach((element) => {
        observer.unobserve(element)
      })
    }
  }, [])

  return (
    <PurchaseFormProvider>
      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1">
          <HeroSection />
          <div className="bg-navy-900 py-6">
            <div className="container">
              <CountdownTimer daysToAdd={3} />
            </div>
          </div>
          <LogoCarousel />
          <SectionDivider topColor="white" bottomColor="#0d1629" variant="curve" />
          <AboutSection />
          <SectionDivider topColor="#0d1629" bottomColor="#1a2c52" variant="wave" />
          <VideoSection />
          <SectionDivider topColor="#1a2c52" bottomColor="#0d1629" variant="diagonal" />
          <BenefitsSection />
          <SectionDivider topColor="#0d1629" bottomColor="#1a2c52" variant="triangle" />
          <TestimonialsSection />
          <SectionDivider topColor="#1a2c52" bottomColor="#ec4899" variant="arrow" />
          <CtaSection />
          <SectionDivider topColor="#ec4899" bottomColor="#0d1629" variant="wave" direction="top" />
          <FaqSection />
        </main>

        <Footer />
        <WhatsappButton />
        <PurchaseForm />
      </div>
    </PurchaseFormProvider>
  )
}
