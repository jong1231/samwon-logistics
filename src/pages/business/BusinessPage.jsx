import { useContent } from '../../context/ContentContext'
import PageBanner from '../../components/common/PageBanner'
import ScrollReveal from '../../components/common/ScrollReveal'

/**
 * 사업영역 공통 페이지 컴포넌트
 * contentKey를 받아 해당 사업 영역의 데이터를 표시
 */
export default function BusinessPage({ contentKey }) {
  const { content } = useContent()
  const data = content.businessPages[contentKey]

  if (!data) return null

  return (
    <>
      <PageBanner
        title={data.title}
        subtitle="삼원종합물류의 전문 물류 서비스"
        backgroundImage={data.bannerImage}
      />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview */}
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center mb-20">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-0.5 bg-[#2B4C8C] rounded-full" />
                <span className="text-[#2B4C8C] font-semibold text-sm tracking-widest uppercase">Service Overview</span>
                <div className="w-12 h-0.5 bg-[#2B4C8C] rounded-full" />
              </div>
              <p className="text-gray-600 text-lg leading-loose">{data.overview}</p>
            </div>
          </ScrollReveal>

          {/* Strengths */}
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A1A2F]">핵심 강점</h2>
              <div className="w-16 h-1 bg-[#2B4C8C] mx-auto mt-4 rounded-full" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-20">
            {data.strengths.map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-[#F5F7FA] rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm group-hover:shadow-md transition-shadow flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0A1A2F] mb-2">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Related Image */}
          <ScrollReveal>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F]/60 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-white font-bold text-2xl">{data.title}</p>
                <p className="text-white/60 text-sm mt-1">삼원종합물류</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
