// Função para converter objeto em CSV
export function objectToCSV(data: Record<string, any>): string {
  const headers = Object.keys(data).join(",")
  const values = Object.values(data)
    .map((value) => {
      // Escapa aspas e adiciona aspas ao redor de strings
      if (typeof value === "string") {
        return `"${value.replace(/"/g, '""')}"`
      }
      return value
    })
    .join(",")

  return `${headers}\n${values}`
}

// Função para converter array de objetos em CSV
export function arrayToCSV(data: Record<string, any>[]): string {
  if (data.length === 0) return ""

  const headers = Object.keys(data[0]).join(",")
  const rows = data.map((row) =>
    Object.values(row)
      .map((value) => {
        if (typeof value === "string") {
          return `"${value.replace(/"/g, '""')}"`
        }
        return value
      })
      .join(","),
  )

  return [headers, ...rows].join("\n")
}

// Função para baixar CSV
export function downloadCSV(csvContent: string, filename: string): void {
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")

  link.setAttribute("href", url)
  link.setAttribute("download", filename)
  link.style.visibility = "hidden"

  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

// Função para salvar dados do formulário em CSV
export function saveFormDataToCSV(formData: Record<string, any>): void {
  const csvContent = objectToCSV(formData)
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-")
  const filename = `lead_${formData.nome?.replace(/\s+/g, "_") || "cliente"}_${timestamp}.csv`

  downloadCSV(csvContent, filename)
}
