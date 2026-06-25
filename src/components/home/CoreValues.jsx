import { useContent } from '../../context/ContentContext'
import ScrollReveal from '../common/ScrollReveal'

export default function CoreValues() {
  const { content } = useContent()

  return (
    <section className="py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-[#2B4C8C] font-semibold text-sm tracking-widest uppercase">Core Competencies</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1A2F] mt-3">핵심 역량</h2>
            <div className="w-16 h-1 bg-[#2B4C8C] mx-auto mt-4 rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.coreValues.map((item, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group h-full">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#0A1A2F] mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
                <div className="w-12 h-1 bg-[#2B4C8C] mt-6 rounded-full group-hover:w-20 transition-all duration-300" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
