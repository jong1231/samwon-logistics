import { useContent } from '../../context/ContentContext'
import PageBanner from '../../components/common/PageBanner'
import ScrollReveal from '../../components/common/ScrollReveal'

export default function Location() {
  const { content } = useContent()
  const { location } = content

  const infoCards = [
    { icon: '📍', title: '주소', value: location.address },
    { icon: '🚇', title: '지하철', value: location.subway },
    { icon: '🚌', title: '버스', value: location.bus },
    { icon: '🅿️', title: '주차', value: location.parking },
  ]

  const naverMapUrl = `https://map.naver.com/v5/search/${encodeURIComponent(location.address)}`

  return (
    <>
      <PageBanner
        title="찾아오시는 길"
        subtitle="삼원종합물류 본사로 찾아오시는 길을 안내해 드립니다."
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
      />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Naver Map Integration Container */}
          <ScrollReveal>
            <div className="relative w-full h-80 md:h-96 bg-[#F1F5F9] rounded-3xl overflow-hidden border border-slate-200/60 shadow-sm mb-6 group">
              {/* Mock Map Background Grid & Streets */}
              <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:40px_40px]" />
              
              {/* Mock Subway & Landmark icons on the map */}
              <div className="absolute top-1/4 left-1/4 bg-amber-50 border border-amber-200 text-amber-800 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                🚇 남부터미널역 (3호선)
              </div>
              <div className="absolute bottom-1/4 right-1/4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                🌳 예술의전당
              </div>
              <div className="absolute top-1/3 right-1/3 bg-slate-100 border border-slate-300 text-slate-700 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                🏢 서초아트자이
              </div>

              {/* Main Pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
                <span className="relative flex h-6 w-6">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-6 w-6 bg-red-500 border-2 border-white shadow-md"></span>
                </span>
                <div className="bg-slate-900 text-white font-extrabold text-xs px-3 py-2 rounded-xl shadow-lg border border-slate-800 whitespace-nowrap mt-2 flex flex-col items-center">
                  <span>📍 삼원종합물류(주)</span>
                  <span className="text-[10px] text-slate-400 font-medium mt-0.5">아트리트21 6층</span>
                </div>
              </div>

              {/* Hover overlay link to Naver Maps */}
              <a 
                href={naverMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-slate-900/5 hover:bg-slate-900/20 transition-all duration-300 flex items-center justify-center cursor-pointer group"
              >
                <div className="bg-white/95 backdrop-blur-xs text-slate-800 font-extrabold px-6 py-3 rounded-2xl shadow-xl border border-slate-200/50 flex items-center gap-2 transform transition-transform group-hover:scale-105">
                  <span>🗺️ 네이버 지도로 위치 보기</span>
                  <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            </div>
          </ScrollReveal>

          {/* Naver Map Button row */}
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row justify-end gap-3 mb-12">
              <a
                href={naverMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#03C75A] hover:bg-[#02b350] text-white text-center font-bold rounded-xl shadow-sm transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <span>💚 네이버 지도로 길찾기</span>
              </a>
            </div>
          </ScrollReveal>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            <ScrollReveal>
              <div className="bg-[#0A1A2F] text-white rounded-2xl p-6 flex items-center gap-4 border border-slate-800">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="text-white/60 text-xs font-semibold">대표 전화</p>
                  <p className="font-extrabold text-lg mt-0.5">{location.tel}</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="bg-[#0A1A2F] text-white rounded-2xl p-6 flex items-center gap-4 border border-slate-800">
                <span className="text-2xl">📠</span>
                <div>
                  <p className="text-white/60 text-xs font-semibold">팩스</p>
                  <p className="font-extrabold text-lg mt-0.5">{location.fax}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {infoCards.map((card, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-[#F8FAFC] rounded-2xl p-6 flex items-start gap-4 hover:shadow-md transition-shadow border border-slate-100">
                  <span className="text-3xl flex-shrink-0">{card.icon}</span>
                  <div>
                    <h3 className="font-bold text-[#0A1A2F] mb-1">{card.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{card.value}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
