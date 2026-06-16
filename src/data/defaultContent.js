export const defaultContent = {
  company: {
    name: '삼원종합물류',
    nameEn: 'SAMWON LOGISTICS',
    phone: '02-1234-5678',
    fax: '02-1234-5679',
    email: 'info@samwon.co.kr',
    address: '서울특별시 강남구 테헤란로 123 삼원빌딩',
    bizNumber: '123-45-67890',
    ceo: '홍길동'
  },
  hero: {
    title: '신뢰와 전문성으로\n대한민국 물류의 미래를 열어갑니다',
    subtitle: '삼원종합물류는 체계적인 물류 시스템과 전국 네트워크로\n고객의 비즈니스 성장을 지원합니다.',
    ctaText: '문의하기',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80'
  },
  coreValues: [
    { icon: '⚡', title: '신속 정확', desc: '체계적인 배차 시스템과 실시간 추적으로 정시 배송률 99.2%를 달성합니다.' },
    { icon: '🛡️', title: '안전 운송', desc: '전 차량 GPS 장착, 화물 보험 완비로 소중한 화물을 안전하게 운송합니다.' },
    { icon: '🌐', title: '전국 네트워크', desc: '전국 주요 거점에 물류센터를 운영하며, 도서산간 지역까지 커버합니다.' },
    { icon: '📊', title: '통합 관리', desc: '입고부터 출고까지 원스톱 물류 솔루션으로 효율적인 물류 관리를 제공합니다.' }
  ],
  statistics: [
    { number: 350, suffix: '대+', label: '운행 차량' },
    { number: 12, suffix: '곳', label: '전국 거점' },
    { number: 50000, suffix: '건+', label: '연간 운송' },
    { number: 200, suffix: '사+', label: '협력 고객사' }
  ],
  businessAreas: [
    { id: 'corporate', title: '기업물류', desc: '대기업부터 중소기업까지, 맞춤형 물류 솔루션을 제공합니다.', image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80', link: '/business/corporate' },
    { id: 'distribution', title: '유통물류', desc: '전국 유통망을 활용한 신속하고 정확한 배송 서비스를 운영합니다.', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80', link: '/business/distribution' },
    { id: 'brokerage', title: '주선·퀵서비스', desc: '긴급 화물부터 정기 운송까지, 최적의 운송 솔루션을 주선합니다.', image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80', link: '/business/brokerage' },
    { id: 'warehouse', title: '창고운영', desc: '최첨단 WMS 기반의 체계적인 창고 관리 서비스를 제공합니다.', image: 'https://images.unsplash.com/photo-1565891741441-64926e441838?w=800&q=80', link: '/business/warehouse' }
  ],
  ceo: {
    name: '홍길동',
    title: '대표이사',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80',
    message: '안녕하십니까.\n삼원종합물류 대표이사 홍길동입니다.\n\n저희 삼원종합물류는 창립 이래 "신뢰와 혁신"이라는 경영 이념 아래, 대한민국 물류 산업의 발전과 함께 성장해 왔습니다.\n\n급변하는 물류 환경 속에서도 고객 여러분의 소중한 화물을 안전하고 신속하게 운송하는 것을 최우선 가치로 삼고 있으며, 체계적인 물류 시스템과 전문 인력을 통해 최상의 서비스를 제공하고자 끊임없이 노력하고 있습니다.\n\n앞으로도 삼원종합물류는 디지털 혁신과 친환경 물류를 선도하며, 고객 여러분의 비즈니스 파트너로서 함께 성장해 나가겠습니다.\n\n감사합니다.'
  },
  history: [
    { year: '2024', events: ['물류 자동화 시스템 도입', '연간 운송 5만 건 돌파'] },
    { year: '2022', events: ['수도권 제2물류센터 준공', '차량 300대 돌파'] },
    { year: '2020', events: ['스마트 물류 TMS 시스템 구축', '코로나 특별 방역 물류 서비스 시행'] },
    { year: '2018', events: ['전국 물류 네트워크 12거점 완성', 'ISO 9001 / 14001 인증 획득'] },
    { year: '2015', events: ['유통물류 사업부 신설', '차량 200대 돌파'] },
    { year: '2012', events: ['기업물류 전문 서비스 런칭', '본사 사옥 이전'] },
    { year: '2008', events: ['법인 전환 및 사명 변경 (삼원종합물류)', '창고운영 사업 개시'] },
    { year: '2005', events: ['삼원운수 설립'] }
  ],
  subsidiaries: [
    { name: '삼원익스프레스', desc: '퀵서비스 및 긴급 배송 전문', logo: null },
    { name: '삼원로지텍', desc: '3PL 물류 대행 서비스', logo: null },
    { name: '삼원창고', desc: '수도권 물류센터 운영', logo: null },
    { name: '삼원글로벌', desc: '국제 물류 및 포워딩', logo: null }
  ],
  equipment: [
    { type: '윙바디', count: 120, desc: '11.5t / 5t / 2.5t', icon: '🚛' },
    { type: '탑차', count: 80, desc: '5t / 2.5t / 1t', icon: '📦' },
    { type: '트레일러', count: 45, desc: '40ft 컨테이너 운송', icon: '🚚' },
    { type: '냉동/냉장차', count: 35, desc: '신선식품 전문 운송', icon: '❄️' },
    { type: '카고트럭', count: 50, desc: '일반 화물 운송', icon: '🏗️' },
    { type: '지게차', count: 20, desc: '물류센터 하역 작업', icon: '⚙️' }
  ],
  location: {
    address: '서울특별시 강남구 테헤란로 123 삼원빌딩',
    tel: '02-1234-5678',
    fax: '02-1234-5679',
    subway: '2호선 강남역 3번 출구 도보 5분',
    bus: '강남역 정류장 하차 (140, 144, 145, 471)',
    parking: '건물 지하 주차장 이용 가능 (방문 시 2시간 무료)'
  },
  recruitment: {
    title: '삼원종합물류와 함께 성장할 인재를 찾습니다',
    subtitle: '도전정신과 전문성을 갖춘 인재와 함께 물류의 미래를 만들어갑니다.',
    values: [
      { icon: '🎯', title: '도전', desc: '새로운 것에 도전하고 변화를 두려워하지 않는 인재' },
      { icon: '🤝', title: '협력', desc: '동료와 소통하고 함께 성장하는 인재' },
      { icon: '💡', title: '혁신', desc: '창의적 사고로 더 나은 방법을 찾는 인재' },
      { icon: '⭐', title: '전문성', desc: '맡은 분야에서 최고를 추구하는 인재' }
    ],
    process: ['서류전형', '1차 면접', '2차 면접', '최종합격'],
    openings: [
      { title: '물류관리 담당자', dept: '물류사업부', type: '정규직', deadline: '채용 시 마감' },
      { title: '배차 담당자', dept: '운송사업부', type: '정규직', deadline: '채용 시 마감' },
      { title: '창고관리 매니저', dept: '창고사업부', type: '정규직', deadline: '2024.12.31' },
      { title: 'IT 시스템 개발자', dept: 'IT팀', type: '정규직', deadline: '채용 시 마감' }
    ]
  },
  truckOwner: {
    title: '차주정보',
    desc: '삼원종합물류의 차주님을 위한 전용 서비스입니다.',
    ctaText: '차주정보 바로가기'
  },
  businessPages: {
    corporate: {
      title: '기업물류',
      bannerImage: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1920&q=80',
      overview: '삼원종합물류의 기업물류 서비스는 대기업부터 중소기업까지 다양한 규모의 기업에 맞춤형 물류 솔루션을 제공합니다. 전문 물류 컨설팅을 통해 최적의 운송 계획을 수립하고, 체계적인 관리 시스템으로 비용 절감과 효율성 향상을 동시에 달성합니다.',
      strengths: [
        { icon: '📋', title: '맞춤 컨설팅', desc: '기업별 물류 현황 분석 및 최적 솔루션 제안' },
        { icon: '🔄', title: '정기 운송', desc: '안정적인 정기 배송 스케줄 운영' },
        { icon: '📱', title: '실시간 추적', desc: 'GPS 기반 화물 위치 실시간 모니터링' },
        { icon: '📊', title: '데이터 리포트', desc: '월별 운송 데이터 분석 보고서 제공' }
      ],
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80'
    },
    distribution: {
      title: '유통물류',
      bannerImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80',
      overview: '전국 유통망을 활용한 신속하고 정확한 유통물류 서비스를 제공합니다. 대형 유통사, 이커머스, 홈쇼핑 등 다양한 유통 채널에 최적화된 배송 시스템을 운영하며, 당일 배송부터 예약 배송까지 유연한 서비스를 지원합니다.',
      strengths: [
        { icon: '🚛', title: '전국 당일배송', desc: '수도권 당일, 지방 익일 배송 체계' },
        { icon: '📦', title: '풀필먼트', desc: '입고·보관·피킹·포장·출고 일괄 처리' },
        { icon: '🔗', title: '채널 통합', desc: '온·오프라인 유통 채널 통합 관리' },
        { icon: '↩️', title: '반품 처리', desc: '체계적인 반품·교환 물류 시스템' }
      ],
      image: 'https://images.unsplash.com/photo-1565891741441-64926e441838?w=800&q=80'
    },
    brokerage: {
      title: '주선·퀵서비스',
      bannerImage: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=80',
      overview: '긴급 화물부터 정기 운송까지, 최적의 운송 수단과 경로를 주선합니다. 전국 협력 차주 네트워크를 통해 어떤 화물이든 가장 빠르고 안전한 방법으로 목적지까지 운송해 드립니다.',
      strengths: [
        { icon: '⏱️', title: '긴급 배차', desc: '24시간 긴급 배차 시스템 운영' },
        { icon: '🗺️', title: '최적 경로', desc: 'AI 기반 최적 경로 및 차량 매칭' },
        { icon: '💰', title: '합리적 요금', desc: '투명한 요금 체계와 실시간 견적' },
        { icon: '🏍️', title: '퀵서비스', desc: '오토바이·다마스·라보 긴급 배송' }
      ],
      image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80'
    },
    warehouse: {
      title: '창고운영',
      bannerImage: 'https://images.unsplash.com/photo-1565891741441-64926e441838?w=1920&q=80',
      overview: '최첨단 WMS(창고관리시스템)를 기반으로 체계적이고 효율적인 창고 운영 서비스를 제공합니다. 상온·냉장·냉동 등 다양한 보관 환경을 갖추고 있으며, 입출고 관리부터 재고 관리까지 토탈 솔루션을 제공합니다.',
      strengths: [
        { icon: '🏭', title: '스마트 창고', desc: 'WMS 기반 자동화 입출고 관리' },
        { icon: '❄️', title: '온도 관리', desc: '상온/냉장/냉동 다중 온도대 운영' },
        { icon: '📋', title: '재고 관리', desc: '실시간 재고 현황 모니터링' },
        { icon: '🔐', title: '보안 시스템', desc: '24시간 CCTV 및 출입 통제' }
      ],
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80'
    }
  }
}
