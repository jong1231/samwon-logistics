import { useState } from 'react'
import { useContent } from '../context/ContentContext'
import { imageToBase64 } from '../utils/storage'

/**
 * 관리자(어드민) 페이지
 * ⚠️ 주의: 비밀번호가 클라이언트 코드에 노출되어 있어 데모/내부용으로만 적합합니다.
 * 운영 환경에서는 반드시 서버 측 인증(JWT, 세션 등)으로 교체하세요.
 */
const ADMIN_PASSWORD = '1234'

export default function Admin() {
  const { content, updateContent, resetContent } = useContent()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [activeTab, setActiveTab] = useState('hero')
  const [editContent, setEditContent] = useState(null)
  const [saved, setSaved] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    // ⚠️ 비밀번호가 코드에 노출됨 - 운영 시 서버 인증으로 교체 필요
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

  // Login Screen
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#0A1A2F] flex items-center justify-center px-4 pt-20">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#2B4C8C] rounded-2xl mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">S</div>
            <h1 className="text-2xl font-bold text-[#0A1A2F]">관리자 로그인</h1>
            <p className="text-gray-400 text-sm mt-2">삼원종합물류 웹사이트 관리</p>
          </div>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력하세요"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2B4C8C] focus:border-transparent mb-4"
            />
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full py-3 bg-[#2B4C8C] hover:bg-[#243F75] text-white rounded-xl font-semibold transition-colors"
            >
              로그인
            </button>
          </form>
        </div>
      </div>
    )
  }

  if (!editContent) return null

  const tabs = [
    { key: 'hero', label: '메인 히어로' },
    { key: 'company', label: '회사 정보' },
    { key: 'ceo', label: 'CEO 인사말' },
    { key: 'coreValues', label: '핵심 가치' },
    { key: 'statistics', label: '핵심 실적' },
    { key: 'business', label: '사업영역' },
    { key: 'recruitment', label: '채용정보' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="font-bold text-[#0A1A2F] text-lg">🛠 관리자 모드</h1>
          <div className="flex items-center gap-3">
            {saved && (
              <span className="text-green-600 text-sm font-medium animate-pulse">✅ 저장 완료!</span>
            )}
            <button onClick={handleReset} className="px-4 py-2 text-sm text-gray-500 hover:text-red-500 transition-colors">
              초기화
            </button>
            <button onClick={handleSave} className="px-6 py-2 bg-[#2B4C8C] hover:bg-[#243F75] text-white rounded-lg text-sm font-semibold transition-colors">
              저장
            </button>
            <button onClick={handleLogout} className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700 transition-colors">
              로그아웃
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.key
                  ? 'bg-[#2B4C8C] text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
          {activeTab === 'hero' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-[#0A1A2F] mb-4">메인 히어로 섹션</h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">헤드라인</label>
                <textarea
                  value={editContent.hero.title}
                  onChange={e => updateField('hero.title', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2B4C8C] focus:border-transparent resize-none"
                  rows={3}
                />
                <p className="text-xs text-gray-400 mt-1">\n으로 줄바꿈</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">서브 텍스트</label>
                <textarea
                  value={editContent.hero.subtitle}
                  onChange={e => updateField('hero.subtitle', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2B4C8C] focus:border-transparent resize-none"
                  rows={2}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">CTA 버튼 텍스트</label>
                <input
                  type="text"
                  value={editContent.hero.ctaText}
                  onChange={e => updateField('hero.ctaText', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2B4C8C] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">히어로 배경 이미지</label>
                <div className="flex items-center gap-4">
                  <img src={editContent.hero.image} alt="preview" className="w-32 h-20 object-cover rounded-lg border" />
                  <input type="file" accept="image/*" onChange={e => handleImageUpload('hero.image', e)} className="text-sm" />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'company' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-[#0A1A2F] mb-4">회사 정보</h2>
              {['name', 'nameEn', 'phone', 'fax', 'email', 'address', 'bizNumber', 'ceo'].map(key => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {{ name: '회사명(한글)', nameEn: '회사명(영문)', phone: '대표번호', fax: '팩스', email: '이메일', address: '주소', bizNumber: '사업자등록번호', ceo: '대표이사' }[key]}
                  </label>
                  <input
                    type="text"
                    value={editContent.company[key]}
                    onChange={e => updateField(`company.${key}`, e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2B4C8C] focus:border-transparent"
                  />
                </div>
              ))}
            </div>
          )}

          {activeTab === 'ceo' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-[#0A1A2F] mb-4">CEO 인사말</h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">CEO 이름</label>
                <input
                  type="text"
                  value={editContent.ceo.name}
                  onChange={e => updateField('ceo.name', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2B4C8C] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">직함</label>
                <input
                  type="text"
                  value={editContent.ceo.title}
                  onChange={e => updateField('ceo.title', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2B4C8C] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">인사말 본문</label>
                <textarea
                  value={editContent.ceo.message}
                  onChange={e => updateField('ceo.message', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2B4C8C] focus:border-transparent resize-none"
                  rows={12}
                />
                <p className="text-xs text-gray-400 mt-1">\n으로 줄바꿈</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">CEO 사진</label>
                <div className="flex items-center gap-4">
                  <img src={editContent.ceo.photo} alt="CEO" className="w-24 h-32 object-cover rounded-lg border" />
                  <input type="file" accept="image/*" onChange={e => handleImageUpload('ceo.photo', e)} className="text-sm" />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'coreValues' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-[#0A1A2F] mb-4">핵심 가치</h2>
              {editContent.coreValues.map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 space-y-3">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-semibold text-gray-700">항목 {i + 1}</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <input
                      type="text"
                      value={item.icon}
                      onChange={e => updateField(`coreValues.${i}.icon`, e.target.value)}
                      placeholder="아이콘 (이모지)"
                      className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#2B4C8C]"
                    />
                    <input
                      type="text"
                      value={item.title}
                      onChange={e => updateField(`coreValues.${i}.title`, e.target.value)}
                      placeholder="제목"
                      className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#2B4C8C]"
                    />
                    <input
                      type="text"
                      value={item.desc}
                      onChange={e => updateField(`coreValues.${i}.desc`, e.target.value)}
                      placeholder="설명"
                      className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#2B4C8C]"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'statistics' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-[#0A1A2F] mb-4">핵심 실적 숫자</h2>
              {editContent.statistics.map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div>
                      <label className="text-xs text-gray-500">숫자</label>
                      <input
                        type="number"
                        value={item.number}
                        onChange={e => updateField(`statistics.${i}.number`, parseInt(e.target.value) || 0)}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#2B4C8C]"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-500">접미사</label>
                      <input
                        type="text"
                        value={item.suffix}
                        onChange={e => updateField(`statistics.${i}.suffix`, e.target.value)}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#2B4C8C]"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-500">레이블</label>
                      <input
                        type="text"
                        value={item.label}
                        onChange={e => updateField(`statistics.${i}.label`, e.target.value)}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#2B4C8C]"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'business' && (
            <div className="space-y-8">
              <h2 className="text-xl font-bold text-[#0A1A2F] mb-4">사업영역</h2>
              {Object.entries(editContent.businessPages).map(([key, data]) => (
                <div key={key} className="bg-gray-50 rounded-xl p-6 space-y-4">
                  <h3 className="font-bold text-lg text-[#0A1A2F]">{data.title}</h3>
                  <div>
                    <label className="text-xs text-gray-500">서비스 개요</label>
                    <textarea
                      value={data.overview}
                      onChange={e => updateField(`businessPages.${key}.overview`, e.target.value)}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#2B4C8C] resize-none"
                      rows={4}
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500">배너 이미지</label>
                    <div className="flex items-center gap-4 mt-1">
                      <img src={data.bannerImage} alt={data.title} className="w-32 h-20 object-cover rounded-lg border" />
                      <input type="file" accept="image/*" onChange={e => handleImageUpload(`businessPages.${key}.bannerImage`, e)} className="text-sm" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'recruitment' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-[#0A1A2F] mb-4">채용정보</h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">메인 타이틀</label>
                <input
                  type="text"
                  value={editContent.recruitment.title}
                  onChange={e => updateField('recruitment.title', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2B4C8C] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">서브 타이틀</label>
                <input
                  type="text"
                  value={editContent.recruitment.subtitle}
                  onChange={e => updateField('recruitment.subtitle', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2B4C8C] focus:border-transparent"
                />
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-3">모집 공고</h3>
                {editContent.recruitment.openings.map((job, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-4 mb-3">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                      <input value={job.title} onChange={e => updateField(`recruitment.openings.${i}.title`, e.target.value)} placeholder="직무명" className="px-3 py-2 border border-gray-200 rounded-lg text-sm" />
                      <input value={job.dept} onChange={e => updateField(`recruitment.openings.${i}.dept`, e.target.value)} placeholder="부서" className="px-3 py-2 border border-gray-200 rounded-lg text-sm" />
                      <input value={job.type} onChange={e => updateField(`recruitment.openings.${i}.type`, e.target.value)} placeholder="고용형태" className="px-3 py-2 border border-gray-200 rounded-lg text-sm" />
                      <input value={job.deadline} onChange={e => updateField(`recruitment.openings.${i}.deadline`, e.target.value)} placeholder="마감일" className="px-3 py-2 border border-gray-200 rounded-lg text-sm" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
