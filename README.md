# 삼원종합물류 반응형 웹사이트

> 신뢰와 전문성으로 대한민국 물류의 미래를 열어가는 삼원종합물류 기업 홈페이지

## 🚀 실행 방법

```bash
# 1. 의존성 설치
npm install

# 2. 개발 서버 실행
npm run dev
```

브라우저에서 `http://localhost:3000` 으로 접속합니다.

## 🔐 관리자 모드

### 진입 방법
1. 웹사이트 하단 **푸터 우측**의 "관리자" 텍스트를 클릭
2. 또는 직접 `/admin` 경로로 접속
3. **비밀번호: `1234`** 입력 후 로그인

### 관리 기능
- **문구 수정**: 메인 헤드라인, CEO 인사말, 회사 정보 등 주요 텍스트 편집
- **이미지 변경**: 히어로 배경, CEO 사진, 사업영역 배너 등 이미지 교체 (파일 업로드)
- **저장**: "저장" 버튼 클릭 시 즉시 반영
- **초기화**: 모든 수정 내용을 기본값으로 복원
- **로그아웃**: 관리자 모드 종료

> ⚠️ **보안 주의**: 비밀번호가 클라이언트 코드에 노출되어 있어 **데모/내부용**으로만 적합합니다.
> 운영 환경에서는 서버 측 인증(JWT, 세션 등)으로 교체하세요.

## 💾 데이터 영속성 (localStorage)

### 현재 방식
- 모든 수정 데이터는 **브라우저의 `localStorage`**에 저장됩니다.
- 새로고침하거나 브라우저를 닫았다 열어도 **수정 내용이 유지**됩니다.
- 페이지 로드 시 `localStorage`에 값이 있으면 그 값을, 없으면 기본값을 표시합니다.

### 한계
- `localStorage`는 **수정한 그 브라우저/기기에서만** 유지됩니다.
- 다른 사용자나 기기에서는 기본값이 표시됩니다.
- **용량 한계**: 약 5MB (큰 이미지 업로드 시 주의)

### 서버 연동 확장 방법
콘텐츠 데이터 로직은 `src/utils/storage.js`와 `src/context/ContentContext.jsx`에 집중되어 있습니다.
서버 API 연동 시:
1. `storage.js`의 `loadContent()`를 API GET 호출로 교체
2. `saveContent()`를 API POST/PUT 호출로 교체
3. `ContentContext.jsx`에서 초기 로딩을 `useEffect` + `fetch`로 변경
4. 이미지는 서버에 업로드 후 URL을 저장하는 방식으로 변경

## 📁 프로젝트 구조

```
src/
├── components/
│   ├── layout/          # Header, Footer, Layout
│   ├── common/          # ScrollReveal, CountUp, PageBanner
│   ├── home/            # Hero, CoreValues, Statistics, BusinessPreview, Partners, TruckOwnerBox
│   └── admin/           # (확장용)
├── pages/
│   ├── company/         # CEO, History, Subsidiaries, Equipment, Location
│   ├── business/        # Corporate, Distribution, Brokerage, Warehouse
│   ├── Home.jsx
│   ├── Recruitment.jsx
│   └── Admin.jsx
├── context/             # ContentContext (상태 관리)
├── data/                # defaultContent (기본 데이터)
├── hooks/               # useScrollReveal, useCountUp
└── utils/               # storage (localStorage 유틸)
```

## 🖼️ 이미지 교체

### 관리자 페이지에서 교체
1. `/admin` 접속 → 비밀번호 입력
2. 해당 섹션 탭 선택 → 이미지 파일 업로드
3. "저장" 클릭

### 코드에서 교체
`src/data/defaultContent.js`의 이미지 URL을 원하는 이미지로 변경

## 🚛 차주정보 연동

차주정보 박스는 `src/components/home/TruckOwnerBox.jsx`에 구현되어 있습니다.
현재는 클릭 시 알림만 표시됩니다.

```javascript
// TODO: 추후 차주정보 API 연동 / 외부 페이지 링크 연결
// handleClick 함수를 수정하여 API 호출 또는 라우팅을 구현하세요.
```

## 🛠️ 기술 스택

- **React 18** + **Vite** — 빠른 개발 및 빌드
- **Tailwind CSS v3** — 유틸리티 기반 스타일링
- **React Router v6** — SPA 라우팅
- **Intersection Observer** — 스크롤 애니메이션
- **Pretendard** — 한글 프리미엄 폰트
- **Inter** — 영문/숫자 폰트
