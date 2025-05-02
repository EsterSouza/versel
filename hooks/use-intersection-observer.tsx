"use client"

import { useEffect, useState, useRef, type RefObject } from "react"

interface UseIntersectionObserverProps {
  threshold?: number
  rootMargin?: string
  freezeOnceVisible?: boolean
}

export function useIntersectionObserver({
  threshold = 0.05, // Reduzido de 0.1 para 0.05 para detectar mais cedo
  rootMargin = "0px 0px -10% 0px", // Adicionado margin negativo para detectar antes de entrar completamente na viewport
  freezeOnceVisible = true,
}: UseIntersectionObserverProps = {}): [boolean, RefObject<HTMLDivElement>] {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Verificar se o IntersectionObserver é suportado
    if (!("IntersectionObserver" in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (freezeOnceVisible && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!freezeOnceVisible) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, rootMargin, freezeOnceVisible])

  return [isVisible, ref]
}
