import { Link } from 'react-router-dom'
import { useContent } from '../../context/ContentContext'
import ScrollReveal from '../common/ScrollReveal'

export default function BusinessPreview() {
  const { content } = useContent()

  return (
    <section id="business-preview" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-[#2B4C8C] font-semibold text-sm tracking-widest uppercase">Business Areas</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1A2F] mt-3">사업영역</h2>
            <div className="w-16 h-1 bg-[#2B4C8C] mx-auto mt-4 rounded-full" />
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">체계적인 물류 시스템으로 고객의 성공적인 비즈니스를 지원합니다.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.businessAreas.map((area, i) => (
            <ScrollReveal key={area.id} delay={i * 150}>
              <Link
                to={area.link}
                className="group relative block h-72 md:h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
              >
                <img
                  src={area.image}
                  alt={area.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-[#2B4C8C]/0 group-hover:bg-[#2B4C8C]/20 transition-colors duration-500" />

                <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="text-2xl font-bold text-white mb-2">{area.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{area.desc}</p>
                  <div className="flex items-center gap-2 mt-4 text-white/60 group-hover:text-white transition-colors">
                    <span className="text-sm font-medium">자세히 보기</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
