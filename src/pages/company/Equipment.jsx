import { useContent } from '../../context/ContentContext'
import PageBanner from '../../components/common/PageBanner'
import ScrollReveal from '../../components/common/ScrollReveal'

export default function Equipment() {
  const { content } = useContent()
  const totalCount = content.equipment.reduce((sum, e) => sum + e.count, 0)

  return (
    <>
      <PageBanner
        title="장비 보유 현황"
        subtitle="삼원종합물류의 운송 장비를 소개합니다"
        backgroundImage="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=80"
      />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Total Summary */}
          <ScrollReveal>
            <div className="bg-gradient-to-r from-[#0A1A2F] to-[#2B4C8C] rounded-2xl p-8 md:p-12 text-center mb-16 shadow-xl">
              <p className="text-white/60 text-sm font-medium tracking-widest uppercase mb-2">Total Fleet</p>
              <div className="counter-number text-5xl md:text-7xl text-white mb-2">
                {totalCount}<span className="text-3xl text-white/60">대+</span>
              </div>
              <p className="text-white/50">다양한 차종의 차량과 장비를 보유하고 있습니다</p>
            </div>
          </ScrollReveal>

          {/* Equipment Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.equipment.map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-[#0A1A2F] mb-1">{item.type}</h3>
                  <div className="counter-number text-4xl font-extrabold text-[#2B4C8C] my-3">
                    {item.count}<span className="text-lg text-gray-400 ml-1">대</span>
                  </div>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
