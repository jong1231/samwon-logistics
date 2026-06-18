import { useState } from 'react'
import { defaultContent } from '../data/defaultContent'

export default function Contact() {
  const { company } = defaultContent
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    companyName: '',
    type: 'corporate',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Mock submit
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

  const faqs = [
    {
      q: '기업 맞춤형 물류 계약은 어떻게 진행되나요?',
      a: '제휴 문의를 남겨주시거나 고객센터로 연락주시면 전문 물류 컨설턴트가 현장 분석 후 최적의 운송 계획과 견적을 24시간 이내에 제안해 드립니다.'
    },
    {
      q: '에스원 퀵서비스는 B2B 전용인가요?',
      a: '기본적으로 기업 고객사(B2B)의 월별 통합 결제 및 세무 처리를 효율화하는 카카오톡 관제 서비스에 특화되어 있으나, 단발성 일반 화물 주선 및 퀵 오더도 친절하게 처리해 드립니다.'
    },
    {
      q: 'WMS(창고관리시스템) 연동이 지원되나요?',
      a: '네, 삼원의 WMS 시스템은 고객사의 쇼핑몰 및 호스팅사, ERP 시스템과의 API 연동을 완벽히 지원하여 실시간 재고 현황을 한눈에 추적할 수 있습니다.'
    },
    {
      q: 'HACCP 기준 콜드체인 차량이 상시 지원되나요?',
      a: '네, 삼원운수 및 자회사들의 전문 냉장/냉동 차량 네트워크를 통해 축산물 및 식자재, 의약품 등의 저온 정밀 제어 수송을 상시 리스크 없이 안전하게 지원합니다.'
    }
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          
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

        {/* FAQ Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#0A1A2F]">자주 묻는 질문 (FAQ)</h3>
            <div className="w-12 h-1 bg-[#2B4C8C] rounded-full mt-2 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col gap-3">
                <h4 className="font-bold text-slate-800 text-lg flex items-start gap-2">
                  <span className="text-[#2B4C8C] font-extrabold">Q.</span>
                  {faq.q}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed pl-5 whitespace-pre-line">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
