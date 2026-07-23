import { useContent } from '../../context/ContentContext'
import PageBanner from '../../components/common/PageBanner'
import ScrollReveal from '../../components/common/ScrollReveal'
import BusinessSubNav from '../../components/business/BusinessSubNav'

const sloganMap = {
  corporate: {
    label: "MIDDLE MILE",
    slogan: "산업의 흐름이 멈추지 않도록 — 생산지와 거점을 잇는 가장 안정적인 구간"
  },
  distribution: {
    label: "LAST MILE",
    slogan: "고객의 문 앞, 그 마지막 순간까지 — 브랜드 경험을 완성하는 정시 배송"
  },
  warehouse: {
    label: "WAREHOUSING & RISK MANAGEMENT",
    slogan: "보이지 않는 곳에서 더 철저하게 — 안전과 투명성을 모두 갖춘 운영 시스템"
  },
  brokerage: {
    label: "BROKERAGE & QUICK SERVICE",
    slogan: "전화 한 통 없이 끝나는 물류 — 접수부터 정산까지 잇는 디지털 혁신"
  },
  consulting: {
    label: "SCM CONSULTING",
    slogan: "30년 노하우와 IT 빅데이터를 접목한 공급망 비용 최적화"
  }
}

const quoteMap = {
  corporate: {
    quote: "“생산이 멈추지 않으려면, 운송이 먼저 멈추지 않아야 합니다.”",
    desc: "삼원종합물류는 산업별 전용 차량과 JIT 시스템으로 그 약속을 지킵니다.",
    tag: "MIDDLE MILE"
  },
  distribution: {
    quote: "“배송이 끝나는 곳에서, 브랜드의 첫 인상이 완성됩니다.”",
    desc: "삼원종합물류는 마지막 1미터까지 책임지는 정시 배송으로 답합니다.",
    tag: "LAST MILE"
  },
  warehouse: {
    quote: "“안전은 보이지 않을 때 가장 빛납니다.”",
    desc: "삼원종합물류는 시스템과 사람, 두 겹의 안전망으로 리스크를 예방합니다.",
    tag: "WAREHOUSING"
  },
  brokerage: {
    quote: "“복잡한 물류는 전화 한 통으로 끝나지 않습니다.”",
    desc: "에스원 퀵은 접수부터 정산까지, 단 하나의 화면으로 완결됩니다.",
    tag: "S-ONE QUICK"
  },
  consulting: {
    quote: "“물류 혁신은 보이지 않는 비용을 찾아내는 것부터 시작됩니다.”",
    desc: "삼원종합물류는 30년 노하우와 데이터 분석으로 최상의 효율을 설계합니다.",
    tag: "SCM CONSULTING"
  }
}

