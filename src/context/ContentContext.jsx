import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { defaultContent } from '../data/defaultContent'
import { loadContent, saveContent, clearContent } from '../utils/storage'

const ContentContext = createContext(null)

/**
 * 두 객체를 깊은 병합 (deep merge)
 * 저장된 데이터에 새로운 기본값 필드가 추가되었을 때를 대비
 */
function deepMerge(defaults, saved) {
  if (!saved) return { ...defaults }
  const result = { ...defaults }
  for (const key of Object.keys(saved)) {
    if (
      saved[key] &&
      typeof saved[key] === 'object' &&
      !Array.isArray(saved[key]) &&
      defaults[key] &&
      typeof defaults[key] === 'object' &&
      !Array.isArray(defaults[key])
    ) {
      result[key] = deepMerge(defaults[key], saved[key])
    } else {
      result[key] = saved[key]
    }
  }
  return result
}

export function ContentProvider({ children }) {
  const [content, setContent] = useState(() => {
    const saved = loadContent()
    const merged = saved ? deepMerge(defaultContent, saved) : { ...defaultContent }
    
    // Auto-migrate statistics from 350 to 1000 if stored in local storage
    let migrated = false
    if (merged.statistics && merged.statistics[3] && merged.statistics[3].number === 350) {
      merged.statistics[3].number = 1000
      migrated = true
    }

    // Auto-migrate parking information to the new mechanical parking text if stored as the old text
    if (merged.location && (merged.location.parking === '건물 주차장 이용 가능 (방문 시 무료 주차 도장 발급)' || !merged.location.parking)) {
      merged.location.parking = '건물 기계식 주차장 이용 가능(방문 시 무료주차 도장 발급)'
      migrated = true
    }
    
    // Migrate businessPage images to local high-res generated images if they are Unsplash placeholders
    const businessKeys = ['corporate', 'distribution', 'brokerage', 'warehouse']
    businessKeys.forEach(key => {
      if (merged.businessPages && merged.businessPages[key] && merged.businessPages[key].image && typeof merged.businessPages[key].image === 'string' && merged.businessPages[key].image.includes('unsplash.com')) {
        merged.businessPages[key].image = defaultContent.businessPages[key].image
        migrated = true
      }
    })
    
    // Migrate CEO message: remove literal "\n" text (double-escaped) → real newlines
    if (merged.ceo && typeof merged.ceo.message === 'string' && merged.ceo.message.includes('\\n')) {
      merged.ceo.message = merged.ceo.message.replace(/\\n/g, '\n')
      migrated = true
    }

    // Migrate distribution strengths: upgrade to 4-card layout with 냉장·냉동 전문배송 + new 퀵커머스 desc
    if (
      merged.businessPages &&
      merged.businessPages.distribution &&
      Array.isArray(merged.businessPages.distribution.strengths) &&
      merged.businessPages.distribution.strengths.length < 4
    ) {
      merged.businessPages.distribution.strengths = defaultContent.businessPages.distribution.strengths
      migrated = true
    }

    // Migrate contactPage: ensure faqs/processSteps exist so admin edits reflect on the Contact page
    if (!merged.contactPage) {
      merged.contactPage = defaultContent.contactPage
      migrated = true
    } else {
      if (!Array.isArray(merged.contactPage.faqs)) {
        merged.contactPage.faqs = defaultContent.contactPage.faqs
        migrated = true
      }
      if (!Array.isArray(merged.contactPage.processSteps)) {
        merged.contactPage.processSteps = defaultContent.contactPage.processSteps
        migrated = true
      }
    }

    if (migrated) {
      saveContent(merged)
    }
    
    return merged
  })

  const updateContent = useCallback((newContent) => {
    setContent(newContent)
    saveContent(newContent)
  }, [])

  const updateField = useCallback((path, value) => {
    setContent(prev => {
      const keys = path.split('.')
      const newContent = JSON.parse(JSON.stringify(prev))
      let obj = newContent
      for (let i = 0; i < keys.length - 1; i++) {
        if (obj[keys[i]] === undefined) obj[keys[i]] = {}
        obj = obj[keys[i]]
      }
      obj[keys[keys.length - 1]] = value
      saveContent(newContent)
      return newContent
    })
  }, [])

  const resetContent = useCallback(() => {
    clearContent()
    setContent({ ...defaultContent })
  }, [])

  return (
    <ContentContext.Provider value={{ content, updateContent, updateField, resetContent }}>
      {children}
    </ContentContext.Provider>
  )
}

/**
 * 콘텐츠 상태를 사용하는 커스텀 훅
 * 추후 서버 API로 교체 시 이 훅의 내부 로직만 변경하면 됨
 */
export function useContent() {
  const context = useContext(ContentContext)
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider')
  }
  return context
}

export default ContentContext
