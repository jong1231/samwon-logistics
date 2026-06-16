import { useContent } from '../../context/ContentContext'
import ScrollReveal from '../common/ScrollReveal'

export default function Hero() {
  const { content } = useContent()
  const { hero } = content

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={hero.image}
        alt="삼원종합물류"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />
      <div className="hero-overlay" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-8">
            <div className="w-2 h-2 bg-[#2B4C8C] rounded-full animate-pulse" />
            <span className="text-white/80 text-sm font-medium tracking-wide">삼원종합물류 SAMWON LOGISTICS</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight">
            {hero.title.split('\n').map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <p className="text-lg md:text-xl text-white/70 mt-6 max-w-2xl mx-auto leading-relaxed">
            {hero.subtitle.split('\n').map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={600}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:02-1234-5678"
              className="px-8 py-4 bg-[#2B4C8C] hover:bg-[#243F75] text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#2B4C8C]/30"
            >
              {hero.ctaText}
            </a>
            <a
              href="#business-preview"
              className="px-8 py-4 border border-white/30 hover:bg-white/10 text-white rounded-xl font-semibold text-lg transition-all duration-300"
            >
              사업영역 보기
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/40 text-xs tracking-widest">SCROLL</span>
        <svg className="w-5 h-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
