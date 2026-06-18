import { useState, useEffect } from 'react'
import { useContent } from '../../context/ContentContext'
import ScrollReveal from '../common/ScrollReveal'

import heroFront from '../../assets/hero_scene_front.png'
import heroWide from '../../assets/hero_scene_wide.png'
import heroZoom from '../../assets/hero_scene_zoom.png'

const scenes = [
  { src: heroFront, alt: '삼원종합물류 정면 배송 운송' },
  { src: heroWide, alt: '광활한 고속도로를 달리는 삼원종합물류 트럭' },
  { src: heroZoom, alt: '삼원로고가 부착된 탑 부근 수송 줌인' },
]

export default function Hero() {
  const { content } = useContent()
  const { hero } = content
  const [currentScene, setCurrentScene] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % scenes.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Image Slider (Simulating Camera Movement) */}
      <div className="absolute inset-0 w-full h-full">
        {scenes.map((scene, index) => (
          <img
            key={index}
            src={scene.src}
            alt={scene.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-[2500ms] ease-in-out ${
              index === currentScene
                ? 'opacity-100 scale-110 z-0'
                : 'opacity-0 scale-100 -z-10'
            }`}
          />
        ))}
      </div>
      {/* Cinematic Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/45 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">

        <ScrollReveal delay={200}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight tracking-tight drop-shadow-md">
            {hero.title.split('\n').map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <p className="text-lg md:text-xl text-slate-200 font-medium mt-6 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
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
              href="tel:02-544-5678"
              className="px-8 py-4 bg-[#2B4C8C] hover:bg-[#1C325E] text-white rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#2B4C8C]/20"
            >
              {hero.ctaText}
            </a>
            <a
              href="#business-preview"
              className="px-8 py-4 border border-white/30 hover:border-white hover:bg-white/10 text-white rounded-xl font-bold text-lg transition-all duration-300"
            >
              사업영역 보기
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-slate-400 text-xs tracking-widest font-semibold">SCROLL</span>
        <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
