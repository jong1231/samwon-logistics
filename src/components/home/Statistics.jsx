import { useContent } from '../../context/ContentContext'
import CountUp from '../common/CountUp'
import ScrollReveal from '../common/ScrollReveal'

export default function Statistics() {
  const { content } = useContent()

  return (
    <section className="relative py-24 bg-white overflow-hidden border-t border-slate-100">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2B4C8C] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2F2A6E] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-[#2B4C8C] font-semibold text-sm tracking-widest uppercase">Performance</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-3">삼원의 핵심 지표</h2>
            <div className="w-16 h-1 bg-[#2B4C8C] mx-auto mt-4 rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {content.statistics.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 200}>
              <div className="relative">
                <CountUp end={stat.number} suffix={stat.suffix} label={stat.label} />
                {i < content.statistics.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 w-px h-16 -translate-y-1/2 bg-slate-200" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
