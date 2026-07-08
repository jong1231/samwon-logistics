/**
 * localStorage 유틸리티
 * ⚠️ localStorage는 수정한 그 브라우저/기기에서만 유지됩니다.
 * 모든 방문자에게 동일하게 반영하려면 서버+DB가 필요합니다.
 * ⚠️ localStorage 용량 한계(약 5MB)가 있으므로, 큰 이미지는 업로드 전
 * 리사이즈하거나 운영 시 서버 저장으로 전환하세요.
 */

const STORAGE_KEY = 'samwon_content_v5'

export function loadContent() {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : null
  } catch (e) {
    console.error('콘텐츠 로드 실패:', e)
    return null
  }
}

export function saveContent(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    return true
  } catch (e) {
    console.error('콘텐츠 저장 실패:', e)
    if (e.name === 'QuotaExceededError') {
      alert('저장 공간이 부족합니다. 이미지 크기를 줄이거나 일부 데이터를 삭제해주세요.')
    }
    return false
  }
}

export function clearContent() {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch (e) {
    console.error('콘텐츠 삭제 실패:', e)
  }
}

/**
 * 이미지 파일을 base64 문자열로 변환
 * ⚠️ localStorage 용량(~5MB) 한계를 고려하여 큰 이미지는 리사이즈 권장
 * 운영 환경에서는 서버 업로드로 전환하세요.
 */
export function imageToBase64(file, maxWidth = 1200) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const img = new Image()
      img.onload = () => {
        // 이미지가 maxWidth보다 크면 리사이즈
        if (img.width > maxWidth) {
          const canvas = document.createElement('canvas')
          const ratio = maxWidth / img.width
          canvas.width = maxWidth
          canvas.height = img.height * ratio
          const ctx = canvas.getContext('2d')
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
          resolve(canvas.toDataURL('image/jpeg', 0.8))
        } else {
          resolve(e.target.result)
        }
      }
      img.onerror = reject
      img.src = e.target.result
    }
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}
