import { useContent } from '../../context/ContentContext'
import PageBanner from '../../components/common/PageBanner'
import ScrollReveal from '../../components/common/ScrollReveal'

import ssgLogo from '../../assets/partners/ssg.svg'
import homeplusLogo from '../../assets/partners/homeplus.png'
import glovisLogo from '../../assets/partners/glovis.svg'
import hyundaiDeptLogo from '../../assets/partners/hyundai_dept.svg'
import haitaiLogo from '../../assets/partners/haitai.svg'
import hanexpressLogo from '../../assets/partners/hanexpress.png'
import dongwonLogo from '../../assets/partners/dongwon.svg'
import nonghyupLogo from '../../assets/partners/nonghyup.svg'
import yonseiLogo from '../../assets/partners/yonsei.png'
import geoyoungLogo from '../../assets/partners/geoyoung.png'
import taeeunLogo from '../../assets/partners/taeeun.png'
import naturalwayLogo from '../../assets/partners/naturalway.png'
import cretecLogo from '../../assets/partners/cretec.gif'
import lotteLogisLogo from '../../assets/partners/lotte.svg'
import yuhanKimberlyLogo from '../../assets/partners/yuhan_kimberly.png'
import yuhanLogo from '../../assets/partners/yuhan.svg'
import msfoodLogo from '../../assets/partners/msfood.png'
import kctcLogo from '../../assets/partners/kctc.png'
import bluepharmLogo from '../../assets/partners/bluepharm.png'
import cowayLogo from '../../assets/partners/coway.svg'

const partners = [
  { name: 'SSG.COM', logo: ssgLogo },
  { name: '홈플러스', logo: homeplusLogo },
  { name: '현대글로비스', logo: glovisLogo },
  { name: '현대백화점', logo: hyundaiDeptLogo },
  { name: '해태', logo: haitaiLogo },
  { name: '한익스프레스', logo: hanexpressLogo },
  { name: '동원산업', logo: dongwonLogo },
  { name: '농협물류', logo: nonghyupLogo },
  { name: '연세우유', logo: yonseiLogo },
  { name: '지오영', logo: geoyoungLogo },
  { name: '태은물류', logo: taeeunLogo },
  { name: '네추럴웨이', logo: naturalwayLogo },
  { name: '크레텍책임', logo: cretecLogo },
  { name: '롯데로지스틱스', logo: lotteLogisLogo },
  { name: '유한킴벌리', logo: yuhanKimberlyLogo },
  { name: '유한양행', logo: yuhanLogo },
  { name: '엠즈푸드시스템', logo: msfoodLogo },
  { name: 'KCTC', logo: kctcLogo },
  { name: '청십자약품', logo: bluepharmLogo },
  { name: '코웨이', logo: cowayLogo }
]

export default function Status() {
  const { content } = useContent()
  const totalCount = content.equipment.reduce((sum, e) => sum + e.count, 0)

  return (
    <>
      <PageBanner
        title="주요현황"
        subtitle="삼원종합물류의 탄탄한 운송 인프라와 신뢰할 수 있는 비즈니스 파트너들을 소개합니다"
        backgroundImage="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1920&q=80"
      />

      {/* 장비 보유 현황 */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-[#2B4C8C] font-semibold text-sm tracking-widest uppercase bg-[#2B4C8C]/5 px-3 py-1 rounded-full">
                Equipment Fleet
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1A2F] mt-3">
                장비 보유 현황
              </h2>
              <div className="w-16 h-1 bg-[#2B4C8C] mx-auto mt-4 rounded-full" />
              <p className="text-slate-500 text-sm mt-4">
                다양한 규격과 용도의 전문 화물 운송 차량을 상시 운용하고 있습니다.
              </p>
            </div>
          </ScrollReveal>

          {/* Total Summary */}
          <ScrollReveal>
            <div className="bg-gradient-to-r from-[#0A1A2F] to-[#2B4C8C] rounded-3xl p-8 md:p-10 text-center mb-12 shadow-md">
              <p className="text-white/60 text-xs font-semibold tracking-wider uppercase mb-1">Total Active Fleet</p>
              <div className="text-4xl md:text-6xl font-extrabold text-white mb-2">
                {totalCount}<span className="text-2xl text-white/70 ml-1">대+</span>
              </div>
              <p className="text-white/50 text-sm">기업물류, 유통물류, HACCP 콜드체인 및 특수 운송 완벽 지원</p>
            </div>
          </ScrollReveal>

          {/* Equipment Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.equipment.map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-[#F8FAFC] border border-slate-100 rounded-2xl p-6 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-[#0A1A2F] mb-1">{item.type}</h3>
                  <div className="text-3xl font-extrabold text-[#2B4C8C] my-3">
                    {item.count}<span className="text-sm text-slate-400 font-semibold ml-1">대</span>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 주요 거래처 및 파트너 */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-[#2B4C8C] font-semibold text-sm tracking-widest uppercase bg-[#2B4C8C]/5 px-3 py-1 rounded-full">
                Partners
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1A2F] mt-3">
                파트너사
              </h2>
              <div className="w-16 h-1 bg-[#2B4C8C] mx-auto mt-4 rounded-full" />
              <p className="text-slate-500 text-sm mt-4">
                대한민국 대표 대기업 및 유통 브랜드들이 삼원종합물류와 함께 신뢰를 만들어 가고 있습니다.
              </p>
            </div>
          </ScrollReveal>
 
          {/* Partners Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {partners.map((partner, i) => (
              <ScrollReveal key={i} delay={(i % 5) * 80}>
                <div className="bg-white rounded-2xl border border-slate-200/40 p-4 h-24 flex items-center justify-center shadow-xs hover:shadow-md transition-all duration-300">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className={`object-contain opacity-90 hover:opacity-100 transition-opacity ${
                      partner.name === '현대글로비스' ? 'max-h-[90%] max-w-[95%] scale-135' : 'max-h-[70%] max-w-[80%]'
                    }`}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
