import { useContent } from '../../context/ContentContext'
import PageBanner from '../../components/common/PageBanner'
import ScrollReveal from '../../components/common/ScrollReveal'

export default function History() {
  const { content } = useContent()

  return (
    <>
      <PageBanner
        title="회사연혁"
        subtitle="34년 동안 고객과 함께 걸어온 삼원종합물류의 자랑스러운 발자취를 소개합니다"
        backgroundImage="https://images.unsplash.com/photo-1553413077-190dd305871c?w=1920&q=80"
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#2B4C8C] font-semibold text-sm tracking-widest uppercase bg-[#2B4C8C]/5 px-3 py-1 rounded-full">History</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1A2F] mt-3">삼원의 34년 발자취</h2>
            <div className="w-16 h-1 bg-[#2B4C8C] mx-auto mt-4 rounded-full" />
            <p className="text-slate-500 text-sm mt-4">1992년 설립 이래 끊임없는 신뢰와 전문성으로 대한민국 물류 산업의 역사를 만들어 왔습니다.</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="timeline-line" />

            {content.history.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 100}>
                <div className={`relative flex items-start mb-12 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Year Badge */}
                  <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 z-10">
                    <div className="w-20 h-10 bg-[#2B4C8C] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                      {item.year}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 md:w-[calc(50%-40px)] ${
                    i % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
                  }`}>
                    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                      <ul className={`space-y-2 ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                        {item.events.map((event, j) => (
                          <li key={j} className="text-gray-600 text-sm leading-relaxed flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[#2B4C8C] rounded-full flex-shrink-0" />
                            {event}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
