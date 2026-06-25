import { useState } from 'react'
import { useContent } from '../context/ContentContext'
import ScrollReveal from '../components/common/ScrollReveal'

export default function Contact() {
  const { content } = useContent()
  const { company, contactPage } = content
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    companyName: '',
    type: 'corporate',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [activeFaq, setActiveFaq] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        phone: '',
        email: '',
        companyName: '',
        type: 'corporate',
        message: ''
      })
      alert('문의가 성공적으로 접수되었습니다. 담당자가 신속히 연락드리겠습니다.')
    }, 1000)
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  const processSteps = contactPage?.processSteps || [
    { num: '01', title: '고객문의', desc: '홈페이지 온라인 제휴문의 신청 또는 대표 번호(02-598-3001) 접수', icon: '📞' },
    { num: '02', title: '현장조사분석', desc: '담당 물류 컨설턴트가 고객사의 유통망 배송 경로 및 물동량 현장 실사 분석', icon: '📊' },
    { num: '03', title: '견적 및 컨설팅', desc: '운송 모듈 분석 기반 비용 절감안 제시, 최적 단가 산출 및 견적서 제출', icon: '💡' },
    { num: '04', title: '계약 및 실행', desc: '최종 운영 계약 체결 및 SLA 협의 후 전담 배송 차량 고정 배치, WMS API 연동', icon: '🤝' }
  ]

  const faqs = contactPage?.faqs || [
    { q: '기업 맞춤형 물류 제휴 계약은 어떻게 진행되나요?', a: '우측 제휴 문의 양식을 작성하시거나 고객센터로 연락 주시면, 담당 물류 컨설턴트가 24시간 이내에 전화를 드려 세부 물동량 및 배송 주기를 파악합니다. 현장 실사 후 맞춤형 견적서와 물류 운영 컨설팅을 무상으로 제안해 드립니다.' },
    { q: '에스원 퀵서비스는 기업 B2B 전용인가요?', a: '삼원종합물류의 에스원 퀵서비스는 기본적으로 기업 고객사(B2B)의 월별 통합 정산 및 1:1 알림 관제 시스템을 주로 서비스합니다. 다만 일반 단발성 화물 주선 및 퀵 오더도 친절하게 처리해 드리고 있습니다.' },
    { q: 'WMS(창고관리시스템) API 연동이 지원되나요?', a: '네, 삼원의 스마트 WMS 시스템은 고객사의 사내 ERP 및 주요 쇼핑몰 호스팅사(카페24, 메이크샵 등)의 API 연동을 완벽히 지원합니다. 상품 입출고 정보와 실시간 재고 현황을 한눈에 정확히 모니터링할 수 있습니다.' },
    { q: 'HACCP 기준 콜드체인 차량이 상시 지원되나요?', a: '네, 삼원운수 및 계열사들의 전문 냉장/냉동 탑차 네트워크를 통해 신선식품, 식자재, 온도의 유지가 필요한 의약품 등의 수송을 완벽히 수행합니다. 실시간 온도 관제 장치가 장착되어 있어 온도의 이탈 위험이 없습니다.' },
    { q: '차량 배차 정보와 배송 현황을 실시간으로 확인할 수 있나요?', a: '네, 저희 배차 시스템을 통해 차량 매칭 즉시 차주 기사님의 정보(성함, 차량번호, 연락처)가 연동됩니다. 배송이 완료되면 카카오톡 알림톡을 통해 수령인의 전자 서명 및 완료 현황이 실시간 1:1로 발송됩니다.' },
    { q: '삼원의 개인 지입 차주로 지원하려면 자격 조건이 어떻게 되나요?', a: '기본적으로 화물운송종사자 자격증 및 영업용 번호판을 소지하셔야 합니다. 상세 모집 요건은 "채용정보 > 차주구인" 메뉴에서 현재 진행 중인 공고를 보시고 온라인 또는 유선 지원을 통해 면접을 진행하실 수 있습니다.' }
  ]

  return (
    <div className="bg-[#F8FAFC] pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="text-center mb-16">
          <span className="text-[#2B4C8C] font-bold text-sm tracking-widest uppercase bg-[#2B4C8C]/5 px-3 py-1.5 rounded-full">Contact Us</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0A1A2F] mt-4 tracking-tight">고객센터 & 제휴문의</h1>
          <p className="text-slate-600 text-lg mt-4 max-w-2xl mx-auto">
            삼원종합물류는 고객사의 성공적인 공급망 혁신을 위해 24시간 열려 있습니다. 문의를 남겨주시면 신속히 답변해 드리겠습니다.
          </p>
        </div>

        {/* 제휴문의 절차 다이어그램 */}
        <div className="mb-20">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-[#0A1A2F]">제휴 문의 절차</h3>
              <p className="text-slate-500 text-sm mt-1">체계적이고 과학적인 프로세스로 최상의 만족을 제공합니다.</p>
              <div className="w-12 h-1 bg-[#2B4C8C] rounded-full mt-3 mx-auto" />
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Desktop Horizontal Line */}
            <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-0.5 bg-slate-200 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {processSteps.map((step, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="bg-white rounded-2xl border border-slate-200/50 p-6 flex flex-col items-center text-center shadow-xs hover:border-[#2B4C8C] transition-all duration-300 h-full group">
                    <div className="w-16 h-16 bg-[#F1F5F9] text-[#2B4C8C] rounded-full flex items-center justify-center text-2xl font-bold mb-4 shadow-inner border-2 border-white group-hover:bg-[#2B4C8C] group-hover:text-white transition-colors duration-300">
                      {step.icon}
                    </div>
                    <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider block mb-1">Step {step.num}</span>
                    <h4 className="font-extrabold text-slate-800 text-base mb-2">{step.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Info Card & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start mb-20">
          
          {/* Info Card */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col gap-8">
            <div>
              <h2 className="text-2xl font-bold text-[#0A1A2F]">고객센터 안내</h2>
              <div className="w-12 h-1 bg-[#2B4C8C] rounded-full mt-2" />
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#2B4C8C]/5 rounded-xl flex items-center justify-center text-[#2B4C8C] text-lg font-bold">📞</div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">대표 전화</h4>
                  <p className="text-slate-600 text-lg font-semibold mt-0.5">{company.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#2B4C8C]/5 rounded-xl flex items-center justify-center text-[#2B4C8C] text-lg font-bold">📠</div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">팩스 번호</h4>
                  <p className="text-slate-600 text-lg mt-0.5">{company.fax}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#2B4C8C]/5 rounded-xl flex items-center justify-center text-[#2B4C8C] text-lg font-bold">✉️</div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">이메일</h4>
                  <p className="text-[#2B4C8C] text-base font-medium mt-0.5">{company.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#2B4C8C]/5 rounded-xl flex items-center justify-center text-[#2B4C8C] text-lg font-bold">🏢</div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">본사 소재지</h4>
                  <p className="text-slate-600 text-sm mt-0.5 leading-relaxed">{company.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#2B4C8C]/5 rounded-xl flex items-center justify-center text-[#2B4C8C] text-lg font-bold">🚛</div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">이천 차고지</h4>
                  <p className="text-slate-600 text-sm mt-0.5 leading-relaxed">{company.garage}</p>
                </div>
              </div>
            </div>

            <div className="bg-[#2B4C8C]/5 rounded-2xl p-5 border border-[#2B4C8C]/10">
              <h4 className="font-bold text-[#2B4C8C] text-base flex items-center gap-2">💬 카카오톡 실시간 관제</h4>
              <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                기업 전담 카카오톡 채널을 통해 오더 현황, 차량 위치 및 정산 문제를 1:1로 실시간 소통할 수 있습니다.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100">
            <h3 className="text-2xl font-bold text-[#0A1A2F] mb-6">온라인 제휴 및 문의 신청</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-bold text-slate-700">담당자 성함 *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-[#2B4C8C] text-slate-800"
                    placeholder="성함을 입력하세요"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-bold text-slate-700">연락처 *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-[#2B4C8C] text-slate-800"
                    placeholder="예: 010-0000-0000"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-bold text-slate-700">이메일 주소 *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-[#2B4C8C] text-slate-800"
                    placeholder="example@mail.com"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="companyName" className="text-sm font-bold text-slate-700">회사명</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-[#2B4C8C] text-slate-800"
                    placeholder="회사명을 입력하세요"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="type" className="text-sm font-bold text-slate-700">문의 분야 *</label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-[#2B4C8C] text-slate-800 bg-white"
                >
                  <option value="corporate">기업물류 (Middle Mile)</option>
                  <option value="distribution">유통물류 (Last Mile)</option>
                  <option value="quick">주선 · 에스원 퀵 서비스</option>
                  <option value="warehouse">창고운영 및 리스크관리</option>
                  <option value="etc">기타 제휴 문의</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-bold text-slate-700">상세 내용 *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-[#2B4C8C] text-slate-800 resize-none"
                  placeholder="문의하실 구체적인 물동량, 주기, 보관 요건 등을 남겨주세요."
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full py-4 bg-[#2B4C8C] hover:bg-[#1C325E] text-white font-bold rounded-xl shadow-lg shadow-[#2B4C8C]/10 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                {submitted ? '전송하는 중...' : '제휴 문의 신청하기'}
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section - Accordion Style */}
        <div className="mt-24">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-[#0A1A2F]">자주 묻는 질문 (FAQ)</h3>
              <p className="text-slate-500 text-sm mt-1">고객님들이 많이 질문하시는 내용을 요약해 드립니다.</p>
              <div className="w-12 h-1 bg-[#2B4C8C] rounded-full mt-3 mx-auto" />
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index
              return (
                <ScrollReveal key={index} delay={index * 50}>
                  <div className="bg-white rounded-2xl border border-slate-200/50 overflow-hidden shadow-xs hover:border-[#2B4C8C]/40 transition-colors duration-300">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-5 text-left font-bold text-slate-800 text-sm sm:text-base flex items-center justify-between gap-4 focus:outline-none"
                    >
                      <span className="flex items-start gap-3">
                        <span className="text-[#2B4C8C] font-extrabold">Q.</span>
                        <span>{faq.q}</span>
                      </span>
                      <svg
                        className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#2B4C8C]' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen ? 'max-h-80 border-t border-slate-100' : 'max-h-0'
                      }`}
                    >
                      <div className="px-6 py-5 bg-[#F8FAFC] text-slate-600 text-xs sm:text-sm leading-loose">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  )
}
