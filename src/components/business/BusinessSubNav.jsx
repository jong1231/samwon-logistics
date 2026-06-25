import { Link, useLocation } from 'react-router-dom'

export default function BusinessSubNav() {
  const location = useLocation()

  const navItems = [
    { label: '전체소개', path: '/business', icon: '📋' },
    { label: '기업물류', path: '/business/corporate', icon: '🚛' },
    { label: '유통물류', path: '/business/distribution', icon: '🚚' },
    { label: '주선·퀵서비스', path: '/business/brokerage', icon: '⚡' },
    { label: '창고운영', path: '/business/warehouse', icon: '🏭' },
    { label: '물류컨설팅', path: '/business/consulting', icon: '📊' },
  ]

  return (
    <div className="w-full py-6 bg-slate-50 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto justify-start md:justify-center [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-1 -my-1">
          <div className="flex bg-[#EEF2F6] p-1.5 rounded-2xl border border-slate-200/50 shadow-inner max-w-full">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center px-4 md:px-6 py-3 text-sm md:text-[15px] font-extrabold rounded-xl whitespace-nowrap transition-all duration-300 hover:scale-[1.02] ${
                    isActive
                      ? 'bg-white text-[#2B4C8C] shadow-md shadow-slate-200'
                      : 'text-slate-500 hover:text-slate-800 hover:bg-white/40'
                  }`}
                >
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
