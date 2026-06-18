import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200/80 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          
          {/* Left: Logo & Company Details */}
          <div className="flex flex-col md:flex-row items-start gap-6 lg:max-w-4xl">
            <Link to="/" className="flex-shrink-0">
              <img 
                src={logo} 
                alt="삼원종합물류" 
                className="h-16 sm:h-20 md:h-24 object-contain transition-transform duration-300 hover:scale-105" 
              />
            </Link>
            
            <div className="space-y-3">
              <h3 className="font-extrabold text-xl text-slate-900 tracking-tight">삼원종합물류(주)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-6 gap-y-1.5 text-[14px] text-slate-500 font-medium">
                <div>
                  <span className="text-slate-400 font-semibold mr-2">사업자등록번호:</span>
                  <span className="text-slate-700">126-81-17267</span>
                </div>
                <div>
                  <span className="text-slate-400 font-semibold mr-2">대표자:</span>
                  <span className="text-slate-700">정종혁</span>
                </div>
                <div className="md:col-span-2 xl:col-span-2">
                  <span className="text-slate-400 font-semibold mr-2">주소:</span>
                  <span className="text-slate-700">서울특별시 서초구 효령로 328 아트리트21 6층</span>
                </div>
                <div>
                  <span className="text-slate-400 font-semibold mr-2">TEL:</span>
                  <span className="text-slate-700">02-598-3001</span>
                </div>
                <div>
                  <span className="text-slate-400 font-semibold mr-2">FAX:</span>
                  <span className="text-slate-700">02-597-2564</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Flat Links */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 lg:justify-end">
            <Link 
              to="/company/ceo" 
              className="text-[15px] font-bold text-slate-600 hover:text-[#2B4C8C] transition-colors"
            >
              회사소개
            </Link>
            <Link 
              to="/privacy" 
              className="text-[15px] font-extrabold text-[#2B4C8C] hover:text-[#1C325E] transition-colors underline underline-offset-4 decoration-2"
            >
              개인정보처리방침
            </Link>
            <Link 
              to="/terms" 
              className="text-[15px] font-bold text-slate-600 hover:text-[#2B4C8C] transition-colors"
            >
              약관및운영방침
            </Link>
          </div>

        </div>

        {/* Bottom copyright / admin link */}
        <div className="mt-12 pt-8 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} 삼원종합물류(주). All rights reserved.
          </p>
          <Link
            to="/admin"
            className="text-slate-300 hover:text-slate-500 text-[11px] transition-colors"
          >
            관리자
          </Link>
        </div>
      </div>
    </footer>
  )
}

