export function WhatsappButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20a%20documentação%20sanitária."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover-lift hover-glow transition-all duration-300 group"
        aria-label="Contato via WhatsApp"
      >
        <div className="absolute w-full h-full rounded-full bg-green-500 animate-ping opacity-30"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path
            d="M12 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm.029 18.88a7.947 7.947 0 0 1-3.76-.954l-4.17 1.094 1.116-4.063A7.9 7.9 0 0 1 4.11 12c0-4.368 3.582-7.95 7.95-7.95 4.367 0 7.95 3.582 7.95 7.95 0 4.367-3.583 7.95-7.95 7.95h-.03z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      </a>
      <div className="absolute bottom-20 right-0 bg-white text-gray-800 p-3 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-48 text-sm">
        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45"></div>
        <p className="font-medium">Precisa de ajuda?</p>
        <p className="text-xs mt-1">Clique para falar conosco pelo WhatsApp</p>
      </div>
    </div>
  )
}
