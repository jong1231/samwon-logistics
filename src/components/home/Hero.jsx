import { useState, useEffect } from 'react'
import { useContent } from '../../context/ContentContext'
import ScrollReveal from '../common/ScrollReveal'

// Import 4 generated truck scenes
import heroScene1 from '../../assets/hero_scene1.png'
import heroScene2 from '../../assets/hero_scene2.png'
import heroScene3 from '../../assets/hero_scene3.png'
import heroScene4 from '../../assets/hero_scene4.png'

/**
 * 4-Scene Cinematic Image Slideshow Hero Section
 * - Loops through 4 different views of the truck driving on the highway
 * - Changes every 5 seconds with a smooth cross-fade transition
 * - Each scene has a custom Ken Burns animation (slow pan/zoom) to feel like a video clip
 */
export default function Hero() {
  const { content } = useContent()
  const { hero } = content
  const [currentSlide, setCurrentSlide] = useState(0)

  // 4 Scenes definition
  const slides = [
    { image: heroScene1, animationClass: 'animate-kb-1' },
    { image: heroScene2, animationClass: 'animate-kb-2' },
    { image: heroScene3, animationClass: 'animate-kb-3' },
    { image: heroScene4, animationClass: 'animate-kb-4' }
  ]

  // Slide transition interval (5000ms = 5s)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Cinematic Slideshow */}
      <div className="absolute inset-0 w-full h-full z-0">
        {slides.map((slide, idx) => {
          const isActive = idx === currentSlide
          return (
            <div
              key={idx}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {/* Truck Image with Ken Burns animation */}
              <img
                src={slide.image}
                alt={`삼원종합물류 주행 화면 ${idx + 1}`}
                className={`w-full h-full object-cover select-none pointer-events-none ${
                  isActive ? slide.animationClass : ''
                }`}
                style={{ objectPosition: 'center 40%' }}
              />
            </div>
          )
        })}
      </div>

      {/* Cinematic Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/80 z-20" />

      {/* Cinematic letterbox bars */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-black/50 z-30" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-black/50 z-30" />

      {/* Slide Indicators / Navigation dots */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition-all duration-500 ${
              idx === currentSlide ? 'w-8 bg-[#2B4C8C]' : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`장면 ${idx + 1} 이동`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-30 text-center px-4 max-w-5xl mx-auto">
        <ScrollReveal delay={200}>
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white leading-tight tracking-wider drop-shadow-lg">
            {hero.title.split('\n').map((line, i) => (
              <span key={i} className="block">
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
              href="tel:02-598-3001"
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-30">
        <span className="text-slate-400 text-xs tracking-widest font-semibold">SCROLL</span>
        <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

