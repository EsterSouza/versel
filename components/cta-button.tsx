"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import type { ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { usePurchaseForm } from "@/contexts/purchase-form-context"

interface CtaButtonProps extends ButtonProps {
  text?: string
  className?: string
  variant?: "primary" | "secondary" | "outline" | "white"
}

// Modificar a função CtaButton para abrir o formulário de compra
export function CtaButton({ text = "Quero Comprar Agora", className, variant = "primary", ...props }: CtaButtonProps) {
  const { openPurchaseForm } = usePurchaseForm()

  const getButtonClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-pink-600 hover:bg-pink-700 hover-glow animate-pulse-soft text-white"
      case "secondary":
        return "bg-navy-700 hover:bg-navy-600 text-white"
      case "outline":
        return "border-white text-white hover:bg-white/10 hover-lift"
      case "white":
        return "bg-white text-pink-700 hover:bg-gray-100 hover-glow"
      default:
        return "bg-pink-600 hover:bg-pink-700 hover-glow text-white"
    }
  }

  return (
    <Button
      size="lg"
      className={cn(getButtonClasses(), "group transition-all duration-300", className)}
      onClick={openPurchaseForm}
      {...props}
    >
      {text}
      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
    </Button>
  )
}
