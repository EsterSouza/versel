"use client"

import { useState, useEffect } from "react"

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Função para verificar se o dispositivo é mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Verificar no carregamento inicial
    checkMobile()

    // Adicionar listener para redimensionamento da janela
    window.addEventListener("resize", checkMobile)

    // Limpar listener quando o componente for desmontado
    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  return isMobile
}
