"use client"

import type React from "react"

import type { ReactNode } from "react"

interface ScrollToSectionProps {
  href: string
  children: ReactNode
  className?: string
}

export default function ScrollToSection({ href, children, className = "" }: ScrollToSectionProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)

    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Ajuste para o header fixo
        behavior: "smooth",
      })

      // Atualiza a URL sem recarregar a página
      window.history.pushState({}, "", href)
    }
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
