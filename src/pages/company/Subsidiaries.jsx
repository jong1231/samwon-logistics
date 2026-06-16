import { useContent } from '../../context/ContentContext'
import PageBanner from '../../components/common/PageBanner'
import ScrollReveal from '../../components/common/ScrollReveal'

export default function Subsidiaries() {
  const { content } = useContent()

  return (
    <>
      <PageBanner
        title="계열사 현황"
        subtitle="삼원종합물류 그룹의 계열사를 소개합니다"
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
      />

      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.subsidiaries.map((sub, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center border-b-4 border-[#2B4C8C] h-full">
                  <div className="w-20 h-20 bg-[#F5F7FA] rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-3xl font-extrabold text-[#2B4C8C]">{sub.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0A1A2F] mb-2">{sub.name}</h3>
                  <p className="text-gray-500 text-sm">{sub.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
