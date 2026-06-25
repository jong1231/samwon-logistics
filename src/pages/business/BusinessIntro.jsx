import { Link } from 'react-router-dom'
import PageBanner from '../../components/common/PageBanner'
import ScrollReveal from '../../components/common/ScrollReveal'
import BusinessSubNav from '../../components/business/BusinessSubNav'
import { useContent } from '../../context/ContentContext'

export default function BusinessIntro() {
  const { content } = useContent()
  const { businessIntro } = content

  // Fallback to default stats if not defined
  const stats = businessIntro?.stats || [
    { value: '1992 년', label: '설 립 · SINCE 1992', desc: '30년 이상의 역사와 신뢰' },
    { value: '1,000 대+', label: '운 행 차 량 보 유', desc: '전국 단위의 거대한 화물 네트워크' },
    { value: '1,000 개', label: '영 업 용 번 호 보 유', desc: '안정적인 자체 정식 영업용 번호판' },
    { value: '40 개사+', label: '파 트 너 거 래 처', desc: '대기업 및 중견기업과의 굳건한 파트너십' }
  ]

  // Fallback to default timeline if not defined
  const timelineItems = businessIntro?.timeline || [
    { id: 'corporate', title: '기업물류', english: 'MIDDLE MILE', desc: '생산지에서 물류센터, 거점간을 잇는 가장 안정적인 구간 운송', color: '#2B4C8C', path: '/business/corporate' },
    { id: 'distribution', title: '유통물류', english: 'LAST MILE', desc: '고객의 문 앞, 마지막 순간까지 완벽한 배송 품질 완성', color: '#E07A5F', path: '/business/distribution' },
    { id: 'warehouse', title: '창고운영 및 리스크관리', english: 'WAREHOUSING', desc: 'WMS 기반 자동화 관리와 24/7 전담 관제 스마트 시스템', color: '#3F6B58', path: '/business/warehouse' },
    { id: 'brokerage', title: '주선 · 에스원 퀵', english: 'BROKERAGE', desc: '전화 한 통 없이 접수부터 정산까지 잇는 디지털 혁신 퀵', color: '#7F5539', path: '/business/brokerage' },
    { id: 'consulting', title: '물류컨설팅', english: 'SCM CONSULTING', desc: '30년 노하우와 IT 빅데이터를 접목한 공급망 비용 최적화', color: '#4B3F72', path: '/business/consulting' }
  ]

  return (
    <>
      <PageBanner
        title="사업영역"
        subtitle="생산지에서 소비자의 문 앞까지, 삼원종합물류가 완벽한 흐름을 연결합니다."
        backgroundImage="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80"
      />
      <BusinessSubNav />

      {/* 회사 개요 (PDF 1장 본문) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#0A1A2F] tracking-tight leading-tight mb-8">
                대한민국 물류의 <br className="sm:hidden" />
                <span className="text-[#2B4C8C] relative">
                  모든 구간을 잇습니다
                  <span className="absolute left-0 bottom-0 w-full h-[6px] bg-[#2B4C8C]/15 -z-10 rounded-full" />
                </span>
              </h2>
              <div className="w-12 h-1 bg-[#2B4C8C] mx-auto mb-8 rounded-full" />
              <p className="text-slate-700 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto">
                삼원종합물류는 1992년부터 지금까지, 생산지에서 소비자의 문 앞까지 끊기지 않는 흐름을 만들어왔습니다. 기업물류, 유통물류, 창고운영, 주선·퀵서비스, 물류컨설팅까지 모든 영역을 하나의 흐름으로 연결하는 대한민국 대표 종합물류 기업입니다.
              </p>
            </div>
          </ScrollReveal>

          {/* 4대 핵심 지표 (Stats Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="relative bg-white rounded-3xl p-8 border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full overflow-hidden">
                  {/* Decorative corner glow */}
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#2B4C8C]/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
                  
                  <div className="text-[15px] font-bold text-slate-400 mb-2 tracking-wide uppercase">
                    {stat.label}
                  </div>
                  <div className="text-3xl md:text-4xl font-black text-[#2B4C8C] mb-3 font-sans tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-slate-500 mt-auto leading-relaxed">
                    {stat.desc}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 사업영역 플로우 차트 (PDF 1장 하단 타임라인) */}
      <section className="py-24 bg-[#F8FAFC] border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#0A1A2F] mt-4">
                종합물류 프로세스 연계망
              </h3>
              <p className="text-slate-500 text-sm mt-3">
                각 비즈니스 영역이 유기적으로 연계되어 유입부터 배송까지 하나의 연속된 흐름으로 이어집니다.
              </p>
              <div className="w-16 h-1 bg-[#2B4C8C] mx-auto mt-4 rounded-full" />
            </div>
          </ScrollReveal>

          {/* Timeline Visual (Responsive) */}
          <div className="relative">
            {/* Desktop Horizontal Line */}
            <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[3px] bg-gradient-to-r from-[#2B4C8C] via-[#E07A5F] to-[#4B3F72] -z-10 rounded-full" />
            
            {/* Mobile Vertical Line */}
            <div className="lg:hidden absolute top-[20px] bottom-[20px] left-[27px] w-[3px] bg-gradient-to-b from-[#2B4C8C] via-[#E07A5F] to-[#4B3F72] -z-10 rounded-full" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6">
              {timelineItems.map((item, idx) => (
                <ScrollReveal key={item.id} delay={idx * 150}>
                  <Link
                    to={item.path}
                    className="flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center group cursor-pointer"
                  >
                    {/* Circle Node */}
                    <div className="relative z-10 flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full border-4 border-white shadow-md bg-white group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 mr-6 lg:mr-0 lg:mb-6">
                      {/* Inner pulsing indicator */}
                      <span className="absolute inset-0 rounded-full animate-ping bg-[#2B4C8C]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black text-white"
                        style={{ backgroundColor: item.color }}
                      >
                        {idx + 1}
                      </div>
                    </div>

                    {/* Content Box */}
                    <div className="flex-1 lg:max-w-[200px]">
                      <div className="flex items-center lg:justify-center gap-1.5 mb-1.5">
                        <span className="text-[#2B4C8C] text-[10px] font-black tracking-widest uppercase px-1.5 py-0.5 bg-[#2B4C8C]/5 rounded">
                          {item.english}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-[#0A1A2F] group-hover:text-[#2B4C8C] transition-colors mb-2">
                        {item.title}
                      </h4>
                      <p className="text-slate-500 text-xs leading-relaxed group-hover:text-slate-700 transition-colors font-medium">
                        {item.desc}
                      </p>
                      
                      {/* Learn More link indicator */}
                      <div className="mt-3 inline-flex items-center text-[#2B4C8C] text-xs font-bold gap-1 group-hover:translate-x-1 transition-transform">
                        <span>자세히 보기</span>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 하단 제휴 및 문의 안내 (PDF 6장 참고) */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#0A1A2F] mb-6">
              삼원종합물류와 함께 성장할 최상의 파트너십을 시작하세요
            </h3>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-10 max-w-2xl mx-auto">
              미들마일부터 라스트마일, 스마트 보관 및 배송 대행, 프로세스 혁신을 위한 맞춤형 컨설팅까지. 삼원종합물류의 종합물류 인프라가 든든하게 뒤받침하겠습니다.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#2B4C8C] hover:bg-[#1C325E] text-white rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-[#2B4C8C]/15"
            >
              <span>상담 및 제휴 문의하기</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