export default function BusinessPage({ contentKey }) {
  const { content } = useContent()
  const data = content.businessPages[contentKey]

  if (!data) return null

  const sloganInfo = {
    label: data.label || sloganMap[contentKey]?.label || "BUSINESS",
    slogan: data.slogan || sloganMap[contentKey]?.slogan || "삼원종합물류의 전문 물류 서비스"
  }
  const quoteInfo = {
    quote: data.quote || quoteMap[contentKey]?.quote || "“함께 성장하는 신뢰의 파트너십”",
    desc: data.quoteDesc || quoteMap[contentKey]?.desc || "삼원종합물류가 완벽한 흐름을 연결합니다.",
    tag: data.quoteTag || quoteMap[contentKey]?.tag || "PARTNERSHIP"
  }

  return (
    <>
      <PageBanner
        title={data.title}
        subtitle={sloganInfo.slogan}
        backgroundImage={data.bannerImage}
      />
      <BusinessSubNav />

      {/* 1. Overview Section with Premium Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Text Content (Overview) */}
            <div className="lg:col-span-7">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2B4C8C]/5 border border-[#2B4C8C]/10 rounded-full mb-6">
                  <span className="w-1.5 h-1.5 bg-[#2B4C8C] rounded-full animate-pulse" />
                  <span className="text-[#2B4C8C] font-extrabold text-[11px] tracking-widest uppercase">
                    {sloganInfo.label}
                  </span>
                </div>
                
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0A1A2F] leading-tight mb-6">
                  {sloganInfo.slogan.split(' — ')[0]}
                  {sloganInfo.slogan.includes(' — ') && (
                    <>
                      <br />
                      <span className="text-[#2B4C8C] text-xl md:text-2xl lg:text-3xl font-bold mt-2 block">
                        {sloganInfo.slogan.split(' — ')[1]}
                      </span>
                    </>
                  )}
                </h2>
                
                <div className="w-12 h-1 bg-[#2B4C8C] mb-8 rounded-full" />
                
                <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium">
                  {data.overview}
                </p>
              </ScrollReveal>
            </div>

            {/* Right: Visual Generated Image */}
            <div className="lg:col-span-5">
              <ScrollReveal delay={200}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 group">
                  <div className="absolute inset-0 bg-slate-900/10 z-10 group-hover:bg-slate-900/0 transition-colors duration-500" />
                  <img
                    src={data.image}
                    alt={data.title}
                    className="w-full h-72 sm:h-96 object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Core Strengths Section */}
      <section className="py-24 bg-slate-50 border-t border-b border-slate-100/60 relative overflow-hidden">
        {/* Background decorative glows */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#2B4C8C]/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#E07A5F]/3 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-[#2B4C8C] font-extrabold text-xs tracking-widest uppercase">Core Strengths</span>
              <h3 className="text-3xl font-extrabold text-[#0A1A2F] mt-2">핵심 경쟁력</h3>
              <div className="w-12 h-1 bg-[#2B4C8C] mx-auto mt-4 rounded-full" />
            </div>
          </ScrollReveal>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.strengths.map((item, i) => {
              const sequenceNum = String(i + 1).padStart(2, '0')
              return (
                <ScrollReveal key={i} delay={i * 100}>
                  <div className="relative bg-white border border-slate-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col h-full overflow-hidden">
                    
                    {/* Big display sequence number (PDF layout match) */}
                    <div className="absolute top-6 right-8 text-5xl font-black text-slate-100 group-hover:text-[#2B4C8C]/8 transition-colors duration-300 select-none">
                      {sequenceNum}
                    </div>

                    {/* Emoji / Icon Container */}
                    <div className="w-14 h-14 bg-[#2B4C8C]/5 group-hover:bg-[#2B4C8C] rounded-2xl flex items-center justify-center text-2xl group-hover:shadow-lg group-hover:shadow-[#2B4C8C]/20 transition-all duration-300 mb-6">
                      <span className="transform group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="text-lg font-bold text-[#0A1A2F] mb-3 group-hover:text-[#2B4C8C] transition-colors duration-300">
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. Bottom Quotation Banner */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative bg-[#0A1A2F] rounded-3xl p-10 md:p-16 text-center overflow-hidden shadow-2xl border border-slate-800">
              {/* Radial gradient background decoration */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(43,76,140,0.18)_0%,transparent_70%)] pointer-events-none" />
              
              <div className="relative z-10 max-w-3xl mx-auto">
                {/* Section Tag Capsule */}
                <div className="inline-block px-3.5 py-1 bg-[#2B4C8C]/25 border border-[#2B4C8C]/40 text-[#60A5FA] text-[10px] font-black tracking-widest uppercase rounded-full mb-6">
                  {quoteInfo.tag}
                </div>
                
                {/* Large Quotation */}
                <blockquote className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white leading-normal tracking-wide mb-6 drop-shadow-md">
                  {quoteInfo.quote}
                </blockquote>
                
                {/* Description */}
                <cite className="text-slate-300 text-sm md:text-base font-semibold not-italic">
                  {quoteInfo.desc}
                </cite>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
