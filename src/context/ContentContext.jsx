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
    return saved ? deepMerge(defaultContent, saved) : { ...defaultContent }
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
