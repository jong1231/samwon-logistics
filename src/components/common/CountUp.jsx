import { useCountUp } from '../../hooks/useCountUp'

export default function CountUp({ end, suffix = '', label = '', duration = 2000 }) {
  const { ref, count } = useCountUp(end, duration)

  return (
    <div ref={ref} className="text-center">
      <div className="counter-number text-4xl md:text-5xl lg:text-6xl text-white mb-2">
        {count.toLocaleString()}<span className="text-2xl md:text-3xl text-white/80">{suffix}</span>
      </div>
      <div className="text-white/60 text-sm md:text-base font-medium">{label}</div>
    </div>
  )
}
