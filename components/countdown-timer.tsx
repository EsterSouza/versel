"use client"

import { useState, useEffect } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { useMobile } from "@/hooks/use-mobile"

interface CountdownTimerProps {
  endDate?: Date
  daysToAdd?: number
  className?: string
}

export function CountdownTimer({ endDate, daysToAdd = 3, className = "" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [isVisible, ref] = useIntersectionObserver()
  const isMobile = useMobile()

  useEffect(() => {
    // Se não for fornecida uma data final, define para 3 dias a partir de agora
    const targetDate = endDate || new Date(Date.now() + daysToAdd * 24 * 60 * 60 * 1000)

    const interval = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [endDate, daysToAdd])

  const timeBoxClass = isMobile
    ? "w-16 h-16 bg-navy-800 rounded-lg flex flex-col items-center justify-center shadow-lg"
    : "w-24 h-24 bg-navy-800 rounded-lg flex flex-col items-center justify-center shadow-lg"

  const timeValueClass = isMobile ? "text-2xl font-bold text-white" : "text-3xl font-bold text-white"

  const timeLabelClass = isMobile ? "text-xs text-gray-400" : "text-sm text-gray-400"

  return (
    <div ref={ref} className={`${className}`}>
      <div className="text-center mb-4">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Oferta por tempo limitado!</h3>
        <p className="text-gray-300 text-sm md:text-base">Essa promoção termina em:</p>
      </div>

      <div className="flex justify-center gap-2 md:gap-4">
        <div className={timeBoxClass}>
          <span className={timeValueClass}>{timeLeft.days}</span>
          <span className={timeLabelClass}>Dias</span>
        </div>
        <div className={timeBoxClass}>
          <span className={timeValueClass}>{timeLeft.hours}</span>
          <span className={timeLabelClass}>Horas</span>
        </div>
        <div className={timeBoxClass}>
          <span className={timeValueClass}>{timeLeft.minutes}</span>
          <span className={timeLabelClass}>Min</span>
        </div>
        <div className={timeBoxClass}>
          <span className={timeValueClass}>{timeLeft.seconds}</span>
          <span className={timeLabelClass}>Seg</span>
        </div>
      </div>
    </div>
  )
}
