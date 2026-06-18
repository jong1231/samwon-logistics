import ScrollReveal from '../common/ScrollReveal'

import emartLogo from '../../assets/partners/emart.png'
import homeplusLogo from '../../assets/partners/homeplus.png'
import hyundaiDeptLogo from '../../assets/partners/hyundai_dept.png'
import megamartLogo from '../../assets/partners/megamart.png'
import glovisLogo from '../../assets/partners/glovis.png'
import cjLogisLogo from '../../assets/partners/cj_logis.png'
import hanexpressLogo from '../../assets/partners/hanexpress.png'
import dongwonLogo from '../../assets/partners/dongwon.png'
import haitaiLogo from '../../assets/partners/haitai.png'
import nonghyupLogo from '../../assets/partners/nonghyup.png'
import yonseiLogo from '../../assets/partners/yonsei.png'
import taeeunLogo from '../../assets/partners/taeeun.png'
import cretecLogo from '../../assets/partners/cretec.png'
import lotteLogisLogo from '../../assets/partners/lotte_logis.png'
import klpLogo from '../../assets/partners/klp.png'
import kctcLogo from '../../assets/partners/kctc.png'
import haeinLogo from '../../assets/partners/haein.png'
import msfoodLogo from '../../assets/partners/msfood.png'
import yuhanKimberlyLogo from '../../assets/partners/yuhan_kimberly.png'
import naturalwayLogo from '../../assets/partners/naturalway.png'
import kyongdongLogo from '../../assets/partners/kyongdong.png'
import geoyoungLogo from '../../assets/partners/geoyoung.png'
import bluepharmLogo from '../../assets/partners/bluepharm.png'
import nokwonLogo from '../../assets/partners/nokwon.png'

const partners = [
  { name: 'SSG.COM', logo: emartLogo },
  { name: '홈플러스', logo: homeplusLogo },
  { name: '현대백화점', logo: hyundaiDeptLogo },
  { name: '메가마트', logo: megamartLogo },
  { name: '현대글로비스', logo: glovisLogo },
  { name: 'CJ대한통운', logo: cjLogisLogo },
  { name: '한익스프레스', logo: hanexpressLogo },
  { name: '동원산업', logo: dongwonLogo },
  { name: '해태', logo: haitaiLogo },
  { name: '농협물류', logo: nonghyupLogo },
  { name: '연세우유', logo: yonseiLogo },
  { name: '태은물류', logo: taeeunLogo },
  { name: '크레텍책임', logo: cretecLogo },
  { name: '롯데로지스틱스', logo: lotteLogisLogo },
  { name: '한국로지스풀', logo: klpLogo },
  { name: 'KCTC', logo: kctcLogo },
  { name: '해인물류시스템', logo: haeinLogo },
  { name: '엠즈푸드시스템', logo: msfoodLogo },
  { name: '유한킴벌리', logo: yuhanKimberlyLogo },
  { name: '네추럴웨이', logo: naturalwayLogo },
  { name: '경동사', logo: kyongdongLogo },
  { name: '지오영', logo: geoyoungLogo },
  { name: '청십자약품', logo: bluepharmLogo },
  { name: '녹원메디칼', logo: nokwonLogo }
]

export default function Partners() {
  return (
    <section className="py-20 bg-slate-50 border-t border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-[#2B4C8C] font-semibold text-sm tracking-widest uppercase">Partners</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-3">주요 고객사·파트너</h2>
            <div className="w-16 h-1 bg-[#2B4C8C] mx-auto mt-4 rounded-full" />
          </div>
        </ScrollReveal>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10" />

        <div className="partners-track">
          {[...partners, ...partners].map((partner, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-4 w-48 h-24 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-slate-100/60 hover:shadow-md transition-shadow duration-300 px-4 py-2"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-[80%] max-w-[85%] object-contain opacity-95 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

