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

  return (
    <>
      <PageBanner
        title="찾아오시는 길"
        subtitle="삼원종합물류 본사 위치 안내"
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
      />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Map Placeholder */}
          <ScrollReveal>
            {/* TODO: 카카오맵 API 연동 */}
            <div className="w-full h-80 md:h-96 bg-gray-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-200 mb-12">
              <div className="text-center">
                <div className="text-5xl mb-4">🗺️</div>
                <p className="text-gray-400 font-semibold text-lg">KAKAO MAP</p>
                <p className="text-gray-300 text-sm mt-1">카카오맵 API 연동 영역</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            <ScrollReveal>
              <div className="bg-[#0A1A2F] text-white rounded-2xl p-6 flex items-center gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="text-white/60 text-sm">대표번호</p>
                  <p className="font-bold text-lg">{location.tel}</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="bg-[#0A1A2F] text-white rounded-2xl p-6 flex items-center gap-4">
                <span className="text-2xl">📠</span>
                <div>
                  <p className="text-white/60 text-sm">팩스</p>
                  <p className="font-bold text-lg">{location.fax}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {infoCards.map((card, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-[#F5F7FA] rounded-2xl p-6 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <span className="text-3xl flex-shrink-0">{card.icon}</span>
                  <div>
                    <h3 className="font-bold text-[#0A1A2F] mb-1">{card.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{card.value}</p>
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
