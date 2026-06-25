import { useContent } from '../../context/ContentContext'
import PageBanner from '../../components/common/PageBanner'
import ScrollReveal from '../../components/common/ScrollReveal'

export default function Intro() {
  const { content } = useContent()
  const { company, ceo } = content

  // Filter out the parent company from subsidiaries list if present, to only show the requested 5 subsidiaries
  // Parent is "삼원종합물류(주)", children: 삼원운수(주), (주)서진물류, 동국상운(주), (주)에스원글로벌, (주)에스엘맨파워
  const targetSubsidiaries = content.subsidiaries.filter(
    (sub) => sub.name !== '삼원종합물류㈜' && sub.name !== '삼원종합물류(주)'
  )

  const profileItems = [
    { label: '회사명', value: company.name },
    { label: '대표이사', value: company.ceo },
    { label: '설립일', value: company.founded },
    { label: '사업자등록번호', value: company.bizNumber },
    { label: '대표번호', value: company.phone },
    { label: '팩스번호', value: company.fax },
    { label: '본사 주소', value: company.address },
    { label: '이천 차고지', value: company.garage },
  ]

  return (
    <>
      <PageBanner
        title="회사소개"
        subtitle="신뢰와 전문성으로 대한민국 물류의 미래를 선도하는 삼원종합물류(주)입니다."
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
      />

      {/* 회사 개요 (General Overview) */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-[#2B4C8C] font-semibold text-sm tracking-widest uppercase bg-[#2B4C8C]/5 px-3 py-1 rounded-full">
                Overview
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1A2F] mt-3">
                회사 개요
              </h2>
              <div className="w-16 h-1 bg-[#2B4C8C] mx-auto mt-4 rounded-full" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left" className="space-y-6">
              <h3 className="text-2xl font-bold text-[#0A1A2F] leading-snug">
                고객의 성공을 지원하는 <br />
                <span className="text-[#2B4C8C]">최상의 종합 물류 인프라</span>
              </h3>
              <p className="text-slate-600 leading-relaxed">
                삼원종합물류(주)는 1992년 설립 이후 지난 34년간 신뢰와 전문성을 바탕으로 전국 단위의 촘촘한 유통·기업 물류망을 구축해 왔습니다. 미들마일 수송부터 최종 라스트마일 배송, 창고 보관 서비스까지 끊김이 없는(Seamless) 원스톱 종합 물류 솔루션을 제공합니다.
              </p>
              <p className="text-slate-600 leading-relaxed">
                지속 가능한 친환경 전기·수소 화물차의 선제적 도입 및 스마트 WMS/TMS IT 기술 연동을 통해 탄소 배출 저감 및 투명한 화물 추적 서비스를 제공하여, 스마트 ESG 물류 생태계를 앞장서서 실천하고 있습니다.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" className="bg-[#F8FAFC] rounded-3xl p-8 border border-slate-100 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {profileItems.map((item, index) => (
                  <div key={index} className={`pb-4 border-b border-slate-200/60 ${index >= 6 ? 'sm:col-span-2' : ''}`}>
                    <span className="text-xs font-bold text-slate-400 block mb-1">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-slate-700 leading-relaxed">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CEO 인사말 */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-[#2B4C8C] font-semibold text-sm tracking-widest uppercase bg-[#2B4C8C]/5 px-3 py-1 rounded-full">
                CEO Message
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1A2F] mt-3">
                대표이사 인사말
              </h2>
              <div className="w-16 h-1 bg-[#2B4C8C] mx-auto mt-4 rounded-full" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* CEO Photo */}
            <ScrollReveal direction="left" className="lg:col-span-2">
              <div className="relative max-w-sm mx-auto">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#2B4C8C]/20 to-[#2F2A6E]/10 rounded-3xl" />
                <img
                  src={ceo.photo}
                  alt={`${ceo.name} ${ceo.title}`}
                  className="relative w-full aspect-[3/4] object-cover rounded-3xl shadow-xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-[#2B4C8C] text-white px-6 py-3 rounded-xl shadow-lg">
                  <div className="font-bold text-lg">{ceo.name}</div>
                  <div className="text-white/70 text-xs">{ceo.title}</div>
                </div>
              </div>
            </ScrollReveal>

            {/* CEO Message Content */}
            <ScrollReveal direction="right" className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-10 bg-[#2B4C8C] rounded-full" />
                <h3 className="text-xl font-bold text-[#0A1A2F]">안녕하십니까. 삼원종합물류 대표이사 정종혁입니다.</h3>
              </div>

              <div className="text-slate-600 leading-loose text-sm space-y-4">
                {ceo.message.split('\n').map((paragraph, i) => (
                  <p key={i} className={paragraph === '' ? 'h-2' : ''}>
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-slate-200/80 text-right">
                <p className="text-[#2B4C8C] font-extrabold text-lg">{company.name}</p>
                <p className="text-slate-500 text-xs mt-1">대표이사 <span className="font-bold text-[#0A1A2F] text-sm">{ceo.name}</span></p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 계열사 현황 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-[#2B4C8C] font-semibold text-sm tracking-widest uppercase bg-[#2B4C8C]/5 px-3 py-1 rounded-full">
                Subsidiaries
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1A2F] mt-3">
                계열사 현황
              </h2>
              <div className="w-16 h-1 bg-[#2B4C8C] mx-auto mt-4 rounded-full" />
              <p className="text-slate-500 text-sm mt-4">각 물류 분야별 전문 역량을 갖추어 최상의 통합 시너지를 창출합니다.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {targetSubsidiaries.map((sub, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-[#F8FAFC] rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full border border-slate-100 hover:border-[#2B4C8C]/30 text-center">
                  <h4 className="text-[17px] font-extrabold text-[#2B4C8C] mb-3">
                    {sub.name}
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed flex-1">
                    {sub.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
