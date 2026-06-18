import PageBanner from '../../components/common/PageBanner'
import ScrollReveal from '../../components/common/ScrollReveal'

export default function Talent() {
  const values = [
    {
      icon: '🎯',
      title: '도전정신 (Challenge)',
      desc: '현실에 안주하지 않고 끊임없는 학습과 열정으로 물류 프로세스의 변화와 혁신을 앞장서서 이끌어가는 인재',
      color: 'from-blue-500/10 to-indigo-500/5 border-blue-100',
      badgeColor: 'bg-blue-100 text-blue-800'
    },
    {
      icon: '🤝',
      title: '고객신뢰 (Trust)',
      desc: '약속을 소중히 여겨 정직한 태도로 동료, 고객, 비즈니스 파트너와 흔들림 없는 두터운 유대와 신뢰를 쌓는 인재',
      color: 'from-emerald-500/10 to-teal-500/5 border-emerald-100',
      badgeColor: 'bg-emerald-100 text-emerald-800'
    },
    {
      icon: '💡',
      title: '전문성 (Professionalism)',
      desc: '데이터 분석 능력과 디지털 물류 솔루션을 완벽히 이해하고 활용하여 최고의 서비스 품질(SLA)을 책임지는 전문가',
      color: 'from-amber-500/10 to-orange-500/5 border-amber-100',
      badgeColor: 'bg-amber-100 text-amber-800'
    },
    {
      icon: '🌐',
      title: '상생협력 (Collaboration)',
      desc: '열린 소통과 다양성에 대한 배려를 통해 삼원 그룹 계열사 전체의 긴밀한 상생 협력 시너지를 창출하는 인재',
      color: 'from-purple-500/10 to-fuchsia-500/5 border-purple-100',
      badgeColor: 'bg-purple-100 text-purple-800'
    }
  ]

  const benefits = [
    { title: '성과 보상', desc: '경쟁력 있는 연봉제 및 경영 목표 달성에 따른 인센티브/성과급 상시 지급', icon: '💰' },
    { title: '건강 & 생활', desc: '매년 정기 정밀 종합 건강검진 지원 및 임직원 상해 보험 가입', icon: '🏥' },
    { title: '경조사 지원', desc: '경조 휴가 부여, 경조금 지급 및 근조 화환/과일 바구니 배송 지원', icon: '🎁' },
    { title: '교육 & 개발', desc: '도서 구입비 무제한 지원 및 직무 관련 전문 사외 교육/세미나 비용 전액 지원', icon: '📚' },
    { title: '포상제도', desc: '장기 근속 포상(휴가 및 포상금), 연말 우수 사원 표창 및 리워드 지급', icon: '🏆' },
    { title: '사내 복지', desc: '사내 라운지 내 무제한 고급 커피머신/간식 제공 및 생일 축하 상품권 지급', icon: '🎉' }
  ]

  const processes = [
    { step: '01', title: '입사지원', desc: '사람인/잡코리아 또는 이메일 접수' },
    { step: '02', title: '서류전형', desc: '기본 직무 역량 및 적합도 평가' },
    { step: '03', title: '실무진 면접', desc: '현업 담당자 심층 기술/역량 면접' },
    { step: '04', title: '임원 면접', desc: '가치관 및 종합적인 인성 면접' },
    { step: '05', title: '합격 발표', desc: '최종 합격 및 오리엔테이션 진행' }
  ]

  return (
    <>
      <PageBanner
        title="인재상"
        subtitle="삼원종합물류의 끊임없는 성장 혁신을 주도할 열정 넘치는 물류 주역을 모집합니다"
        backgroundImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"
      />

      {/* 인재상 정보 */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-[#2B4C8C] font-semibold text-sm tracking-widest uppercase bg-[#2B4C8C]/5 px-3 py-1 rounded-full">
                Core Values
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1A2F] mt-3">
                삼원인이 지닌 4대 가치
              </h2>
              <div className="w-16 h-1 bg-[#2B4C8C] mx-auto mt-4 rounded-full" />
              <p className="text-slate-500 text-sm mt-4">
                우리는 기본에 충실하고 새로운 기술과 변화를 반기며 함께 성장하는 사람을 환영합니다.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className={`bg-gradient-to-br ${v.color} border rounded-3xl p-8 shadow-xs hover:shadow-md transition-all duration-300 h-full flex flex-col`}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl">{v.icon}</span>
                    <h3 className="text-lg font-bold text-[#0A1A2F]">{v.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-loose flex-1">
                    {v.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 채용 절차 */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-[#2B4C8C] font-semibold text-sm tracking-widest uppercase bg-[#2B4C8C]/5 px-3 py-1 rounded-full">
                Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1A2F] mt-3">
                채용 절차 안내
              </h2>
              <div className="w-16 h-1 bg-[#2B4C8C] mx-auto mt-4 rounded-full" />
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Desktop Connector Line */}
            <div className="hidden lg:block absolute top-12 left-12 right-12 h-0.5 bg-slate-200 z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
              {processes.map((p, i) => (
                <ScrollReveal key={i} delay={i * 120} className="text-center">
                  <div className="flex lg:flex-col items-center lg:justify-center gap-4 lg:gap-0 bg-white lg:bg-transparent p-5 lg:p-0 rounded-2xl border border-slate-200/50 lg:border-none shadow-xs lg:shadow-none">
                    <div className="w-16 h-16 bg-[#2B4C8C] text-white rounded-full flex items-center justify-center font-black text-lg shadow-md border-4 border-white">
                      {p.step}
                    </div>
                    <div className="text-left lg:text-center mt-0 lg:mt-4">
                      <h4 className="font-extrabold text-base text-slate-800">{p.title}</h4>
                      <p className="text-slate-500 text-xs mt-1 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 복리후생 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-[#2B4C8C] font-semibold text-sm tracking-widest uppercase bg-[#2B4C8C]/5 px-3 py-1 rounded-full">
                Welfare
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1A2F] mt-3">
                임직원 복리후생
              </h2>
              <div className="w-16 h-1 bg-[#2B4C8C] mx-auto mt-4 rounded-full" />
              <p className="text-slate-500 text-sm mt-4">
                삼원은 임직원 개개인의 삶과 성과가 존중받는 최고의 근무 환경을 만들어 갑니다.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow h-full flex gap-4">
                  <span className="text-3xl flex-shrink-0">{b.icon}</span>
                  <div>
                    <h4 className="font-bold text-slate-800 text-base mb-1">{b.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{b.desc}</p>
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
