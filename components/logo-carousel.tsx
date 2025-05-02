"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function LogoCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, ref] = useIntersectionObserver()

  // Função para mover o carrossel com base no scroll
  useEffect(() => {
    if (!isVisible) return

    const handleScroll = () => {
      if (!containerRef.current) return

      const scrollPosition = window.scrollY
      const moveAmount = (scrollPosition * 0.1) % 100 // Ajuste a velocidade aqui

      containerRef.current.style.transform = `translateX(-${moveAmount}%)`
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isVisible])

  // Repetir o logo várias vezes para criar o efeito de carrossel
  const logos = Array(10).fill("/images/logo-loop.png")

  return (
    <div ref={ref} className="w-full bg-white py-8 overflow-hidden">
      <div
        ref={containerRef}
        className="flex items-center transition-transform duration-300 ease-linear"
        style={{ width: `${logos.length * 300}px` }}
      >
        {logos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 px-8">
            <Image
              src={logo || "/placeholder.svg"}
              alt="Pasta Sanitária"
              width={250}
              height={60}
              className="h-12 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
