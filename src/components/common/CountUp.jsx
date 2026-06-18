import { useCountUp } from '../../hooks/useCountUp'

export default function CountUp({ end, suffix = '', label = '', duration = 2000 }) {
  const { ref, count } = useCountUp(end, duration)

  return (
    <div ref={ref} className="text-center">
      <div className="counter-number text-4xl md:text-5xl lg:text-6xl text-[#2B4C8C] mb-2 font-extrabold">
        {count.toLocaleString()}<span className="text-2xl md:text-3xl text-[#2B4C8C]/80 font-bold">{suffix}</span>
      </div>
      <div className="text-slate-600 text-sm md:text-base font-semibold">{label}</div>
    </div>
  )
}
