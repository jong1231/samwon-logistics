import { useState } from 'react'
import { useContent } from '../context/ContentContext'
import { imageToBase64 } from '../utils/storage'

/**
 * 리뉴얼된 관리자(어드민) 페이지
 * - 현재 버전의 메뉴 구조에 딱 맞춰 재구조화 완료:
 *   1. 회사소개 (회사소개, 회사연혁, 주요현황, 찾아오시는 길)
 *   2. 사업영역 (기업물류, 유통물류, 주선·퀵서비스, 창고운영, 물류컨설팅)
 *   3. 채용정보 (인재상, 차주구인)
 *   4. 고객센터
 *   5. 메인 홈 (히어로 섹션 관리)
 */
const ADMIN_PASSWORD = '1234'

export default function Admin() {
  const { content, updateContent, resetContent } = useContent()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [activeTab, setActiveTab] = useState('company') // 기본 탭: 회사소개
  const [activeSubTab, setActiveSubTab] = useState('intro') // 기본 서브탭: 회사소개 상세
  const [editContent, setEditContent] = useState(null)
  const [saved, setSaved] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsLoggedIn(true)
      setEditContent(JSON.parse(JSON.stringify(content)))
      setError('')
    } else {
      setError('비밀번호가 일치하지 않습니다.')
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setPassword('')
    setEditContent(null)
  }

  const handleSave = () => {
    updateContent(editContent)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const handleReset = () => {
    if (window.confirm('모든 수정 내용을 초기화하시겠습니까?\n기본값으로 돌아갑니다.')) {
      resetContent()
      setEditContent(JSON.parse(JSON.stringify(content)))
    }
  }

  const updateField = (path, value) => {
    const keys = path.split('.')
    const newContent = { ...editContent }
    let obj = newContent
    for (let i = 0; i < keys.length - 1; i++) {
      const key = isNaN(keys[i]) ? keys[i] : parseInt(keys[i])
      if (typeof key === 'number') {
        obj[key] = { ...obj[key] }
        obj = obj[key]
      } else {
        obj[key] = Array.isArray(obj[key]) ? [...obj[key]] : { ...obj[key] }
        obj = obj[key]
      }
    }
    obj[keys[keys.length - 1]] = value
    setEditContent(newContent)
  }

  const handleImageUpload = async (path, e) => {
    const file = e.target.files[0]
    if (!file) return
    try {
      const base64 = await imageToBase64(file)
      updateField(path, base64)
    } catch (err) {
      alert('이미지 업로드에 실패했습니다.')
      console.error(err)
    }
  }

  // Helper to change main tab and auto-select appropriate sub tab
  const handleMainTabChange = (tabKey) => {
    setActiveTab(tabKey)
    if (tabKey === 'company') setActiveSubTab('intro')
    else if (tabKey === 'business') setActiveSubTab('intro')
    else if (tabKey === 'recruitment') setActiveSubTab('talent')
  }

  // FAQ 배열 핸들러
  const handleAddFaq = () => {
    const newFaqs = [
      ...(editContent.contactPage?.faqs || []),
      { q: '새로운 자주 묻는 질문', a: '새로운 답변 내용을 입력하세요.' }
    ]
    updateField('contactPage.faqs', newFaqs)
  }

  const handleRemoveFaq = (idx) => {
    const newFaqs = editContent.contactPage.faqs.filter((_, i) => i !== idx)
    updateField('contactPage.faqs', newFaqs)
  }

  // 10.1. 연혁 배열 핸들러
  const handleAddHistory = () => {
    const newHistory = [{ year: '2026', events: ['새로운 이벤트'] }, ...editContent.history]
    updateField('history', newHistory)
  }

  const handleRemoveHistory = (idx) => {
    const newHistory = editContent.history.filter((_, i) => i !== idx)
    updateField('history', newHistory)
  }

  const handleAddHistoryEvent = (histIdx) => {
    const newEvents = [...editContent.history[histIdx].events, '새로운 이벤트 항목']
    updateField(`history.${histIdx}.events`, newEvents)
  }

  const handleRemoveHistoryEvent = (histIdx, eventIdx) => {
    const newEvents = editContent.history[histIdx].events.filter((_, i) => i !== eventIdx)
    updateField(`history.${histIdx}.events`, newEvents)
  }

  // 10.2. 채용 공고 배열 핸들러
  const handleAddOpening = () => {
    const newOpenings = [
      ...editContent.recruitment.openings,
      { title: '신규 직무 모집', dept: '운영부', type: '정규직', deadline: '채용 시 마감' }
    ]
    updateField('recruitment.openings', newOpenings)
  }

  const handleRemoveOpening = (idx) => {
    const newOpenings = editContent.recruitment.openings.filter((_, i) => i !== idx)
    updateField('recruitment.openings', newOpenings)
  }

  // Login Screen
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#0A1A2F] flex items-center justify-center px-4 pt-20">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md border border-slate-800/10">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#2B4C8C] rounded-2xl mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-[#2B4C8C]/20">S</div>
            <h1 className="text-2xl font-bold text-[#0A1A2F]">관리자 로그인</h1>
            <p className="text-gray-400 text-sm mt-2">삼원종합물류 웹사이트 통합 관리</p>
          </div>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력하세요"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2B4C8C] focus:border-transparent mb-4 text-center font-bold tracking-widest text-slate-800"
            />
            {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
            <button
              type="submit"
              className="w-full py-3.5 bg-[#2B4C8C] hover:bg-[#1C325E] text-white rounded-xl font-bold transition-all duration-300 shadow-md shadow-[#2B4C8C]/15"
            >
              로그인
            </button>
          </form>
        </div>
      </div>
    )
  }

  if (!editContent) return null

  // Main Tabs configuration matching the menus
  const mainTabs = [
    { key: 'company', label: '회사소개' },
    { key: 'business', label: '사업영역' },
    { key: 'recruitment', label: '채용정보' },
    { key: 'contact', label: '고객센터' },
    { key: 'hero', label: '메인 홈' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Sticky Action Bar */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 sticky top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">🛠️</span>
            <h1 className="font-extrabold text-[#0A1A2F] text-lg sm:text-xl">통합 관리자 모드</h1>
          </div>
          <div className="flex items-center gap-3">
            {saved && (
              <span className="text-green-600 text-sm font-bold animate-pulse mr-2">✅ 변경사항 저장 완료!</span>
            )}
            <button onClick={handleReset} className="px-4 py-2 text-sm font-semibold text-red-500 hover:bg-red-50 rounded-lg transition-colors">
              초기화
            </button>
            <button onClick={handleSave} className="px-6 py-2 bg-[#2B4C8C] hover:bg-[#1C325E] text-white rounded-lg text-sm font-bold transition-all shadow-md shadow-[#2B4C8C]/20 hover:scale-105">
              저장하기
            </button>
            <button onClick={handleLogout} className="px-4 py-2 text-sm font-semibold text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
              로그아웃
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main GNB Tabs */}
        <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200 pb-4">
          {mainTabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => handleMainTabChange(tab.key)}
              className={`px-5 py-2.5 rounded-xl text-[15px] font-extrabold transition-all duration-200 ${
                activeTab === tab.key
                  ? 'bg-[#2B4C8C] text-white shadow-md shadow-[#2B4C8C]/25'
                  : 'bg-white text-slate-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 1. 회사소개 탭 내부 서브 탭 */}
        {activeTab === 'company' && (
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              { key: 'intro', label: '회사소개 / CEO' },
              { key: 'history', label: '회사연혁' },
              { key: 'status', label: '주요현황 (계열사/장비)' },
              { key: 'location', label: '찾아오시는 길' },
            ].map(sub => (
              <button
                key={sub.key}
                onClick={() => setActiveSubTab(sub.key)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeSubTab === sub.key
                    ? 'bg-slate-800 text-white'
                    : 'bg-slate-200/60 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {sub.label}
              </button>
            ))}
          </div>
        )}

        {/* 2. 사업영역 탭 내부 서브 탭 */}
        {activeTab === 'business' && (
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              { key: 'intro', label: '사업영역 개요' },
              { key: 'corporate', label: '기업물류' },
              { key: 'distribution', label: '유통물류' },
              { key: 'brokerage', label: '주선 · 퀵서비스' },
              { key: 'warehouse', label: '창고운영 및 리스크' },
              { key: 'consulting', label: '물류컨설팅' },
            ].map(sub => (
              <button
                key={sub.key}
                onClick={() => setActiveSubTab(sub.key)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeSubTab === sub.key
                    ? 'bg-slate-800 text-white'
                    : 'bg-slate-200/60 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {sub.label}
              </button>
            ))}
          </div>
        )}

        {/* 3. 채용정보 탭 내부 서브 탭 */}
        {activeTab === 'recruitment' && (
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              { key: 'talent', label: '인재상' },
              { key: 'jobs', label: '차주구인' },
            ].map(sub => (
              <button
                key={sub.key}
                onClick={() => setActiveSubTab(sub.key)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeSubTab === sub.key
                    ? 'bg-slate-800 text-white'
                    : 'bg-slate-200/60 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {sub.label}
              </button>
            ))}
          </div>
        )}

        {/* Content Box */}
        <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 p-6 md:p-8">
          
          {/* ==================== 1. 회사소개 관련 편집 ==================== */}
          {activeTab === 'company' && activeSubTab === 'intro' && (
            <div className="space-y-8">
              <h2 className="text-xl font-extrabold text-slate-800 border-b pb-3">🏢 회사소개 & CEO 정보</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">회사명(한글)</label>
                  <input type="text" value={editContent.company.name} onChange={e => updateField('company.name', e.target.value)} className="w-full px-4 py-2.5 border rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">회사명(영문)</label>
                  <input type="text" value={editContent.company.nameEn} onChange={e => updateField('company.nameEn', e.target.value)} className="w-full px-4 py-2.5 border rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">설립일</label>
                  <input type="text" value={editContent.company.founded} onChange={e => updateField('company.founded', e.target.value)} className="w-full px-4 py-2.5 border rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">연간 매출액</label>
                  <input type="text" value={editContent.company.revenue} onChange={e => updateField('company.revenue', e.target.value)} className="w-full px-4 py-2.5 border rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">신용등급</label>
                  <input type="text" value={editContent.company.creditRating} onChange={e => updateField('company.creditRating', e.target.value)} className="w-full px-4 py-2.5 border rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">대표이사 성함</label>
                  <input type="text" value={editContent.company.ceo} onChange={e => updateField('company.ceo', e.target.value)} className="w-full px-4 py-2.5 border rounded-xl" />
                </div>
              </div>

              <div className="border-t pt-6 space-y-6">
                <h3 className="text-lg font-bold text-slate-800">✉️ 대표이사 인사말</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">인사말 제목/직함</label>
                    <input type="text" value={editContent.ceo.title} onChange={e => updateField('ceo.title', e.target.value)} className="w-full px-4 py-2.5 border rounded-xl mb-4" />
                    
                    <label className="block text-sm font-bold text-slate-700 mb-2">인사말 본문 (\n으로 줄바꿈)</label>
                    <textarea value={editContent.ceo.message} onChange={e => updateField('ceo.message', e.target.value)} rows={8} className="w-full px-4 py-2.5 border rounded-xl resize-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">CEO 사진</label>
                    <div className="flex items-center gap-4 mt-2 p-4 bg-slate-50 rounded-2xl border">
                      <img src={editContent.ceo.photo} alt="CEO Preview" className="w-28 h-36 object-cover rounded-xl border bg-white shadow-xs" />
                      <div className="flex flex-col gap-2">
                        <input type="file" accept="image/*" onChange={e => handleImageUpload('ceo.photo', e)} className="text-xs" />
                        <p className="text-[11px] text-gray-400">권장 비율: 3:4 세로 사진</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'company' && activeSubTab === 'history' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b pb-3">
                <h2 className="text-xl font-extrabold text-slate-800">📅 회사 연혁 관리</h2>
                <button onClick={handleAddHistory} className="px-4 py-2 bg-slate-800 text-white rounded-lg text-xs font-bold hover:bg-slate-700 transition-colors">
                  + 연도 추가
                </button>
              </div>

              <div className="space-y-4">
                {editContent.history.map((hist, idx) => (
                  <div key={idx} className="bg-slate-50 border rounded-xl p-5 relative">
                    <button onClick={() => handleRemoveHistory(idx)} className="absolute top-4 right-4 text-xs font-bold text-red-500 hover:underline">
                      삭제
                    </button>
                    <div className="flex items-center gap-4 mb-4">
                      <label className="text-sm font-bold text-slate-700">연도</label>
                      <input type="text" value={hist.year} onChange={e => updateField(`history.${idx}.year`, e.target.value)} className="w-24 px-3 py-1.5 border rounded-lg text-center font-bold" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-bold text-slate-500">주요 이벤트 항목</label>
                        <button onClick={() => handleAddHistoryEvent(idx)} className="text-xs font-bold text-[#2B4C8C] hover:underline">
                          + 항목 추가
                        </button>
                      </div>

                      {hist.events.map((ev, evIdx) => (
                        <div key={evIdx} className="flex items-center gap-2">
                          <input type="text" value={ev} onChange={e => updateField(`history.${idx}.events.${evIdx}`, e.target.value)} className="flex-1 px-3 py-2 border rounded-lg text-sm" />
                          <button onClick={() => handleRemoveHistoryEvent(idx, evIdx)} className="text-gray-400 hover:text-red-500 p-2">
                            🗑️
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'company' && activeSubTab === 'status' && (
            <div className="space-y-8">
              <h2 className="text-xl font-extrabold text-slate-800 border-b pb-3">📈 주요현황 (계열사 & 장비)</h2>
              
              {/* 10.1. 계열사 현황 관리 */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-800">🏢 계열사 목록</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {editContent.subsidiaries.map((sub, idx) => (
                    <div key={idx} className="border p-4 rounded-xl bg-slate-50/50 space-y-2">
                      <label className="block text-xs font-bold text-slate-500">계열사명</label>
                      <input type="text" value={sub.name} onChange={e => updateField(`subsidiaries.${idx}.name`, e.target.value)} className="w-full px-3 py-1.5 border rounded-lg font-bold text-sm" />
                      <label className="block text-xs font-bold text-slate-500">주요 사업 설명</label>
                      <input type="text" value={sub.desc} onChange={e => updateField(`subsidiaries.${idx}.desc`, e.target.value)} className="w-full px-3 py-1.5 border rounded-lg text-xs" />
                    </div>
                  ))}
                </div>
              </div>

              {/* 10.2. 장비 보유 현황 관리 */}
              <div className="border-t pt-6 space-y-4">
                <h3 className="text-lg font-bold text-slate-800">🚛 장비 보유 대수</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {editContent.equipment.map((eq, idx) => (
                    <div key={idx} className="border p-4 rounded-xl bg-slate-50/50 grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-500 mb-1">장비명</label>
                        <input type="text" value={eq.type} onChange={e => updateField(`equipment.${idx}.type`, e.target.value)} className="w-full px-3 py-1.5 border rounded-lg text-xs font-bold" />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-500 mb-1">보유대수 (대)</label>
                        <input type="number" value={eq.count} onChange={e => updateField(`equipment.${idx}.count`, parseInt(e.target.value) || 0)} className="w-full px-3 py-1.5 border rounded-lg text-xs" />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-500 mb-1">이모지/아이콘</label>
                        <input type="text" value={eq.icon} onChange={e => updateField(`equipment.${idx}.icon`, e.target.value)} className="w-full px-3 py-1.5 border rounded-lg text-xs text-center" />
                      </div>
                      <div className="sm:col-span-3">
                        <label className="block text-[11px] font-bold text-slate-500 mb-1">설명</label>
                        <input type="text" value={eq.desc} onChange={e => updateField(`equipment.${idx}.desc`, e.target.value)} className="w-full px-3 py-1.5 border rounded-lg text-xs" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 10.3. 메인 실적 카운터 데이터 */}
              <div className="border-t pt-6 space-y-4">
                <h3 className="text-lg font-bold text-slate-800">📊 홈 화면 핵심 실적 지표</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {editContent.statistics.map((stat, idx) => (
                    <div key={idx} className="border p-4 rounded-xl bg-slate-50/50 space-y-2">
                      <label className="block text-[11px] font-bold text-slate-500">레이블</label>
                      <input type="text" value={stat.label} onChange={e => updateField(`statistics.${idx}.label`, e.target.value)} className="w-full px-3 py-1.5 border rounded-lg text-xs" />
                      
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-400">숫자</label>
                          <input type="number" value={stat.number} onChange={e => updateField(`statistics.${idx}.number`, parseInt(e.target.value) || 0)} className="w-full px-3 py-1.5 border rounded-lg text-xs text-center" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-slate-400">접미사</label>
                          <input type="text" value={stat.suffix} onChange={e => updateField(`statistics.${idx}.suffix`, e.target.value)} className="w-full px-3 py-1.5 border rounded-lg text-xs text-center" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'company' && activeSubTab === 'location' && (
            <div className="space-y-6">
              <h2 className="text-xl font-extrabold text-slate-800 border-b pb-3">🗺️ 찾아오시는 길 정보</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-2">본사 상세 주소</label>
                  <input type="text" value={editContent.location.address} onChange={e => updateField('location.address', e.target.value)} className="w-full px-4 py-2.5 border rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">대표번호</label>
                  <input type="text" value={editContent.location.tel} onChange={e => updateField('location.tel', e.target.value)} className="w-full px-4 py-2.5 border rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">팩스번호</label>
                  <input type="text" value={editContent.location.fax} onChange={e => updateField('location.fax', e.target.value)} className="w-full px-4 py-2.5 border rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">지하철 안내</label>
                  <input type="text" value={editContent.location.subway} onChange={e => updateField('location.subway', e.target.value)} className="w-full px-4 py-2.5 border rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">버스 안내</label>
                  <input type="text" value={editContent.location.bus} onChange={e => updateField('location.bus', e.target.value)} className="w-full px-4 py-2.5 border rounded-xl" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-2">주차 안내</label>
                  <input type="text" value={editContent.location.parking} onChange={e => updateField('location.parking', e.target.value)} className="w-full px-4 py-2.5 border rounded-xl" />
                </div>
              </div>
            </div>
          )}


          {/* ==================== 2. 사업영역 관련 편집 ==================== */}
          {activeTab === 'business' && activeSubTab === 'intro' && (
            <div className="space-y-8">
              <h2 className="text-xl font-extrabold text-slate-800 border-b pb-3">📋 사업영역 개요 페이지 관리</h2>
              
              {/* 4대 핵심 지표 */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-800">📊 4대 핵심 지표 (Stats)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(editContent.businessIntro?.stats || []).map((stat, idx) => (
                    <div key={idx} className="border p-4 rounded-xl bg-slate-50/50 space-y-3">
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-xs font-bold text-slate-500 mb-1">지표 값 (예: 1992 년)</label>
                          <input type="text" value={stat.value} onChange={e => updateField(`businessIntro.stats.${idx}.value`, e.target.value)} className="w-full px-3 py-1.5 border rounded-lg font-bold text-sm" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-500 mb-1">라벨 (예: 설립 · SINCE 1992)</label>
                          <input type="text" value={stat.label} onChange={e => updateField(`businessIntro.stats.${idx}.label`, e.target.value)} className="w-full px-3 py-1.5 border rounded-lg text-sm" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 mb-1">추가 설명</label>
                        <input type="text" value={stat.desc} onChange={e => updateField(`businessIntro.stats.${idx}.desc`, e.target.value)} className="w-full px-3 py-1.5 border rounded-lg text-xs" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5대 프로세스 노드 */}
              <div className="border-t pt-6 space-y-4">
                <h3 className="text-lg font-bold text-slate-800">⛓️ 프로세스 연계 노드 (Timeline)</h3>
                <div className="space-y-4">
                  {(editContent.businessIntro?.timeline || []).map((item, idx) => (
                    <div key={idx} className="border p-5 rounded-xl bg-slate-50/50 relative">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                        <div>
                          <label className="block text-xs font-bold text-slate-500 mb-1">노드 한글명</label>
                          <input type="text" value={item.title} onChange={e => updateField(`businessIntro.timeline.${idx}.title`, e.target.value)} className="w-full px-3 py-1.5 border rounded-lg font-bold text-sm" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-500 mb-1">노드 영문명</label>
                          <input type="text" value={item.english} onChange={e => updateField(`businessIntro.timeline.${idx}.english`, e.target.value)} className="w-full px-3 py-1.5 border rounded-lg text-sm uppercase" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-500 mb-1">테마 컬러 (Hex)</label>
                          <div className="flex gap-2 items-center">
                            <input type="color" value={item.color} onChange={e => updateField(`businessIntro.timeline.${idx}.color`, e.target.value)} className="w-8 h-8 rounded border p-0 cursor-pointer" />
                            <input type="text" value={item.color} onChange={e => updateField(`businessIntro.timeline.${idx}.color`, e.target.value)} className="flex-1 px-3 py-1.5 border rounded-lg text-xs font-mono" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 mb-1">간략 설명</label>
                        <input type="text" value={item.desc} onChange={e => updateField(`businessIntro.timeline.${idx}.desc`, e.target.value)} className="w-full px-3 py-1.5 border rounded-lg text-xs" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'business' && activeSubTab !== 'intro' && (
            <div className="space-y-6">
              <h2 className="text-xl font-extrabold text-slate-800 border-b pb-3">📦 사업영역 상세 편집 — {editContent.businessPages[activeSubTab].title}</h2>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">서비스 제목</label>
                <input type="text" value={editContent.businessPages[activeSubTab].title} onChange={e => updateField(`businessPages.${activeSubTab}.title`, e.target.value)} className="w-full px-4 py-2.5 border rounded-xl font-bold text-slate-800" />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">서비스 개요</label>
                <textarea value={editContent.businessPages[activeSubTab].overview} onChange={e => updateField(`businessPages.${activeSubTab}.overview`, e.target.value)} rows={5} className="w-full px-4 py-2.5 border rounded-xl resize-none leading-relaxed" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">영문 라벨 (상세 페이지 상단)</label>
                  <input type="text" value={editContent.businessPages[activeSubTab].label || ''} onChange={e => updateField(`businessPages.${activeSubTab}.label`, e.target.value)} className="w-full px-4 py-2.5 border rounded-xl font-bold text-slate-800" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">슬로건</label>
                  <input type="text" value={editContent.businessPages[activeSubTab].slogan || ''} onChange={e => updateField(`businessPages.${activeSubTab}.slogan`, e.target.value)} className="w-full px-4 py-2.5 border rounded-xl font-bold text-slate-800" />
                </div>
              </div>

              <div className="bg-slate-50 border p-5 rounded-2xl space-y-4">
                <h3 className="text-sm font-black text-slate-800 flex items-center gap-1.5">💬 하단 인용구 (Quote Banner) 설정</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">인용구 태그</label>
                    <input type="text" value={editContent.businessPages[activeSubTab].quoteTag || ''} onChange={e => updateField(`businessPages.${activeSubTab}.quoteTag`, e.target.value)} className="w-full px-3 py-2 border rounded-lg" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-slate-500 mb-1">인용구 (Quote)</label>
                    <input type="text" value={editContent.businessPages[activeSubTab].quote || ''} onChange={e => updateField(`businessPages.${activeSubTab}.quote`, e.target.value)} className="w-full px-3 py-2 border rounded-lg font-semibold text-slate-850" />
                  </div>
                  <div className="md:col-span-3">
                    <label className="block text-xs font-bold text-slate-500 mb-1">인용구 상세 설명</label>
                    <input type="text" value={editContent.businessPages[activeSubTab].quoteDesc || ''} onChange={e => updateField(`businessPages.${activeSubTab}.quoteDesc`, e.target.value)} className="w-full px-3 py-2 border rounded-lg text-slate-600" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">배너 이미지 (서브페이지 상단)</label>
                  <div className="flex items-center gap-4 mt-2 p-4 bg-slate-50 rounded-2xl border">
                    <img src={editContent.businessPages[activeSubTab].bannerImage} alt="Banner Preview" className="w-32 h-20 object-cover rounded-xl border bg-white shadow-xs" />
                    <input type="file" accept="image/*" onChange={e => handleImageUpload(`businessPages.${activeSubTab}.bannerImage`, e)} className="text-xs" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">본문 대표 이미지 (서브페이지 하단)</label>
                  <div className="flex items-center gap-4 mt-2 p-4 bg-slate-50 rounded-2xl border">
                    <img src={editContent.businessPages[activeSubTab].image} alt="Overview Preview" className="w-32 h-20 object-cover rounded-xl border bg-white shadow-xs" />
                    <input type="file" accept="image/*" onChange={e => handleImageUpload(`businessPages.${activeSubTab}.image`, e)} className="text-xs" />
                  </div>
                </div>
              </div>

              <div className="border-t pt-6 space-y-4">
                <h3 className="text-lg font-bold text-slate-800">⭐ 핵심 강점 항목</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {editContent.businessPages[activeSubTab].strengths.map((st, sIdx) => (
                    <div key={sIdx} className="bg-slate-50 border p-4 rounded-xl grid grid-cols-1 sm:grid-cols-4 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-500 mb-1">아이콘(이모지)</label>
                        <input type="text" value={st.icon} onChange={e => updateField(`businessPages.${activeSubTab}.strengths.${sIdx}.icon`, e.target.value)} className="w-full px-3 py-2 border rounded-lg text-center" />
                      </div>
                      <div className="sm:col-span-3">
                        <label className="block text-xs font-bold text-slate-500 mb-1">강점 제목</label>
                        <input type="text" value={st.title} onChange={e => updateField(`businessPages.${activeSubTab}.strengths.${sIdx}.title`, e.target.value)} className="w-full px-3 py-2 border rounded-lg font-bold" />
                      </div>
                      <div className="sm:col-span-4">
                        <label className="block text-xs font-bold text-slate-500 mb-1">세부 묘사</label>
                        <input type="text" value={st.desc} onChange={e => updateField(`businessPages.${activeSubTab}.strengths.${sIdx}.desc`, e.target.value)} className="w-full px-3 py-2 border rounded-lg text-xs" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}


          {/* ==================== 3. 채용정보 관련 편집 ==================== */}
          {activeTab === 'recruitment' && activeSubTab === 'talent' && (
            <div className="space-y-6">
              <h2 className="text-xl font-extrabold text-slate-800 border-b pb-3">🎯 채용정보 - 인재상 편집</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">메인 타이틀</label>
                  <input type="text" value={editContent.recruitment.title} onChange={e => updateField('recruitment.title', e.target.value)} className="w-full px-4 py-2.5 border rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">서브 타이틀</label>
                  <input type="text" value={editContent.recruitment.subtitle} onChange={e => updateField('recruitment.subtitle', e.target.value)} className="w-full px-4 py-2.5 border rounded-xl" />
                </div>
              </div>

              <div className="border-t pt-6 space-y-4">
                <h3 className="text-lg font-bold text-slate-800">💡 핵심 가치 관리</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {editContent.recruitment.values.map((val, idx) => (
                    <div key={idx} className="bg-slate-50 border p-4 rounded-xl grid grid-cols-1 sm:grid-cols-4 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-500 mb-1">아이콘(이모지)</label>
                        <input type="text" value={val.icon} onChange={e => updateField(`recruitment.values.${idx}.icon`, e.target.value)} className="w-full px-3 py-2 border rounded-lg text-center" />
                      </div>
                      <div className="sm:col-span-3">
                        <label className="block text-xs font-bold text-slate-500 mb-1">가치 키워드</label>
                        <input type="text" value={val.title} onChange={e => updateField(`recruitment.values.${idx}.title`, e.target.value)} className="w-full px-3 py-2 border rounded-lg font-bold" />
                      </div>
                      <div className="sm:col-span-4">
                        <label className="block text-xs font-bold text-slate-500 mb-1">상세 설명</label>
                        <input type="text" value={val.desc} onChange={e => updateField(`recruitment.values.${idx}.desc`, e.target.value)} className="w-full px-3 py-2 border rounded-lg text-xs" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'recruitment' && activeSubTab === 'jobs' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b pb-3">
                <h2 className="text-xl font-extrabold text-slate-800">🚛 채용정보 - 차주 구인공고 관리</h2>
                <button onClick={handleAddOpening} className="px-4 py-2 bg-slate-800 text-white rounded-lg text-xs font-bold hover:bg-slate-700 transition-colors">
                  + 공고 추가
                </button>
              </div>

              <div className="space-y-4">
                {editContent.recruitment.openings.map((job, idx) => (
                  <div key={idx} className="bg-slate-50 border p-5 rounded-xl relative">
                    <button onClick={() => handleRemoveOpening(idx)} className="absolute top-4 right-4 text-xs font-bold text-red-500 hover:underline">
                      삭제
                    </button>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-500 mb-1">모집 부문</label>
                        <input type="text" value={job.title} onChange={e => updateField(`recruitment.openings.${idx}.title`, e.target.value)} className="w-full px-3 py-2 border rounded-lg text-sm font-bold" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 mb-1">배정 부서</label>
                        <input type="text" value={job.dept} onChange={e => updateField(`recruitment.openings.${idx}.dept`, e.target.value)} className="w-full px-3 py-2 border rounded-lg text-sm" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 mb-1">근무 형태</label>
                        <input type="text" value={job.type} onChange={e => updateField(`recruitment.openings.${idx}.type`, e.target.value)} className="w-full px-3 py-2 border rounded-lg text-sm" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 mb-1">마감기한</label>
                        <input type="text" value={job.deadline} onChange={e => updateField(`recruitment.openings.${idx}.deadline`, e.target.value)} className="w-full px-3 py-2 border rounded-lg text-sm text-[#2B4C8C] font-semibold" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}


          {/* ==================== 4. 고객센터 관련 편집 ==================== */}
          {activeTab === 'contact' && (
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-xl font-extrabold text-slate-800 border-b pb-3">📞 고객센터 연락처 및 주소 관리</h2>
                <p className="text-xs text-gray-400">여기에 적은 정보는 메인 하단 푸터 및 고객센터 페이지에 일괄 연동됩니다.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">대표 전화번호</label>
                    <input type="text" value={editContent.company.phone} onChange={e => updateField('company.phone', e.target.value)} className="w-full px-4 py-2.5 border rounded-xl" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">대표 팩스번호</label>
                    <input type="text" value={editContent.company.fax} onChange={e => updateField('company.fax', e.target.value)} className="w-full px-4 py-2.5 border rounded-xl" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">대표 이메일 주소</label>
                    <input type="text" value={editContent.company.email} onChange={e => updateField('company.email', e.target.value)} className="w-full px-4 py-2.5 border rounded-xl text-[#2B4C8C]" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">사업자등록번호</label>
                    <input type="text" value={editContent.company.bizNumber} onChange={e => updateField('company.bizNumber', e.target.value)} className="w-full px-4 py-2.5 border rounded-xl" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-slate-700 mb-2">본사 주소</label>
                    <input type="text" value={editContent.company.address} onChange={e => updateField('company.address', e.target.value)} className="w-full px-4 py-2.5 border rounded-xl" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-slate-700 mb-2">이천 차고지 주소</label>
                    <input type="text" value={editContent.company.garage} onChange={e => updateField('company.garage', e.target.value)} className="w-full px-4 py-2.5 border rounded-xl" />
                  </div>
                </div>
              </div>

              {/* 제휴 문의 절차 */}
              <div className="border-t pt-6 space-y-4">
                <h3 className="text-lg font-bold text-slate-800">🤝 제휴 문의 절차</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(editContent.contactPage?.processSteps || []).map((step, idx) => (
                    <div key={idx} className="border p-4 rounded-xl bg-slate-50/50 grid grid-cols-1 sm:grid-cols-4 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-500 mb-1">아이콘(이모지)</label>
                        <input type="text" value={step.icon} onChange={e => updateField(`contactPage.processSteps.${idx}.icon`, e.target.value)} className="w-full px-3 py-2 border rounded-lg text-center" />
                      </div>
                      <div className="sm:col-span-3">
                        <label className="block text-xs font-bold text-slate-500 mb-1">단계 명칭</label>
                        <input type="text" value={step.title} onChange={e => updateField(`contactPage.processSteps.${idx}.title`, e.target.value)} className="w-full px-3 py-2 border rounded-lg font-bold" />
                      </div>
                      <div className="sm:col-span-4">
                        <label className="block text-xs font-bold text-slate-500 mb-1">단계 설명</label>
                        <input type="text" value={step.desc} onChange={e => updateField(`contactPage.processSteps.${idx}.desc`, e.target.value)} className="w-full px-3 py-2 border rounded-lg text-xs" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 자주 묻는 질문 (FAQ) */}
              <div className="border-t pt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-800">🙋 자주 묻는 질문 (FAQ)</h3>
                  <button onClick={handleAddFaq} className="px-3 py-1.5 bg-slate-800 text-white rounded-lg text-xs font-bold hover:bg-slate-700 transition-colors">
                    + FAQ 추가
                  </button>
                </div>
                <div className="space-y-4">
                  {(editContent.contactPage?.faqs || []).map((faq, idx) => (
                    <div key={idx} className="bg-slate-50 border p-5 rounded-xl relative space-y-3">
                      <button onClick={() => handleRemoveFaq(idx)} className="absolute top-4 right-4 text-xs font-bold text-red-500 hover:underline">
                        삭제
                      </button>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 mb-1">질문 (Q)</label>
                        <input type="text" value={faq.q} onChange={e => updateField(`contactPage.faqs.${idx}.q`, e.target.value)} className="w-full px-3 py-2 border rounded-lg text-sm font-bold text-slate-800" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 mb-1">답변 (A)</label>
                        <textarea value={faq.a} onChange={e => updateField(`contactPage.faqs.${idx}.a`, e.target.value)} rows={3} className="w-full px-3 py-2 border rounded-lg text-xs text-slate-600 resize-none leading-relaxed" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}


          {/* ==================== 5. 메인 홈 관련 편집 ==================== */}
          {activeTab === 'hero' && (
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-xl font-extrabold text-slate-800 border-b pb-3">🏡 메인 홈 - 히어로 섹션 텍스트 관리</h2>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">메인 헤드라인 타이틀 (\n으로 줄바꿈)</label>
                  <textarea
                    value={editContent.hero.title}
                    onChange={e => updateField('hero.title', e.target.value)}
                    className="w-full px-4 py-3 border rounded-xl resize-none leading-relaxed"
                    rows={4}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">서브 타이틀 텍스트 (\n으로 줄바꿈)</label>
                  <textarea
                    value={editContent.hero.subtitle}
                    onChange={e => updateField('hero.subtitle', e.target.value)}
                    className="w-full px-4 py-3 border rounded-xl resize-none leading-relaxed"
                    rows={3}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">메인 CTA 버튼 문구</label>
                  <input
                    type="text"
                    value={editContent.hero.ctaText}
                    onChange={e => updateField('hero.ctaText', e.target.value)}
                    className="w-full px-4 py-3 border rounded-xl"
                  />
                </div>
              </div>

              {/* 핵심 역량 */}
              <div className="border-t pt-6 space-y-4">
                <h3 className="text-lg font-bold text-slate-800">🏆 핵심 역량 (Core Competencies)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(editContent.coreValues || []).map((val, idx) => (
                    <div key={idx} className="bg-slate-50 border p-4 rounded-xl grid grid-cols-1 sm:grid-cols-4 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-500 mb-1">아이콘(이모지)</label>
                        <input type="text" value={val.icon} onChange={e => updateField(`coreValues.${idx}.icon`, e.target.value)} className="w-full px-3 py-2 border rounded-lg text-center" />
                      </div>
                      <div className="sm:col-span-3">
                        <label className="block text-xs font-bold text-slate-500 mb-1">키워드</label>
                        <input type="text" value={val.title} onChange={e => updateField(`coreValues.${idx}.title`, e.target.value)} className="w-full px-3 py-2 border rounded-lg font-bold" />
                      </div>
                      <div className="sm:col-span-4">
                        <label className="block text-xs font-bold text-slate-500 mb-1">상세 설명</label>
                        <input type="text" value={val.desc} onChange={e => updateField(`coreValues.${idx}.desc`, e.target.value)} className="w-full px-3 py-2 border rounded-lg text-xs" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 사업영역 미리보기 */}
              <div className="border-t pt-6 space-y-4">
                <h3 className="text-lg font-bold text-slate-800">📦 사업영역 미리보기 (Business Preview)</h3>
                <div className="space-y-4">
                  {(editContent.businessAreas || []).map((area, idx) => (
                    <div key={area.id} className="bg-slate-50 border p-5 rounded-xl space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-500 mb-1">사업 영역명</label>
                          <input type="text" value={area.title} onChange={e => updateField(`businessAreas.${idx}.title`, e.target.value)} className="w-full px-3 py-2 border rounded-lg font-bold text-sm" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-500 mb-1">대표 이미지 URL</label>
                          <div className="flex items-center gap-2">
                            <img src={area.image} alt="Preview" className="w-12 h-8 object-cover rounded border" />
                            <input type="text" value={area.image} onChange={e => updateField(`businessAreas.${idx}.image`, e.target.value)} className="flex-1 px-3 py-1.5 border rounded-lg text-xs font-mono" />
                            <input type="file" accept="image/*" onChange={e => handleImageUpload(`businessAreas.${idx}.image`, e)} className="text-[10px] w-20" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 mb-1">홈페이지 요약 설명</label>
                        <input type="text" value={area.desc} onChange={e => updateField(`businessAreas.${idx}.desc`, e.target.value)} className="w-full px-3 py-2 border rounded-lg text-xs" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 차주 전용 시스템 Box */}
              <div className="border-t pt-6 space-y-4">
                <h3 className="text-lg font-bold text-slate-800">🚛 차주 전용 시스템 상자</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-[#0A1A2F] mb-1">상자 타이틀</label>
                    <input type="text" value={editContent.truckOwner?.title} onChange={e => updateField('truckOwner.title', e.target.value)} className="w-full px-4 py-2 border rounded-xl text-sm font-bold" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#0A1A2F] mb-1">CTA 버튼 문구</label>
                    <input type="text" value={editContent.truckOwner?.ctaText} onChange={e => updateField('truckOwner.ctaText', e.target.value)} className="w-full px-4 py-2 border rounded-xl text-sm" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-bold text-[#0A1A2F] mb-1">상자 세부 설명</label>
                    <input type="text" value={editContent.truckOwner?.desc} onChange={e => updateField('truckOwner.desc', e.target.value)} className="w-full px-4 py-2 border rounded-xl text-xs" />
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
