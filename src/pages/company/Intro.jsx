import { useState } from 'react'
import { useContent } from '../../context/ContentContext'
import PageBanner from '../../components/common/PageBanner'
import ScrollReveal from '../../components/common/ScrollReveal'

export default function Intro() {
  const { content } = useContent()
  const { company, ceo } = content
  const [filter, setFilter] = useState('all')
  const [copiedIndex, setCopiedIndex] = useState(null)

  // Filter out the parent company from subsidiaries list if present, to only show the requested 5 subsidiaries
  // Parent is "삼원종합물류(주)", children: 삼원운수(주), (주)서진물류, 동국상운(주), (주)에스원글로벌, (주)에스엘맨파워
  const targetSubsidiaries = content.subsidiaries.filter(
    (sub) => sub.name !== '삼원종합물류㈜' && sub.name !== '삼원종합물류(주)'
  )

  const offices = content.offices || [
    { name: '서울 본사', address: '서울시 서초구 효령로 328 아트리트21 6층' },
    { name: '인천 스마트허브', address: '인천광역시 서구 북항단지로 91 스마트허브센터' },
    { name: '남이천 물류센터', address: '경기도 이천시 모가면 공원로 134 B동 남이천 물류센터' },
    { name: '부산 사무소', address: '부산광역시 동구' },
    { name: '현대백화점 압구정본점', address: '서울시 강남구 압구정로 165 현대백화점압구정본점 지하 1층' },
    { name: '현대백화점 신촌점', address: '서울시 서대문구 신촌로 83 현대백화점신촌점 지하 5층' },
    { name: '더현대 서울', address: '서울시 영등포구 여의대로 108 더현대 서울 지하3층' },
    { name: '현대백화점 킨텍스점', address: '경기도 고양시 일산서구 호수로 817 현대백화점킨텍스점 지하3층' },
    { name: '이천 율면 사무소', address: '경기도 이천시 율면' },
    { name: '이천 석산리 사무소', address: '경기도 이천시 석산리' }
  ]

  const getOfficeCategory = (name) => {
    if (name.includes('본사')) return { label: '본사 (HQ)', type: 'main', color: 'blue', icon: '🏢' }
    if (name.includes('물류센터') || name.includes('스마트허브') || name.includes('허브')) return { label: '물류 거점', type: 'main', color: 'emerald', icon: '📦' }
    if (name.includes('백화점') || name.includes('더현대') || name.includes('현대')) return { label: '백화점 유통망', type: 'retail', color: 'amber', icon: '🛍️' }
    return { label: '지역 사무소', type: 'local', color: 'indigo', icon: '📍' }
  }

  const handleCopyAddress = (address, index) => {
    navigator.clipboard.writeText(address).then(() => {
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    })
  }

  const filteredOffices = offices.filter(office => {
    if (filter === 'all') return true
    const cat = getOfficeCategory(office.name)
    return cat.type === filter
  })

  return (
    <>
      <PageBanner
        title="회사소개"
        subtitle="34년간 축적한 현장 역량과 6개 전문 계열사의 통합 인프라로 대한민국 공급망을 설계합니다."
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

          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0A1A2F] leading-snug whitespace-pre-wrap">
                {company.overviewTitle ? (
                  company.overviewTitle.split('\n').map((line, idx) => (
                    <span key={idx}>
                      {line}
                      {idx < company.overviewTitle.split('\n').length - 1 && <br />}
                    </span>
                  ))
                ) : (
                  <>
                    고객의 성공을 지원하는 <br />
                    <span className="text-[#2B4C8C]">최상의 종합 물류 인프라</span>
                  </>
                )}
              </h3>
              {company.overviewDesc ? (
                company.overviewDesc.split('\n').map((paragraph, idx) => (
                  <p key={idx} className="text-slate-600 leading-relaxed text-base md:text-lg whitespace-pre-wrap">
                    {paragraph}
                  </p>
                ))
              ) : (
                <>
                  <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                    삼원종합물류(주)는 1992년 설립 이후 지난 34년간 신뢰와 전문성을 바탕으로 전국 단위의 촘촘한 유통·기업 물류망을 구축해 왔습니다. 미들마일 수송부터 최종 라스트마일 배송, 창고 보관 서비스까지 끊김이 없는(Seamless) 원스톱 종합 물류 솔루션을 제공합니다.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                    지속 가능한 친환경 전기·수소 화물차의 선제적 도입 및 스마트 WMS/TMS IT 기술 연동을 통해 탄소 배출 저감 및 투명한 화물 추적 서비스를 제공하여, 스마트 ESG 물류 생태계를 앞장서서 실천하고 있습니다.
                  </p>
                </>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 핵심 역량 (Core Competencies) */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-[#2B4C8C] font-semibold text-sm tracking-widest uppercase bg-[#2B4C8C]/5 px-3 py-1 rounded-full">
                Core Competencies
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1A2F] mt-3">핵심 역량</h2>
              <div className="w-16 h-1 bg-[#2B4C8C] mx-auto mt-4 rounded-full" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.coreValues.map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md border border-slate-100 transition-all duration-300 h-full">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-[#0A1A2F] mb-3">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 사무소 현황 (Office Locations) */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="text-[#2B4C8C] font-semibold text-sm tracking-widest uppercase bg-[#2B4C8C]/5 px-3 py-1 rounded-full">
                Offices
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1A2F] mt-3">사무소 현황</h2>
              <div className="w-16 h-1 bg-[#2B4C8C] mx-auto mt-4 rounded-full" />
            </div>
          </ScrollReveal>

          {/* Tab Selector */}
          <ScrollReveal delay={100}>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {[
                { key: 'all', label: '전체 보기' },
                { key: 'main', label: '본사 & 물류거점' },
                { key: 'retail', label: '백화점 유통망' },
                { key: 'local', label: '지역 사무소' }
              ].map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setFilter(tab.key)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                    filter === tab.key
                      ? 'bg-[#2B4C8C] text-white shadow-lg shadow-[#2B4C8C]/20 scale-105'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/55'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Office Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {filteredOffices.map((office, idx) => {
              const cat = getOfficeCategory(office.name)
              const badgeColors = {
                blue: 'bg-blue-50 text-blue-700 border-blue-100',
                emerald: 'bg-emerald-50 text-emerald-700 border-emerald-100',
                amber: 'bg-amber-50 text-amber-700 border-amber-100',
                indigo: 'bg-indigo-50 text-indigo-700 border-indigo-100'
              }
              const isCopied = copiedIndex === idx

              return (
                <ScrollReveal key={office.name} delay={idx * 50}>
                  <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group">
                    <div>
                      {/* Top Header inside card */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-3xl bg-slate-50 w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          {cat.icon}
                        </div>
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${badgeColors[cat.color]}`}>
                          {cat.label}
                        </span>
                      </div>

                      {/* Office Name & Address */}
                      <h3 className="text-base font-extrabold text-[#0A1A2F] mb-3 group-hover:text-[#2B4C8C] transition-colors leading-snug">
                        {office.name}
                      </h3>
                      <p className="text-slate-500 text-xs sm:text-sm font-semibold leading-relaxed mb-6">
                        {office.address}
                      </p>
                    </div>

                    {/* Bottom Action Buttons */}
                    <div className="flex items-center gap-2 border-t border-slate-50 pt-4 mt-auto">
                      <button
                        onClick={() => handleCopyAddress(office.address, idx)}
                        className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                          isCopied
                            ? 'bg-green-600 text-white shadow-xs'
                            : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/50'
                        }`}
                      >
                        {isCopied ? '✓ 복사완료' : '📋 주소복사'}
                      </button>
                      <a
                        href={`https://map.naver.com/v5/search/${encodeURIComponent(office.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-3 rounded-xl text-xs font-bold bg-[#2B4C8C]/5 hover:bg-[#2B4C8C] text-[#2B4C8C] hover:text-white transition-all text-center flex items-center justify-center gap-1 border border-[#2B4C8C]/10"
                      >
                        🗺️ 지도보기
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
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
                <h3 className="text-xl font-bold text-[#0A1A2F]">존경하는 고객 여러분, 파트너 여러분께.</h3>
              </div>

              <div className="text-slate-600 leading-loose text-sm space-y-4">
                {ceo.message.replace(/\\n/g, '\n').split('\n').map((paragraph, i) => (
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
              <p className="text-slate-500 text-sm mt-4">6개 전문 법인이 각 물류 영역의 핵심 역량을 담당하며, 그룹 차원의 통합 시너지를 실현합니다.</p>
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
