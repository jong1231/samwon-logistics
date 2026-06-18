import { useState, useEffect } from 'react'
import PageBanner from '../../components/common/PageBanner'
import ScrollReveal from '../../components/common/ScrollReveal'

const DEFAULT_POSTINGS = [
  {
    id: '1',
    title: '14톤 윙바디 대기업 식자재 전담 수도권 간선 수송',
    type: '차량분양',
    income: '월 750만원 완제',
    vehicle: '14톤 윙바디 (연식 협의 가능)',
    location: '광주/여주 센터 ~ 수도권 주요 거점',
    hours: '08:00 ~ 17:00 (주 5일)',
    desc: '대형 유통사 수도권 물류센터 간 고정 노선을 수송하는 매우 안정적인 간선 노선입니다. 수작업이 없으며 100% 지게차 작업으로 상하차가 이루어져 육체적 강도가 낮습니다. 장기 고정 계약 보장합니다.',
    contactPerson: '김영호 부장',
    contactPhone: '02-598-3001'
  },
  {
    id: '2',
    title: '1톤 냉동탑차 대형 유통마트 라스트마일 새벽/주간 배송',
    type: '일자리',
    income: '월 420만원 완제',
    vehicle: '1톤 냉동탑차 (회사 분양 또는 본인 차량 가능)',
    location: '서울 서초구/강남구 배송 권역',
    hours: '06:00 ~ 15:00 (주 6일)',
    desc: '대형 이커머스 마트의 가정 신선식품 라스트마일 배송입니다. 노선이 조밀하여 초보자도 1~2주 동승 교육 후 즉시 단독 배송이 가능합니다. 물량 보장 및 거주지 인근 위주 배차 제공합니다.',
    contactPerson: '박민수 차장',
    contactPhone: '02-598-3001'
  },
  {
    id: '3',
    title: '5톤 윙바디 중부권 대형 제조공장 자재 수송 (야간)',
    type: '일자리',
    income: '월 580만원 완제',
    vehicle: '5톤 윙바디',
    location: '경기 이천 ~ 대전 대덕산업단지',
    hours: '야간 21:00 ~ 익일 06:00 (주 5일)',
    desc: '이천 물류센터와 대전 공장 간 자재를 왕복 운송하는 고정 노선입니다. 야간 운송으로 교통 체증이 없으며 규칙적인 생활이 가능합니다. 삼원운수 직영 관리 노선으로 정산 지연 리스크가 전혀 없습니다.',
    contactPerson: '최준호 과장',
    contactPhone: '02-598-3001'
  },
  {
    id: '4',
    title: '2.5톤 탑차 수도권 대형 제약사 의약품 콜드체인 유통',
    type: '차량분양',
    income: '월 490만원 완제',
    vehicle: '2.5톤 탑차 (온도 기록계 필수 장착)',
    location: '경기 김포 ~ 서울 주요 대형병원 및 약국',
    hours: '07:00 ~ 16:00 (주 5일)',
    desc: '제약사 냉장 의약품 전문 배송 노선입니다. 정밀 온도 관리가 필요한 고부가가치 운송 노선으로, 철저한 위생 수칙 준수가 요구되며 장기 계약 및 고효율 노선 보너스를 상시 지급합니다.',
    contactPerson: '정경호 팀장',
    contactPhone: '02-598-3001'
  }
]

