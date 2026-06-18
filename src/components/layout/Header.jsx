import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.png'

const menuItems = [
  {
    label: '회사소개',
    path: '/company',
    children: [
      { label: '회사소개', path: '/company/intro' },
      { label: '회사연혁', path: '/company/history' },
      { label: '주요현황', path: '/company/status' },
      { label: '찾아오시는 길', path: '/company/location' },
    ],
  },
  {
    label: '사업영역',
    path: '/business',
    children: [
      { label: '기업물류', path: '/business/corporate' },
      { label: '유통물류', path: '/business/distribution' },
      { label: '주선·퀵서비스', path: '/business/brokerage' },
      { label: '창고운영', path: '/business/warehouse' },
    ],
  },
  {
    label: '채용정보',
    path: '/recruitment',
    children: [
      { label: '인재상', path: '/recruitment/talent' },
      { label: '차주구인', path: '/recruitment/jobs' },
    ],
  },
  {
    label: '고객센터',
    path: '/contact',
    children: [],
  },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isActive = (path) => location.pathname.startsWith(path)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex lg:grid lg:grid-cols-3 items-center justify-between h-24">
          
          {/* Left: Logo */}
          <div className="flex items-center h-full">
            <Link to="/" className="flex items-center gap-2 group h-full">
              <img src={logo} alt="삼원종합물류" className="h-9 sm:h-11 md:h-[46px] object-contain transition-transform duration-300 group-hover:scale-105" />
            </Link>
          </div>

          {/* Center: Desktop Navigation (Larger & Centered) */}
          <nav className="hidden lg:flex items-center justify-self-center gap-12">
            {menuItems.map((item) => (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.path)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.children.length > 0 ? item.children[0].path : item.path}
                  className={`px-5 py-2 rounded-lg text-[17px] font-extrabold whitespace-nowrap transition-all duration-200 ${
                    isActive(item.path)
                      ? 'text-[#2B4C8C] bg-[#2B4C8C]/5'
                      : 'text-slate-600 hover:text-[#2B4C8C] hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </Link>

                {/* Dropdown */}
                {item.children.length > 0 && (
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-300 ${
                      activeDropdown === item.path
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}
                  >
                    <div className="bg-white rounded-xl shadow-2xl shadow-slate-200/50 py-2 min-w-[180px] border border-slate-100">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block px-5 py-2.5 text-sm font-semibold transition-colors ${
                            location.pathname === child.path
                              ? 'text-[#2B4C8C] bg-[#2B4C8C]/5 font-bold'
                              : 'text-slate-700 hover:text-[#2B4C8C] hover:bg-slate-50'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right: Driver Info & Mobile Hamburger */}
          <div className="flex items-center justify-self-end gap-3">
            {/* 에스원퀵 하이라이트 배너 */}
            <a
              href="https://s1quick.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex px-4 py-2.5 bg-[#2B4C8C] hover:bg-[#1E3563] text-white text-[14px] font-bold rounded-lg transition-all duration-300 items-center gap-2 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            >
              <span>⚡ 에스원퀵</span>
            </a>

            {/* 차주정보 하이라이트 배너 */}
            <button
              onClick={() => alert('차주정보 페이지는 준비 중입니다.')}
              className="hidden lg:flex px-4 py-2.5 bg-[#2B4C8C] hover:bg-[#1E3563] text-white text-[14px] font-bold rounded-lg transition-all duration-300 items-center gap-2 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            >
              <span>🚛 차주정보</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center text-slate-800"
              aria-label="메뉴"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span className={`block h-0.5 bg-slate-800 rounded transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 bg-slate-800 rounded transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 bg-slate-800 rounded transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-slate-900/40 backdrop-blur-xs z-40 transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
      />
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-72 bg-white z-40 transform transition-transform duration-300 shadow-2xl border-l border-slate-100 ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="pt-24 px-6 overflow-y-auto h-full pb-8">
          {menuItems.map((item) => (
            <div key={item.path} className="mb-4">
              {item.children.length > 0 ? (
                <>
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.path ? null : item.path)}
                    className="w-full flex items-center justify-between text-slate-800 font-bold text-base py-3 border-b border-slate-100"
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 text-slate-500 transition-transform ${activeDropdown === item.path ? 'rotate-180' : ''}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === item.path ? 'max-h-96' : 'max-h-0'}`}>
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        onClick={() => setMobileOpen(false)}
                        className={`block py-2.5 pl-4 text-sm font-medium ${
                          location.pathname === child.path ? 'text-[#2B4C8C] font-semibold' : 'text-slate-600 hover:text-[#2B4C8C]'
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="block text-slate-800 font-bold text-base py-3 border-b border-slate-100"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          {/* 모바일 퀵 링크 & 차주정보 버튼 */}
          <div className="mt-8 flex flex-col gap-3">
            <a
              href="https://s1quick.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-[#2B4C8C] text-white text-center font-bold rounded-xl shadow-sm hover:bg-[#1E3563] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>⚡ 에스원퀵</span>
            </a>
            <button
              onClick={() => {
                setMobileOpen(false)
                alert('차주정보 페이지는 준비 중입니다.')
              }}
              className="w-full py-3 bg-[#2B4C8C] text-white text-center font-bold rounded-xl shadow-sm hover:bg-[#1E3563] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>🚛 차주정보</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
