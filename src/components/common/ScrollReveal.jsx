import { useRef, useEffect } from 'react'

export default function ScrollReveal({ children, direction = 'up', delay = 0, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.style.transitionDelay = `${delay}ms`

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('active')
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  const directionClass = {
    up: 'reveal',
    left: 'reveal-left',
    right: 'reveal-right',
    fade: 'reveal',
  }

  return (
    <div ref={ref} className={`${directionClass[direction] || 'reveal'} ${className}`}>
      {children}
    </div>
  )
}
