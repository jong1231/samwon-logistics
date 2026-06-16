import { Link } from 'react-router-dom'
import { useContent } from '../../context/ContentContext'

export default function Footer() {
  const { content } = useContent()
  const { company } = content

  return (
    <footer className="bg-[#0A1A2F] text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#2B4C8C] rounded-lg flex items-center justify-center text-white font-extrabold text-sm">
                S
              </div>
              <div>
                <div className="font-bold text-lg">{company.name}</div>
                <div className="text-white/40 text-[10px] tracking-widest">{company.nameEn}</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mt-4">
              신뢰와 전문성으로 대한민국 물류의 미래를 열어가는<br />
              {company.name}입니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-base mb-5 text-white/90">바로가기</h3>
            <ul className="space-y-3">
              <li><Link to="/company/ceo" className="text-white/50 hover:text-white text-sm transition-colors">회사소개</Link></li>
              <li><Link to="/business/corporate" className="text-white/50 hover:text-white text-sm transition-colors">사업영역</Link></li>
              <li><Link to="/recruitment" className="text-white/50 hover:text-white text-sm transition-colors">채용정보</Link></li>
              <li><Link to="/company/location" className="text-white/50 hover:text-white text-sm transition-colors">찾아오시는 길</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-base mb-5 text-white/90">연락처</h3>
            <ul className="space-y-3 text-sm text-white/50">
              <li className="flex items-start gap-2">
                <span className="mt-0.5">📍</span>
                <span>{company.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>{company.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📠</span>
                <span>{company.fax}</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <span>{company.email}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white/30 text-xs text-center md:text-left">
              <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
              <p className="mt-1">사업자등록번호: {company.bizNumber} | 대표이사: {company.ceo}</p>
            </div>
            {/* 관리자 진입점 - 푸터 우측 중간에 눈에 띄지 않게 배치 */}
            <Link
              to="/admin"
              className="text-white/20 hover:text-white/40 text-[11px] transition-colors"
            >
              관리자
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
