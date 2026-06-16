import { useContent } from '../context/ContentContext'
import PageBanner from '../components/common/PageBanner'
import ScrollReveal from '../components/common/ScrollReveal'

export default function Recruitment() {
  const { content } = useContent()
  const { recruitment } = content

  return (
    <>
      <PageBanner
        title="채용정보"
        subtitle={recruitment.subtitle}
        backgroundImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"
      />

      {/* 인재상 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-[#2B4C8C] font-semibold text-sm tracking-widest uppercase">We Want You</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1A2F] mt-3">인재상</h2>
              <div className="w-16 h-1 bg-[#2B4C8C] mx-auto mt-4 rounded-full" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recruitment.values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="bg-[#F5F7FA] rounded-2xl p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="text-4xl mb-4">{v.icon}</div>
                  <h3 className="text-xl font-bold text-[#0A1A2F] mb-2">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 채용 절차 */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1A2F]">채용 절차</h2>
              <div className="w-16 h-1 bg-[#2B4C8C] mx-auto mt-4 rounded-full" />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
              {recruitment.process.map((step, i) => (
                <div key={i} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-[#2B4C8C] text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                      {i + 1}
                    </div>
                    <span className="mt-3 font-semibold text-[#0A1A2F] text-sm">{step}</span>
                  </div>
                  {i < recruitment.process.length - 1 && (
                    <div className="hidden md:block w-16 h-0.5 bg-[#2B4C8C]/30 mx-2 mt-[-20px]" />
                  )}
                  {i < recruitment.process.length - 1 && (
                    <div className="md:hidden w-0.5 h-8 bg-[#2B4C8C]/30 my-1" />
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 모집 공고 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1A2F]">현재 모집 공고</h2>
              <div className="w-16 h-1 bg-[#2B4C8C] mx-auto mt-4 rounded-full" />
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {recruitment.openings.map((job, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-[#0A1A2F]">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <span className="px-3 py-1 bg-[#F5F7FA] text-gray-600 rounded-full text-xs">{job.dept}</span>
                      <span className="px-3 py-1 bg-blue-50 text-[#2B4C8C] rounded-full text-xs">{job.type}</span>
                      <span className="text-gray-400 text-xs flex items-center gap-1">📅 {job.deadline}</span>
                    </div>
                  </div>
                  <button className="px-6 py-2.5 bg-[#2B4C8C] hover:bg-[#243F75] text-white rounded-lg font-medium text-sm transition-colors whitespace-nowrap">
                    지원하기
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* 지원 문의 */}
          <ScrollReveal>
            <div className="mt-16 bg-[#F5F7FA] rounded-2xl p-8 md:p-12 text-center">
              <h3 className="text-xl font-bold text-[#0A1A2F] mb-3">지원 문의</h3>
              <p className="text-gray-500 mb-6">채용 관련 문의사항은 아래로 연락해주세요.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a href="mailto:hr@samwon.co.kr" className="flex items-center gap-2 text-[#2B4C8C] font-medium hover:underline">
                  <span>✉️</span> hr@samwon.co.kr
                </a>
                <a href="tel:02-1234-5678" className="flex items-center gap-2 text-[#2B4C8C] font-medium hover:underline">
                  <span>📞</span> 02-1234-5678 (인사팀)
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
