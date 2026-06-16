import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const menuItems = [
  {
    label: '회사소개',
    path: '/company',
    children: [
      { label: 'CEO 인사말', path: '/company/ceo' },
      { label: '주요 연혁', path: '/company/history' },
      { label: '계열사 현황', path: '/company/subsidiaries' },
      { label: '장비 보유 현황', path: '/company/equipment' },
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
    children: [],
  },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen
          ? 'bg-[#0A1A2F]/95 backdrop-blur-md shadow-lg shadow-black/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-[#2B4C8C] rounded-lg flex items-center justify-center text-white font-extrabold text-lg group-hover:bg-[#2F2A6E] transition-colors">
              S
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-tight tracking-tight">삼원종합물류</span>
              <span className="text-white/50 text-[10px] font-medium tracking-widest">SAMWON LOGISTICS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.path)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.children.length > 0 ? item.children[0].path : item.path}
                  className={`px-5 py-2.5 rounded-lg text-[15px] font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-white bg-white/10'
                      : 'text-white/75 hover:text-white hover:bg-white/5'
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
                    <div className="bg-white rounded-xl shadow-2xl shadow-black/20 py-2 min-w-[200px] border border-gray-100">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block px-5 py-2.5 text-sm transition-colors ${
                            location.pathname === child.path
                              ? 'text-[#2B4C8C] bg-blue-50 font-semibold'
                              : 'text-gray-700 hover:text-[#2B4C8C] hover:bg-gray-50'
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

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center z-50"
            aria-label="메뉴"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-white rounded transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-white rounded transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-white rounded transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
      />
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-72 bg-[#0A1A2F] z-40 transform transition-transform duration-300 shadow-2xl ${
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
                    className="w-full flex items-center justify-between text-white/90 font-semibold text-base py-3 border-b border-white/10"
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform ${activeDropdown === item.path ? 'rotate-180' : ''}`}
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
                        className={`block py-2.5 pl-4 text-sm ${
                          location.pathname === child.path ? 'text-[#2B4C8C] font-semibold' : 'text-white/60 hover:text-white'
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
                  className="block text-white/90 font-semibold text-base py-3 border-b border-white/10"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}
