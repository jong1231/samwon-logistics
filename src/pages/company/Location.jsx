import { useContent } from '../../context/ContentContext'
import PageBanner from '../../components/common/PageBanner'
import ScrollReveal from '../../components/common/ScrollReveal'

export default function Location() {
  const { content } = useContent()
  const { location } = content

  // Naver Map Search URL for the address
  const naverMapUrl = `https://map.naver.com/v5/search/${encodeURIComponent(location.address)}`
  // Kakao Map Search URL
  const kakaoMapUrl = `https://map.kakao.com/?q=${encodeURIComponent(location.address)}`
  // Google Map Embed URL - Clean query with company name and high zoom to pinpoint the building
  const googleMapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent('서울특별시 서초구 효령로 328 삼원종합물류')}&t=&z=18&ie=UTF8&iwloc=&output=embed`

  return (
    <>
      <PageBanner
        title="찾아오시는 길"
        subtitle="삼원종합물류 본사로 찾아오시는 길을 안내해 드립니다."
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
      />

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-[#2B4C8C] font-extrabold text-xs tracking-widest uppercase">Location & Map</span>
              <h2 className="text-3xl font-extrabold text-[#0A1A2F] mt-2">삼원종합물류 본사 위치</h2>
              <div className="w-12 h-1 bg-[#2B4C8C] mx-auto mt-4 rounded-full" />
            </div>
          </ScrollReveal>

          {/* 1. Map Container - Shows directly */}
          <ScrollReveal>
            <div className="relative w-full h-[400px] sm:h-[480px] bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 shadow-xl group">
              <iframe
                title="삼원종합물류 본사 지도"
                src={googleMapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </ScrollReveal>

          {/* Spacing below the map */}
          <div className="h-12" />

          {/* 2. Map Quick Link Buttons for Naver & Kakao Navigation */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <a
                href={naverMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#03C75A] hover:bg-[#02b350] text-white font-extrabold rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm"
              >
                <span>💚 네이버 지도로 열기</span>
              </a>
              <a
                href={kakaoMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#FEE500] hover:bg-[#fddb00] text-[#191919] font-extrabold rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm"
              >
                <span>💛 카카오맵으로 열기</span>
              </a>
            </div>
          </ScrollReveal>

          {/* 3. Detailed Transportation Info Section */}
          <ScrollReveal>
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm">
              <h3 className="text-xl font-extrabold text-[#0A1A2F] mb-8 pb-4 border-b border-slate-200 flex items-center gap-2">
                🏢 상세 교통 및 주차 안내
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                
                {/* Left Side: Address & Parking */}
                <div className="space-y-8">
                  {/* Address Card */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#2B4C8C]/5 rounded-2xl flex items-center justify-center text-xl text-[#2B4C8C] flex-shrink-0">
                      📍
                    </div>
                    <div>
                      <h4 className="font-extrabold text-[#0A1A2F] text-base mb-1.5">본사 주소</h4>
                      <p className="text-slate-600 text-sm font-semibold leading-relaxed">
                        {location.address}
                      </p>
                      <div className="flex gap-4 mt-2 text-xs text-slate-500 font-medium">
                        <span>대표전화: {location.tel}</span>
                        <span>팩스: {location.fax}</span>
                      </div>
                    </div>
                  </div>

                  {/* Parking Card */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#2B4C8C]/5 rounded-2xl flex items-center justify-center text-xl text-[#2B4C8C] flex-shrink-0">
                      🅿️
                    </div>
                    <div>
                      <h4 className="font-extrabold text-[#0A1A2F] text-base mb-1.5">주차 안내</h4>
                      <p className="text-slate-600 text-sm font-semibold leading-relaxed">
                        {location.parking}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Side: Public Transit (Subway & Bus) */}
                <div className="space-y-8">
                  {/* Subway Card */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#2B4C8C]/5 rounded-2xl flex items-center justify-center text-xl text-[#2B4C8C] flex-shrink-0">
                      🚇
                    </div>
                    <div>
                      <h4 className="font-extrabold text-[#0A1A2F] text-base mb-1.5">지하철로 오시는 길</h4>
                      <p className="text-slate-600 text-sm font-semibold leading-relaxed">
                        {location.subway}
                      </p>
                    </div>
                  </div>

                  {/* Bus Card */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#2B4C8C]/5 rounded-2xl flex items-center justify-center text-xl text-[#2B4C8C] flex-shrink-0">
                      🚌
                    </div>
                    <div>
                      <h4 className="font-extrabold text-[#0A1A2F] text-base mb-1.5">버스로 오시는 길</h4>
                      <p className="text-slate-600 text-sm font-semibold leading-relaxed">
                        {location.bus}
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>
    </>
  )
}
