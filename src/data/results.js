export const results = [
  {
    id: 'yolo',
    range: [0, 2],
    emoji: '🎉',
    title: '욜로 탕진형',
    subtitle: '환급액은 스쳐갈 뿐',
    description:
      '돈이 생기면 바로 써버리는 진정한 소비의 달인! 연말정산 환급액은 통장에 잠깐 들렀다 떠나는 손님 같은 존재예요. 지금 이 순간을 즐기는 당신, 그 자체로 매력 넘쳐요!',
    traits: [
      '💳 신용카드 포인트 풀 적립',
      '🛍️ 장바구니 항상 가득',
      '📱 쇼핑 앱 알림 항상 ON',
      '🎁 나에게 선물 자주',
    ],
    tipTitle: '내년에는 이렇게 해봐요!',
    tips: [
      '체크카드 비중을 30% 이상 늘려보세요 (공제율이 더 높아요!)',
      '월급날 자동이체로 적금 먼저 쏙 빼놓기',
      '연금저축계좌 개설하면 세액공제 최대 66만원!',
    ],
    compatibleWith: '영수증 줍줍형',
    incompatibleWith: '절세 마스터형',
    color: '#FFB5A7',
    bgGradient: 'linear-gradient(145deg, #FFB5A7 0%, #FCD5CE 60%, #F8EDEB 100%)',
    accentColor: '#e8735a',
  },
  {
    id: 'casual',
    range: [3, 4],
    emoji: '🌊',
    title: '흘러가는 물처럼형',
    subtitle: '그냥 사는 대로 사는',
    description:
      '소비도 절약도 딱히 계획 없지만 어찌저찌 잘 살아가는 당신! 연말정산? 회사가 알아서 해주겠지. 스트레스 적게 사는 당신의 여유로운 마인드가 부럽기도 해요.',
    traits: [
      '😌 돈 걱정 거의 안 함',
      '📝 계획은 없지만 잘 됨',
      '🤷 연말정산 그냥 회사 믿음',
      '☕ 커피값은 절대 안 아낌',
    ],
    tipTitle: '조금만 신경 쓰면 확 달라져요!',
    tips: [
      '현금영수증 꼭 챙기기 (연간 제법 됩니다)',
      '의료비·교육비 영수증 파일에 모아두기',
      '연말에 1시간만 투자해 간소화 서비스 확인!',
    ],
    compatibleWith: '영수증 줍줍형',
    incompatibleWith: '욜로 탕진형',
    color: '#FCD5CE',
    bgGradient: 'linear-gradient(145deg, #FCD5CE 0%, #F9DCC4 60%, #FEC89A 100%)',
    accentColor: '#c97a6a',
  },
  {
    id: 'receipt',
    range: [5, 6],
    emoji: '🧾',
    title: '영수증 줍줍형',
    subtitle: '먼지 모아 태산',
    description:
      '영수증 하나도 허투루 버리지 않는 절약의 아이콘! 체크카드 애용에 공제 항목도 꼼꼼히 챙기는 당신. 작은 습관이 큰 환급액으로 돌아온다는 걸 이미 알고 있죠!',
    traits: [
      '🧾 영수증 꼼꼼히 모음',
      '💳 체크카드 애용',
      '📅 연말정산 미리 준비',
      '🔍 공제 항목 철저히 확인',
    ],
    tipTitle: '더 잘하고 싶다면!',
    tips: [
      'IRP 계좌에 추가 납입하면 최대 900만원까지 세액공제!',
      '기부금 공제도 챙겨보세요 (사회 기여 + 절세 두 마리 토끼)',
      '월세 거주 중이라면 월세 세액공제 꼭 신청하기',
    ],
    compatibleWith: '절세 마스터형',
    incompatibleWith: '욜로 탕진형',
    color: '#F9DCC4',
    bgGradient: 'linear-gradient(145deg, #F9DCC4 0%, #FEC89A 60%, #FFD9A0 100%)',
    accentColor: '#b07840',
  },
  {
    id: 'master',
    range: [7, 8],
    emoji: '💰',
    title: '절세 마스터형',
    subtitle: '13월의 월급이 가장 큰 나',
    description:
      '연말정산을 진짜 13번째 월급으로 만드는 고수! 체크카드, IRP, 연금저축… 절세 수단을 총동원하는 당신은 이미 재테크의 달인이에요. 매년 환급액이 기대되는 삶, 정말 멋지네요!',
    traits: [
      '💡 절세 전략 철저 수립',
      '📈 연금저축·IRP 풀 활용',
      '🏆 환급액 매년 최대화',
      '📚 세금 공부까지 즐김',
    ],
    tipTitle: '이미 잘하고 있어요! 그래도…',
    tips: [
      '연금저축 + IRP 합산 900만원 꽉 채우기',
      '주택청약저축 소득공제 잊지 말기',
      '내년에도 체크카드 총급여 25% 초과분부터 사용!',
    ],
    compatibleWith: '영수증 줍줍형',
    incompatibleWith: '욜로 탕진형',
    color: '#FEC89A',
    bgGradient: 'linear-gradient(145deg, #FEC89A 0%, #FFB5A7 60%, #FCD5CE 100%)',
    accentColor: '#c47820',
  },
]

export const getResult = (score) => {
  return results.find((r) => score >= r.range[0] && score <= r.range[1]) || results[0]
}