export default function DriverJobs() {
  const [postings, setPostings] = useState([])
  const [filter, setFilter] = useState('전체')
  const [isAdminMode, setIsAdminMode] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingPost, setEditingPost] = useState(null)

  // Form states
  const [form, setForm] = useState({
    title: '',
    type: '일자리',
    income: '',
    vehicle: '',
    location: '',
    hours: '',
    desc: '',
    contactPerson: '',
    contactPhone: '02-598-3001'
  })

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('samwon_driver_jobs')
    if (saved) {
      try {
        setPostings(JSON.parse(saved))
      } catch (e) {
        setPostings(DEFAULT_POSTINGS)
      }
    } else {
      setPostings(DEFAULT_POSTINGS)
      localStorage.setItem('samwon_driver_jobs', JSON.stringify(DEFAULT_POSTINGS))
    }
  }, [])

  // Save to localStorage
  const savePostings = (newPosts) => {
    setPostings(newPosts)
    localStorage.setItem('samwon_driver_jobs', JSON.stringify(newPosts))
  }

  const openAddModal = () => {
    setEditingPost(null)
    setForm({
      title: '',
      type: '일자리',
      income: '',
      vehicle: '',
      location: '',
      hours: '',
      desc: '',
      contactPerson: '',
      contactPhone: '02-598-3001'
    })
    setIsModalOpen(true)
  }

  const openEditModal = (post) => {
    setEditingPost(post)
    setForm({ ...post })
    setIsModalOpen(true)
  }

  const handleDelete = (id) => {
    if (window.confirm('이 구인 공고를 삭제하시겠습니까?')) {
      const updated = postings.filter((p) => p.id !== id)
      savePostings(updated)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.title || !form.income || !form.vehicle || !form.location) {
      alert('필수 입력 항목을 채워주세요.')
      return
    }

    if (editingPost) {
      // Edit mode
      const updated = postings.map((p) => (p.id === editingPost.id ? { ...form } : p))
      savePostings(updated)
    } else {
      // Add mode
      const newPost = {
        ...form,
        id: Date.now().toString()
      }
      savePostings([newPost, ...postings])
    }
    setIsModalOpen(false)
  }

  const filteredPostings = postings.filter((p) => {
    if (filter === '전체') return true
    return p.type === filter
  })

  return (
    <>
      <PageBanner
        title="차주구인"
        subtitle="일자리 정보 및 신규 차량 분양 공고를 제공합니다"
        backgroundImage="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=80"
      />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Controls */}
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-6 border-b border-slate-100">
              <div>
                <h2 className="text-2xl font-bold text-[#0A1A2F]">차주 구인 & 분양 공고</h2>
                <p className="text-slate-500 text-sm mt-1">상하차 노선 정보 및 맞춤형 수입 기회를 확인하세요.</p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                {/* Admin Mode Switch Toggle */}
                <div className="flex items-center gap-3 bg-slate-100/80 px-4 py-2.5 rounded-xl border border-slate-200/50">
                  <span className="text-xs font-bold text-slate-600">직원 관리자 모드</span>
                  <button
                    onClick={() => setIsAdminMode(!isAdminMode)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none ${
                      isAdminMode ? 'bg-[#2B4C8C]' : 'bg-slate-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                        isAdminMode ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {isAdminMode && (
                  <button
                    onClick={openAddModal}
                    className="px-5 py-2.5 bg-[#2B4C8C] hover:bg-[#1E3563] text-white font-bold text-sm rounded-xl transition-all duration-300 shadow-sm hover:shadow flex items-center gap-2"
                  >
                    <span>➕ 새 공고 등록</span>
                  </button>
                )}
              </div>
            </div>
          </ScrollReveal>

          {/* Filters */}
          <ScrollReveal>
            <div className="flex gap-2 mb-8">
              {['전체', '일자리', '차량분양'].map((t) => (
                <button
                  key={t}
                  onClick={() => setFilter(t)}
                  className={`px-5 py-2 rounded-xl text-sm font-extrabold transition-all duration-200 ${
                    filter === t
                      ? 'bg-[#2B4C8C]/10 text-[#2B4C8C]'
                      : 'bg-slate-50 text-slate-500 hover:text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Postings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPostings.length === 0 ? (
              <div className="col-span-full py-16 text-center bg-slate-50 rounded-3xl border border-slate-100">
                <p className="text-slate-400 font-semibold">등록된 공고가 없습니다.</p>
              </div>
            ) : (
              filteredPostings.map((post, i) => (
                <ScrollReveal key={post.id} delay={(i % 2) * 100}>
                  <div className="bg-white border border-slate-200/60 rounded-3xl p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full group relative overflow-hidden">
                    
                    {/* Badge Category */}
                    <div className="absolute top-0 right-0">
                      <div className={`text-xs font-bold px-4 py-1.5 rounded-bl-2xl shadow-xs ${
                        post.type === '일자리' ? 'bg-blue-500 text-white' : 'bg-emerald-500 text-white'
                      }`}>
                        {post.type}
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* Title */}
                      <h3 className="font-extrabold text-lg text-slate-800 leading-snug pr-20 group-hover:text-[#2B4C8C] transition-colors">
                        {post.title}
                      </h3>

                      {/* Info grid */}
                      <div className="grid grid-cols-2 gap-3 bg-slate-50 rounded-2xl p-4 text-xs font-medium text-slate-600">
                        <div>
                          <span className="text-slate-400 block mb-0.5">💰 급여/수입</span>
                          <span className="text-slate-800 font-bold text-sm">{post.income}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block mb-0.5">🚛 운송 차량</span>
                          <span className="text-slate-800 font-bold text-sm truncate block">{post.vehicle}</span>
                        </div>
                        <div className="col-span-2">
                          <span className="text-slate-400 block mb-0.5">📍 노선/지역</span>
                          <span className="text-slate-800 font-bold text-sm block truncate">{post.location}</span>
                        </div>
                        <div className="col-span-2">
                          <span className="text-slate-400 block mb-0.5">⏰ 근무 시간</span>
                          <span className="text-slate-800 font-bold text-sm">{post.hours}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                        {post.desc}
                      </p>
                    </div>

                    {/* Bottom row: Contact & Action buttons */}
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                      <div className="text-xs">
                        <span className="text-slate-400 font-semibold block">담당자: {post.contactPerson}</span>
                        <span className="text-[#2B4C8C] font-extrabold block mt-0.5">{post.contactPhone}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        {isAdminMode ? (
                          <>
                            <button
                              onClick={() => openEditModal(post)}
                              className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-lg transition-colors"
                            >
                              ✏️ 수정
                            </button>
                            <button
                              onClick={() => handleDelete(post.id)}
                              className="px-3.5 py-2 bg-red-50 hover:bg-red-100 text-red-600 font-bold text-xs rounded-lg transition-colors"
                            >
                              🗑️ 삭제
                            </button>
                          </>
                        ) : (
                          <a
                            href={`tel:${post.contactPhone}`}
                            className="px-5 py-2.5 bg-[#2B4C8C] hover:bg-[#1E3563] text-white font-bold text-xs rounded-lg transition-colors shadow-xs"
                          >
                            ☎️ 전화지원
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))
            )}
          </div>
        </div>
      </section>

      {/* CRUD Edit/Add Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
            <div className="bg-[#0A1A2F] px-6 py-4 flex justify-between items-center text-white">
              <h3 className="font-extrabold text-base">
                {editingPost ? '✏️ 공고 내용 수정' : '➕ 신규 구인공고 등록'}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-white font-bold text-xl"
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-500 block mb-1">공고 분류 *</label>
                  <select
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-slate-700 bg-white text-xs font-semibold focus:outline-none focus:border-[#2B4C8C]"
                  >
                    <option value="일자리">일자리</option>
                    <option value="차량분양">차량분양</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-500 block mb-1">급여 / 월수입 *</label>
                  <input
                    type="text"
                    required
                    placeholder="예: 월 500만원 완제"
                    value={form.income}
                    onChange={(e) => setForm({ ...form, income: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-slate-700 text-xs font-medium focus:outline-none focus:border-[#2B4C8C]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-500 block mb-1">공고 제목 *</label>
                <input
                  type="text"
                  required
                  placeholder="구인공고 제목을 적어주세요"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-slate-700 text-xs font-semibold focus:outline-none focus:border-[#2B4C8C]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-500 block mb-1">운송 차량 정보 *</label>
                  <input
                    type="text"
                    required
                    placeholder="예: 5톤 윙바디"
                    value={form.vehicle}
                    onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-slate-700 text-xs font-medium focus:outline-none focus:border-[#2B4C8C]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-500 block mb-1">운송 노선 / 근무지 *</label>
                  <input
                    type="text"
                    required
                    placeholder="예: 수도권 센터 ~ 경기 전역"
                    value={form.location}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-slate-700 text-xs font-medium focus:outline-none focus:border-[#2B4C8C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-500 block mb-1">근무 시간 및 근무일 *</label>
                  <input
                    type="text"
                    required
                    placeholder="예: 08:00 ~ 18:00 (주 5일)"
                    value={form.hours}
                    onChange={(e) => setForm({ ...form, hours: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-slate-700 text-xs font-medium focus:outline-none focus:border-[#2B4C8C]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-500 block mb-1">담당자 성함 / 연락처 *</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      required
                      placeholder="김부장"
                      value={form.contactPerson}
                      onChange={(e) => setForm({ ...form, contactPerson: e.target.value })}
                      className="w-1/2 px-3 py-2 border border-slate-200 rounded-xl text-slate-700 text-xs font-medium focus:outline-none focus:border-[#2B4C8C]"
                    />
                    <input
                      type="text"
                      required
                      placeholder="02-598-3001"
                      value={form.contactPhone}
                      onChange={(e) => setForm({ ...form, contactPhone: e.target.value })}
                      className="w-1/2 px-3 py-2 border border-slate-200 rounded-xl text-slate-700 text-xs font-medium focus:outline-none focus:border-[#2B4C8C]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-500 block mb-1">상세 업무 및 안내 사항</label>
                <textarea
                  rows="4"
                  placeholder="운송 오더 상세 조건이나 기사님 복지 혜택 등을 자세히 기입해 주세요."
                  value={form.desc}
                  onChange={(e) => setForm({ ...form, desc: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-slate-700 text-xs font-medium focus:outline-none focus:border-[#2B4C8C] resize-none"
                />
              </div>

              <div className="pt-4 flex justify-end gap-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold text-xs rounded-xl transition-colors"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#2B4C8C] hover:bg-[#1E3563] text-white font-bold text-xs rounded-xl transition-colors shadow-xs"
                >
                  {editingPost ? '수정 완료' : '등록 완료'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
