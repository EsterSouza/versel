interface SectionDividerProps {
  topColor: string
  bottomColor: string
  variant?: "curve" | "wave" | "diagonal" | "triangle" | "arrow"
  direction?: "top" | "bottom"
  className?: string
}

export function SectionDivider({
  topColor,
  bottomColor,
  variant = "curve",
  direction = "bottom",
  className = "",
}: SectionDividerProps) {
  // Diferentes padrões de SVG para cada variante
  const getPath = () => {
    switch (variant) {
      case "curve":
        return direction === "top"
          ? "M0,100 C300,0 700,0 1200,100 L1200,0 L0,0 Z"
          : "M0,0 C300,100 700,100 1200,0 L1200,100 L0,100 Z"
      case "wave":
        return direction === "top"
          ? "M0,100 C200,50 400,150 600,100 C800,50 1000,150 1200,100 L1200,0 L0,0 Z"
          : "M0,0 C200,50 400,-50 600,0 C800,50 1000,-50 1200,0 L1200,100 L0,100 Z"
      case "diagonal":
        return direction === "top" ? "M0,100 L1200,0 L1200,0 L0,0 Z" : "M0,0 L1200,100 L1200,100 L0,100 Z"
      case "triangle":
        return direction === "top"
          ? "M0,100 L600,0 L1200,100 L1200,0 L0,0 Z"
          : "M0,0 L600,100 L1200,0 L1200,100 L0,100 Z"
      case "arrow":
        return direction === "top"
          ? "M0,100 L500,0 L700,0 L1200,100 L1200,0 L0,0 Z"
          : "M0,0 L500,100 L700,100 L1200,0 L1200,100 L0,100 Z"
      default:
        return direction === "top"
          ? "M0,100 C300,0 700,0 1200,100 L1200,0 L0,0 Z"
          : "M0,0 C300,100 700,100 1200,0 L1200,100 L0,100 Z"
    }
  }

  return (
    <div className={`relative w-full h-12 md:h-24 ${className}`} style={{ backgroundColor: topColor }}>
      <svg
        className="absolute bottom-0 left-0 w-full h-full"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={getPath()} fill={bottomColor} />
      </svg>
    </div>
  )
}
