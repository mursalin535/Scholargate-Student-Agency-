import { useRef, useEffect, type ComponentPropsWithoutRef } from 'react'
import { cn } from "@/lib/utils"

interface NumberTickerProps extends ComponentPropsWithoutRef<"span"> {
  value: number
  startValue?: number
  direction?: "up" | "down"
  delay?: number
  decimalPlaces?: number
  duration?: number
}

export function NumberTicker({ value, startValue = 0, direction = "up", delay = 0,
  className, decimalPlaces = 0, duration = 2, ...props }: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null)

  const format = (n: number) =>
    Intl.NumberFormat("en-US", {
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces,
    }).format(Number(n.toFixed(decimalPlaces)))

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const from = direction === "down" ? value : startValue
    const to   = direction === "down" ? startValue : value
    let rafId: number
    let timeouts: ReturnType<typeof setTimeout>[] = []

    const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))

    const cycle = () => {
      el.textContent = format(from)
      const durationMs = duration * 4000

      const t1 = setTimeout(() => {
        let start: number | null = null

        const frame = (ts: number) => {
          if (!start) start = ts
          const progress = Math.min((ts - start) / durationMs, 1)
          el.textContent = format(from + (to - from) * easeOutExpo(progress))
          if (progress < 1) rafId = requestAnimationFrame(frame)
          else {
            // pause 1 s, then snap back and restart
            const t2 = setTimeout(() => {
              el.textContent = format(from)
              const t3 = setTimeout(cycle, 50)
              timeouts.push(t3)
            }, 1000)
            timeouts.push(t2)
          }
        }

        rafId = requestAnimationFrame(frame)
      }, delay * 1000)

      timeouts.push(t1)
    }

    cycle()

    return () => {
      cancelAnimationFrame(rafId)
      timeouts.forEach(clearTimeout)
    }
  }, [value, startValue, direction, delay, duration, decimalPlaces])

  return (
    <span ref={ref}
      className={cn("inline-block tracking-wider text-black tabular-nums dark:text-white", className)}
      {...props}>
      {format(direction === "down" ? value : startValue)}
    </span>
  )
}