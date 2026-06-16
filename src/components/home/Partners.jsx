import ScrollReveal from '../common/ScrollReveal'

const partners = [
  '파트너사 A', '파트너사 B', '파트너사 C', '파트너사 D',
  '파트너사 E', '파트너사 F', '파트너사 G', '파트너사 H',
]

export default function Partners() {
  return (
    <section className="py-20 bg-[#F5F7FA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-[#2B4C8C] font-semibold text-sm tracking-widest uppercase">Partners</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1A2F] mt-3">주요 고객사·파트너</h2>
            <div className="w-16 h-1 bg-[#2B4C8C] mx-auto mt-4 rounded-full" />
          </div>
        </ScrollReveal>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F5F7FA] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F5F7FA] to-transparent z-10" />

        <div className="partners-track">
          {[...partners, ...partners].map((name, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-4 w-48 h-24 bg-white rounded-xl shadow-sm flex items-center justify-center border border-gray-100 hover:shadow-md transition-shadow"
            >
              <span className="text-gray-400 font-semibold text-sm">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
