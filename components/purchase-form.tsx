"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { usePurchaseForm } from "@/contexts/purchase-form-context"
import { Loader2 } from "lucide-react"

// Lista de estados brasileiros
const estados = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
]

// Tipos de estabelecimentos
const tiposEstabelecimento = [
  { value: "clinica", label: "Clínica Médica" },
  { value: "consultorio", label: "Consultório" },
  { value: "ilpi", label: "ILPI (Instituição de Longa Permanência para Idosos)" },
  { value: "farmacia", label: "Farmácia" },
  { value: "estetica", label: "Centro de Estética" },
  { value: "psiquiatrica", label: "Unidade Psiquiátrica" },
  { value: "outro", label: "Outro" },
]

// Tipos que requerem informações adicionais sobre serviços
const tiposComServicos = ["clinica", "consultorio", "estetica"]

export function PurchaseForm() {
  const { isOpen, closePurchaseForm } = usePurchaseForm()
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    estado: "",
    municipio: "",
    tipoEstabelecimento: "",
    servicosRealizados: "",
    dataSubmissao: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showServicos, setShowServicos] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  // Atualiza o campo de serviços quando o tipo de estabelecimento muda
  useEffect(() => {
    setShowServicos(tiposComServicos.includes(formData.tipoEstabelecimento))
    if (!tiposComServicos.includes(formData.tipoEstabelecimento)) {
      setFormData((prev) => ({ ...prev, servicosRealizados: "" }))
    }
  }, [formData.tipoEstabelecimento])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Função para salvar os dados (apenas para o administrador)
  const saveFormData = async (data: typeof formData) => {
    // Aqui você implementaria a lógica para salvar os dados em um servidor ou serviço
    console.log("Dados do formulário para lead:", data)

    // Em um ambiente real, você usaria fetch ou axios:
    /*
    try {
      const response = await fetch('https://sua-api.com/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Falha ao enviar dados');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      throw error;
    }
    */

    // Simulando um atraso de rede
    return new Promise((resolve) => setTimeout(() => resolve({ success: true }), 1000))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Adiciona a data e hora da submissão
      const now = new Date()
      const dataFormatada = now.toISOString().replace(/T/, " ").replace(/\..+/, "")

      const dadosCompletos = {
        ...formData,
        dataSubmissao: dataFormatada,
      }

      setFormData(dadosCompletos)

      // Salva os dados (apenas para o administrador)
      await saveFormData(dadosCompletos)

      // Marca como enviado com sucesso
      setFormSubmitted(true)

      // Aqui você pode adicionar a lógica para redirecionar para o checkout específico
      const checkoutUrls: Record<string, string> = {
        clinica: "/checkout/clinica",
        consultorio: "/checkout/consultorio",
        ilpi: "/checkout/ilpi",
        farmacia: "/checkout/farmacia",
        estetica: "/checkout/estetica",
        psiquiatrica: "/checkout/psiquiatrica",
        outro: "/checkout/geral",
      }

      console.log(`Redirecionando para: ${checkoutUrls[formData.tipoEstabelecimento] || "/checkout/geral"}`)
    } catch (error) {
      console.error("Erro ao processar o formulário:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleContinueToCheckout = () => {
    // Aqui você implementaria o redirecionamento real para o checkout
    closePurchaseForm()
  }

  return (
    <Dialog open={isOpen} onOpenChange={closePurchaseForm}>
      <DialogContent className="sm:max-w-[500px]">
        {!formSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center">Quase lá!</DialogTitle>
              <DialogDescription className="text-center">
                Preencha os dados abaixo para prosseguir com a compra da sua documentação sanitária personalizada.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome completo</Label>
                <Input
                  id="nome"
                  name="nome"
                  placeholder="Digite seu nome completo"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="telefone">Telefone</Label>
                <Input
                  id="telefone"
                  name="telefone"
                  placeholder="(00) 00000-0000"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="estado">Estado</Label>
                  <Select
                    onValueChange={(value) => handleSelectChange("estado", value)}
                    value={formData.estado}
                    required
                  >
                    <SelectTrigger id="estado">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      {estados.map((estado) => (
                        <SelectItem key={estado} value={estado}>
                          {estado}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="municipio">Município</Label>
                  <Input
                    id="municipio"
                    name="municipio"
                    placeholder="Sua cidade"
                    value={formData.municipio}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tipoEstabelecimento">Tipo de estabelecimento</Label>
                <Select
                  onValueChange={(value) => handleSelectChange("tipoEstabelecimento", value)}
                  value={formData.tipoEstabelecimento}
                  required
                >
                  <SelectTrigger id="tipoEstabelecimento">
                    <SelectValue placeholder="Selecione o tipo de estabelecimento" />
                  </SelectTrigger>
                  <SelectContent>
                    {tiposEstabelecimento.map((tipo) => (
                      <SelectItem key={tipo.value} value={tipo.value}>
                        {tipo.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {showServicos && (
                <div className="space-y-2 animate-fade-in">
                  <Label htmlFor="servicosRealizados">Quais serviços são realizados no seu estabelecimento?</Label>
                  <Textarea
                    id="servicosRealizados"
                    name="servicosRealizados"
                    placeholder="Descreva os principais serviços oferecidos no seu estabelecimento..."
                    value={formData.servicosRealizados}
                    onChange={handleChange}
                    className="min-h-[100px]"
                    required
                  />
                </div>
              )}

              <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processando...
                  </>
                ) : (
                  "Prosseguir para pagamento"
                )}
              </Button>
            </form>
          </>
        ) : (
          <div className="py-6 text-center">
            <div className="rounded-full bg-green-100 p-3 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green-600"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Dados recebidos com sucesso!</h3>
            <p className="text-gray-500 mb-6">
              Obrigado por fornecer suas informações. Agora você pode prosseguir para o pagamento.
            </p>

            <Button onClick={handleContinueToCheckout} className="bg-pink-600 hover:bg-pink-700">
              Continuar para pagamento
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
