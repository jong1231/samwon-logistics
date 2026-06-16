import { useContent } from '../../context/ContentContext'

// TODO: 추후 차주정보 API 연동 / 외부 페이지 링크 연결
export default function TruckOwnerBox() {
  const { content } = useContent()
  const { truckOwner } = content

  const handleClick = () => {
    // TODO: 추후 차주정보 API 연동 / 외부 페이지 링크 연결
    alert('차주정보 페이지는 준비 중입니다.')
  }

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer group bg-white border-2 border-[#C9A66B]/30 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-[#C9A66B]/60 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 bg-gradient-to-br from-[#C9A66B] to-[#B8944F] rounded-xl flex items-center justify-center text-2xl shadow-md">
          🚛
        </div>
        <div>
          <h3 className="font-bold text-lg text-[#0A1A2F]">{truckOwner.title}</h3>
          <div className="w-8 h-0.5 bg-[#C9A66B] rounded-full mt-1" />
        </div>
      </div>
      <p className="text-gray-500 text-sm leading-relaxed mb-4">{truckOwner.desc}</p>
      <div className="flex items-center gap-2 text-[#C9A66B] font-semibold text-sm group-hover:gap-3 transition-all">
        <span>{truckOwner.ctaText}</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  )
}
