import PageBanner from '../components/common/PageBanner'
import ScrollReveal from '../components/common/ScrollReveal'

export default function PrivacyPolicy() {
  return (
    <>
      <PageBanner
        title="개인정보처리방침"
        subtitle="삼원종합물류(주)는 고객님의 소중한 개인정보를 안전하게 보호합니다"
        backgroundImage="https://images.unsplash.com/photo-1450133064473-71024230f91b?w=1920&q=80"
      />

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 text-slate-700 leading-relaxed space-y-8">
              <div>
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 mb-4">1. 총칙</h2>
                <p className="text-sm md:text-base">
                  삼원종합물류(주)(이하 '회사'라 함)는 고객 및 서비스 이용자(이하 '이용자'라 함)의 개인정보를 매우 소중하게 생각하며, "개인정보 보호법", "정보통신망 이용촉진 및 정보보호 등에 관한 법률" 등 관련 법령을 준수하고 있습니다. 회사는 본 개인정보처리방침을 통하여 이용자가 제공하는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 mb-4">2. 수집하는 개인정보의 항목 및 수집방법</h2>
                <p className="font-semibold text-sm text-slate-800 mb-2">가. 수집항목</p>
                <ul className="list-disc pl-5 space-y-1 text-sm mb-4">
                  <li>필수항목: 이름(또는 회사명), 연락처, 이메일 주소, 문의 내용</li>
                  <li>선택항목: 직책, 팩스번호, 서비스 이용 기록, 접속 로그, 쿠키, 접속 IP 정보</li>
                  <li>화물 차주 회원 가입 시: 성명, 생년월일, 연락처, 차량정보(차종, 톤수, 차량번호), 사업자등록증 정보, 계좌번호(운임 정산용)</li>
                </ul>
                <p className="font-semibold text-sm text-slate-800 mb-2">나. 수집방법</p>
                <p className="text-sm">
                  홈페이지 문의하기 양식, 화물 차주 가입 신청서 작성, 팩스, 이메일, 전화 등을 통하여 수집합니다.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 mb-4">3. 개인정보의 수집 및 이용 목적</h2>
                <p className="text-sm">
                  회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
                  <li><strong>서비스 제공 및 계약 이행</strong>: 화물 운송 주선 업무, 물류 창고 보관 및 입출고 관리, 운임 정산 등 계약상 서비스 제공</li>
                  <li><strong>고객 문의 처리</strong>: 서비스 이용 문의, 견적 요청 처리, 민원 사항 처리 및 결과 통보</li>
                  <li><strong>차주 회원 관리</strong>: 화물 배차 서비스 제공, 본인 확인, 부정이용 방지 및 불만 처리</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 mb-4">4. 개인정보의 보유 및 이용기간</h2>
                <p className="text-sm">
                  회사는 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관련 법령의 규정에 의하여 보존할 필요가 있는 경우 다음과 같이 법령에서 정한 일정 기간 동안 개인정보를 보관합니다.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
                  <li>상업장부 및 영업에 관한 중요서류에 관한 기록: 10년 (상법)</li>
                  <li>계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래 등에서의 소비자보호에 관한 법률)</li>
                  <li>대금결제 및 재화 등의 공급에 관한 기록: 5년 (전자상거래 등에서의 소비자보호에 관한 법률)</li>
                  <li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년 (전자상거래 등에서의 소비자보호에 관한 법률)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 mb-4">5. 개인정보의 파기절차 및 방법</h2>
                <p className="text-sm">
                  회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 파기절차 및 방법은 다음과 같습니다.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
                  <li><strong>파기절차</strong>: 이용자가 제공한 정보는 목적이 달성된 후 별도의 DB(종이의 경우 별도의 서류함)로 옮겨져 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라 일정 기간 저장된 후 파기됩니다.</li>
                  <li><strong>파기방법</strong>: 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제하며, 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 mb-4">6. 개인정보 보호책임자 및 상담창구</h2>
                <p className="text-sm">
                  회사는 이용자의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
                </p>
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 mt-4 text-sm space-y-2">
                  <p><strong>개인정보 보호책임자:</strong> 관리본부 정종혁 대표</p>
                  <p><strong>이메일:</strong> samwon@samwonlogistics.co.kr (또는 회사 대표 메일)</p>
                  <p><strong>전화번호:</strong> 02-598-3001 | <strong>팩스번호:</strong> 02-597-2564</p>
                </div>
                <p className="text-xs text-slate-400 mt-4">
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
