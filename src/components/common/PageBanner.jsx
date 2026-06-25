import { Link, useLocation } from 'react-router-dom'

const breadcrumbMap = {
  '/company': '회사소개',
  '/company/intro': '회사소개',
  '/company/history': '회사연혁',
  '/company/status': '주요현황',
  '/company/location': '찾아오시는 길',
  '/business': '사업영역',
  '/business/corporate': '기업물류',
  '/business/distribution': '유통물류',
  '/business/brokerage': '주선·퀵서비스',
  '/business/warehouse': '창고운영',
  '/business/consulting': '물류컨설팅',
  '/recruitment': '채용정보',
  '/recruitment/talent': '인재상',
  '/recruitment/jobs': '차주구인',
}

export default function PageBanner({ title, subtitle, backgroundImage }) {
  const location = useLocation()
  
  let displayTitle = title
  if (location.pathname.startsWith('/company')) {
    displayTitle = '회사소개'
  } else if (location.pathname.startsWith('/business')) {
    displayTitle = breadcrumbMap[location.pathname] || '사업영역'
  } else if (location.pathname.startsWith('/recruitment')) {
    displayTitle = '인재상'
  }

  return (
    <section className="relative h-64 md:h-80 pt-24 flex items-center justify-center overflow-hidden">
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt={displayTitle}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1A2F] to-[#2B4C8C]" />
      )}
      <div className="page-banner-overlay" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-wide drop-shadow-md">
          {displayTitle}
        </h1>
      </div>
    </section>
  )
}
