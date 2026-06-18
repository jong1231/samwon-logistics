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
  '/recruitment': '채용정보',
  '/recruitment/talent': '인재상',
  '/recruitment/jobs': '차주구인',
}

export default function PageBanner({ title, subtitle, backgroundImage }) {
  const location = useLocation()
  const pathParts = location.pathname.split('/').filter(Boolean)

  const breadcrumbs = [{ label: '홈', path: '/' }]
  if (pathParts.length >= 1) {
    const sectionPath = '/' + pathParts[0]
    breadcrumbs.push({ label: breadcrumbMap[sectionPath] || pathParts[0], path: sectionPath })
  }
  if (pathParts.length >= 2) {
    const fullPath = '/' + pathParts.join('/')
    breadcrumbs.push({ label: breadcrumbMap[fullPath] || pathParts[1], path: fullPath })
  }

  return (
    <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1A2F] to-[#2B4C8C]" />
      )}
      <div className="page-banner-overlay" />
      <div className="relative z-10 text-center px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-2 text-sm text-white/60 mb-4">
          {breadcrumbs.map((crumb, i) => (
            <span key={crumb.path} className="flex items-center gap-2">
              {i > 0 && <span className="text-white/30">/</span>}
              {i < breadcrumbs.length - 1 ? (
                <Link to={crumb.path} className="hover:text-white transition-colors">{crumb.label}</Link>
              ) : (
                <span className="text-white/90">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">{title}</h1>
        {subtitle && <p className="text-lg text-white/70 mt-3 max-w-xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  )
}
