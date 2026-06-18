import PageBanner from '../components/common/PageBanner'
import ScrollReveal from '../components/common/ScrollReveal'

export default function TermsOfService() {
  return (
    <>
      <PageBanner
        title="약관 및 운영방침"
        subtitle="삼원종합물류(주)의 서비스 이용 약관 및 투명한 운영 정책을 알려드립니다"
        backgroundImage="https://images.unsplash.com/photo-1450133064473-71024230f91b?w=1920&q=80"
      />

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 text-slate-700 leading-relaxed space-y-8">
              <div>
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 mb-4">제 1 조 (목적)</h2>
                <p className="text-sm md:text-base">
                  본 약관은 삼원종합물류(주)(이하 '회사'라 함)가 제공하는 화물 운송 주선 및 물류 창고 보관 서비스 등 홈페이지를 통해 제공되는 관련 부가 서비스(이하 '서비스'라 함)를 이용함에 있어, 회사와 이용자(화주 및 차주 등) 간의 권리, 의무 및 책임 사항, 서비스 이용 조건 등을 규정함을 목적으로 합니다.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 mb-4">제 2 조 (용어의 정의)</h2>
                <p className="text-sm">
                  본 약관에서 사용하는 용어의 정의는 다음과 같습니다.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
                  <li><strong>이용자</strong>: 본 약관에 동의하고 회사가 제공하는 서비스를 이용하는 화주, 차주 및 일반 문의자를 말합니다.</li>
                  <li><strong>화주</strong>: 회사에 화물 운송 또는 보관을 의뢰하는 개인 또는 법인 고객을 말합니다.</li>
                  <li><strong>차주</strong>: 회사로부터 화물 운송 건을 배차받아 운송을 수행하는 개별 또는 법인 화물 운송 사업자를 말합니다.</li>
                  <li><strong>운송 주선 서비스</strong>: 회사가 화주와 차주 간의 원활한 화물 운송 계약이 성립되도록 중개 및 관리하는 서비스를 말합니다.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 mb-4">제 3 조 (서비스의 제공 및 변경)</h2>
                <p className="text-sm">
                  회사는 다음과 같은 서비스를 제공합니다.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
                  <li>기업 물류 및 일반 화물 운송 주선 업무</li>
                  <li>물류 보관창고 입출고 및 재고관리 안내</li>
                  <li>온라인을 통한 견적 문의 및 정산 처리 지원</li>
                  <li>기타 회사가 추가로 개발하거나 다른 회사와의 제휴 계약 등을 통해 이용자에게 제공하는 일체의 서비스</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 mb-4">제 4 조 (이용자의 의무)</h2>
                <p className="text-sm font-semibold text-slate-800 mb-2">가. 화주의 의무</p>
                <p className="text-sm mb-4">
                  화주는 운송을 의뢰하는 화물의 종류, 수량, 중량, 상하차지 주소 등 운송 정보의 정확성을 보장해야 합니다. 허위 정보 제공으로 인한 오배송 또는 지연에 대해서는 회사가 책임을 지지 않습니다.
                </p>
                <p className="text-sm font-semibold text-slate-800 mb-2">나. 차주의 의무</p>
                <p className="text-sm mb-4">
                  차주는 지정된 시간과 장소에 화물을 안전하게 상차 및 하차하여야 하며, 운송 도중 발생할 수 있는 사고나 파손 예방을 위해 관련 법규를 준수하고 안전조치를 취해야 합니다. 배차 확정 후 무단 취소 시 서비스 이용에 제한을 받을 수 있습니다.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 mb-4">제 5 조 (운임 정산 및 수수료 정책)</h2>
                <p className="text-sm">
                  회사의 중개를 거쳐 완료된 운송 건의 운임은 상호 사전 합의된 요율에 근거하여 산정됩니다. 정산은 완료 보고 및 증빙 서류(세금계산서, 인수증 등) 접수 확인 후 약정된 기일 내에 이뤄집니다. 정산 기일 및 방법은 개별 운송 위수탁 계약에 따릅니다.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 mb-4">제 6 조 (면책조항)</h2>
                <ul className="list-disc pl-5 space-y-2 text-sm mt-2">
                  <li>회사는 천재지변, 전쟁, 국가 비상사태, 법령의 개폐 등 불가항력적인 사유로 인하여 서비스를 제공할 수 없는 경우 책임이 면제됩니다.</li>
                  <li>회사는 차주 또는 화주의 귀책사유로 인한 화물의 도난, 유실, 파손 등에 대하여 회사의 중대한 과실이 없는 한 손해배상 책임을 지지 않습니다.</li>
                  <li>회사는 이용자 간에 발생한 분쟁에 대해 개입할 의무가 없으며, 이로 인한 손해를 배상할 책임이 없습니다.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 mb-4">제 7 조 (관할 법원)</h2>
                <p className="text-sm">
                  회사와 이용자 간에 서비스 이용과 관련하여 발생한 법적 분쟁은 회사의 본사 소재지를 관할하는 법원을 합의 관할 법원으로 합니다.
                </p>
                <p className="text-xs text-slate-400 mt-6">
                  * 공고 일자: 2026년 6월 18일 / 시행 일자: 2026년 6월 18일
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
