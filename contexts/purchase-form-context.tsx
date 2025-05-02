"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type EstablishmentType = "clinica" | "consultorio" | "ilpi" | "farmacia" | "estetica" | "psiquiatrica" | "outro"

interface FormData {
  nome: string
  email: string
  telefone: string
  estado: string
  municipio: string
  tipoEstabelecimento: string
  servicosRealizados?: string
  dataSubmissao?: string
}

interface PurchaseFormContextType {
  isOpen: boolean
  openPurchaseForm: () => void
  closePurchaseForm: () => void
  formData: FormData | null
  setFormData: (data: FormData) => void
}

const PurchaseFormContext = createContext<PurchaseFormContextType | undefined>(undefined)

export function PurchaseFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormDataState] = useState<FormData | null>(null)

  const openPurchaseForm = () => setIsOpen(true)
  const closePurchaseForm = () => setIsOpen(false)
  const setFormData = (data: FormData) => setFormDataState(data)

  return (
    <PurchaseFormContext.Provider value={{ isOpen, openPurchaseForm, closePurchaseForm, formData, setFormData }}>
      {children}
    </PurchaseFormContext.Provider>
  )
}

export function usePurchaseForm() {
  const context = useContext(PurchaseFormContext)
  if (context === undefined) {
    throw new Error("usePurchaseForm must be used within a PurchaseFormProvider")
  }
  return context
}
