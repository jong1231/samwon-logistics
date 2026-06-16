import { useContent } from '../../context/ContentContext'
import PageBanner from '../../components/common/PageBanner'
import ScrollReveal from '../../components/common/ScrollReveal'

export default function CeoMessage() {
  const { content } = useContent()
  const { ceo } = content

  return (
    <>
      <PageBanner
        title="CEO 인사말"
        subtitle="삼원종합물류의 비전과 철학을 소개합니다"
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
      />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* CEO Photo */}
            <ScrollReveal direction="left" className="lg:col-span-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#2B4C8C]/20 to-[#2F2A6E]/10 rounded-2xl" />
                <img
                  src={ceo.photo}
                  alt={`${ceo.name} ${ceo.title}`}
                  className="relative w-full aspect-[3/4] object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-[#2B4C8C] text-white px-6 py-3 rounded-xl shadow-lg">
                  <div className="font-bold text-lg">{ceo.name}</div>
                  <div className="text-white/70 text-sm">{ceo.title}</div>
                </div>
              </div>
            </ScrollReveal>

            {/* Message */}
            <ScrollReveal direction="right" className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-12 bg-[#2B4C8C] rounded-full" />
                <h2 className="text-2xl md:text-3xl font-bold text-[#0A1A2F]">인사말</h2>
              </div>

              <div className="prose prose-lg max-w-none">
                {ceo.message.split('\n').map((paragraph, i) => (
                  <p key={i} className={`text-gray-600 leading-loose ${paragraph === '' ? 'h-4' : ''}`}>
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-gray-100 text-right">
                <p className="text-[#2B4C8C] font-bold text-xl">{content.company.name}</p>
                <p className="text-gray-500 mt-1">{ceo.title} <span className="font-semibold text-[#0A1A2F]">{ceo.name}</span></p>
                <div className="w-24 h-0.5 bg-[#2B4C8C] ml-auto mt-4 rounded-full" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
