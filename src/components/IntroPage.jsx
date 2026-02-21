import { useEffect, useState } from 'react'
import Footer from './Footer'
import './IntroPage.css'

const FLOATING = [
  { emoji: '💸', x: 8, y: 10, delay: 0, dur: 5.2, size: 28 },
  { emoji: '🧾', x: 85, y: 8, delay: 1.1, dur: 6.0, size: 22 },
  { emoji: '💳', x: 15, y: 78, delay: 0.6, dur: 4.8, size: 26 },
  { emoji: '🏦', x: 78, y: 72, delay: 1.8, dur: 5.5, size: 24 },
  { emoji: '💰', x: 50, y: 5, delay: 0.3, dur: 6.5, size: 32 },
  { emoji: '🛍️', x: 3, y: 45, delay: 2.2, dur: 5.0, size: 20 },
  { emoji: '✨', x: 90, y: 40, delay: 0.9, dur: 4.5, size: 18 },
  { emoji: '📊', x: 70, y: 88, delay: 1.5, dur: 5.8, size: 22 },
  { emoji: '🎁', x: 30, y: 92, delay: 2.8, dur: 6.2, size: 24 },
  { emoji: '💵', x: 55, y: 85, delay: 0.4, dur: 5.3, size: 20 },
]

const TYPES = [
  {
    num: '01',
    emoji: '🎉',
    title: '욜로 탕진형',
    subtitle: '환급액은 스쳐갈 뿐',
    desc: '돈이 생기면 바로 써버리는 소비의 달인. 연말정산 환급액은 통장에 잠깐 들렀다 떠나는 손님 같은 존재예요. 지금 이 순간을 즐기는 YOLO 정신!',
    bg: 'linear-gradient(135deg, #fff0ee 0%, #ffe0db 100%)',
    accent: '#e85a3a',
  },
  {
    num: '02',
    emoji: '🌊',
    title: '흘러가는 물처럼형',
    subtitle: '그냥 사는 대로 사는',
    desc: '소비도 절약도 딱히 계획 없지만 어찌저찌 잘 살아가는 유형. 연말정산? 회사가 알아서 해주겠지. 스트레스 없는 여유로운 마인드의 소유자.',
    bg: 'linear-gradient(135deg, #eef6ff 0%, #d6eaff 100%)',
    accent: '#4a90d9',
  },
  {
    num: '03',
    emoji: '🧾',
    title: '영수증 줍줍형',
    subtitle: '먼지 모아 태산',
    desc: '영수증 하나도 허투루 버리지 않는 절약의 아이콘! 체크카드를 애용하고 공제 항목도 꼼꼼히 챙기는 당신. 작은 습관이 큰 환급액으로 돌아온다는 걸 이미 알고 있죠!',
    bg: 'linear-gradient(135deg, #fffbee 0%, #fff0c0 100%)',
    accent: '#c49a00',
  },
  {
    num: '04',
    emoji: '💰',
    title: '절세 마스터형',
    subtitle: '13월의 월급이 가장 큰 나',
    desc: '연말정산을 진짜 13번째 월급으로 만드는 고수! 체크카드, IRP, 연금저축 등 절세 수단을 총동원하는 재테크의 달인. 매년 환급액이 기대되는 삶!',
    bg: 'linear-gradient(135deg, #eefaf6 0%, #c8f0e2 100%)',
    accent: '#1a9e6e',
  },
]

const DEDUCTIONS = [
  {
    icon: '💳',
    tag: '소득공제',
    tagColor: '#4a90d9',
    title: '신용카드·체크카드 소득공제',
    highlight: '체크카드 30% · 신용카드 15%',
    desc: '총급여의 25% 초과 사용분부터 공제 적용. 급여 25%를 넘긴 시점부터는 체크카드·현금영수증(공제율 30%)으로 결제하는 것이 신용카드(15%)보다 두 배 유리해요.',
  },
  {
    icon: '📈',
    tag: '세액공제',
    tagColor: '#e85a3a',
    title: '연금저축 · IRP 세액공제',
    highlight: '최대 연 148만 5천원 환급',
    desc: '연금저축 연 400만원, IRP 포함 연 900만원 한도로 납입액의 13.2~16.5% 세액공제. 연봉 5,500만원 이하라면 최대 148만 5천원을 추가로 돌려받을 수 있어요.',
  },
  {
    icon: '🏥',
    tag: '세액공제',
    tagColor: '#e85a3a',
    title: '의료비 세액공제',
    highlight: '총급여 3% 초과분의 15%',
    desc: '본인·부양가족 의료비 중 총급여의 3% 초과분에 대해 15% 공제. 안경·콘택트렌즈(50만원 한도), 산후조리원비(200만원 한도)도 포함되니 영수증을 꼭 챙기세요.',
  },
  {
    icon: '🏠',
    tag: '세액공제',
    tagColor: '#e85a3a',
    title: '월세 세액공제',
    highlight: '월세의 15~17% · 최대 750만원',
    desc: '총급여 7,000만원 이하 무주택 세입자 대상. 임대차계약서·주민등록등본·계좌이체 내역 등 증빙 서류를 미리 모아두면 간소화 서비스에서 자동 반영됩니다.',
  },
  {
    icon: '📚',
    tag: '세액공제',
    tagColor: '#e85a3a',
    title: '교육비 세액공제',
    highlight: '납입액의 15% 공제',
    desc: '본인 교육비는 전액 15% 공제. 자녀는 유치원·초중고 300만원, 대학 900만원 한도. 직장인 본인의 직무 관련 학원비도 공제 가능하니 수강료 영수증을 보관하세요.',
  },
  {
    icon: '❤️',
    tag: '세액공제',
    tagColor: '#e85a3a',
    title: '기부금 세액공제',
    highlight: '1,000만원 이하 15% · 초과분 30%',
    desc: '법정·정치자금·지정 기부금 등 종류에 따라 15~30% 세액공제. 기부금 영수증은 발급 기관에 직접 요청해야 하는 경우도 있으니 연말 전에 미리 챙기세요.',
  },
]

const FAQ = [
  {
    q: '소비 MBTI 테스트는 어떻게 진행되나요?',
    a: '총 8가지 질문에 A 또는 B로 답하는 방식입니다. 각 답변에 점수가 부여되고, 총 점수에 따라 4가지 유형 중 하나의 결과가 나옵니다. 약 1~2분이면 완료할 수 있어요.',
  },
  {
    q: '연말정산 환급액을 늘리는 가장 쉬운 방법은?',
    a: '신용카드 대신 체크카드 사용 비중을 늘리는 것이 가장 즉각적입니다. 체크카드는 소득공제율 30%로 신용카드(15%)의 두 배예요. 또한 IRP 계좌에 연 900만원까지 납입하면 세율에 따라 최대 148만원을 추가로 돌려받을 수 있습니다.',
  },
  {
    q: '체크카드와 신용카드 중 어느 것이 더 유리한가요?',
    a: '소득공제율만 보면 체크카드(30%)가 신용카드(15%)보다 두 배 유리합니다. 다만 총급여의 25%까지는 어떤 카드를 쓰든 공제가 안 되니, 25%를 넘긴 시점부터 체크카드로 전환하는 전략이 효과적입니다. 신용카드의 캐시백·포인트 혜택도 함께 고려하세요.',
  },
  {
    q: '연말정산은 언제까지 해야 하나요?',
    a: '직장인은 매년 1~2월 사이 회사를 통해 연말정산을 진행합니다. 국세청 홈택스 간소화 서비스는 1월 15일부터 이용 가능하며, 회사에 서류를 제출하는 기한은 보통 1월 말입니다. 만약 놓쳤다면 5월 종합소득세 신고 기간에 직접 경정청구를 할 수 있습니다.',
  },
  {
    q: '소득공제와 세액공제는 어떻게 다른가요?',
    a: '소득공제는 과세 대상 소득 금액 자체를 줄여주는 것이고, 세액공제는 계산된 세금에서 직접 빼주는 것입니다. 예를 들어 100만원 소득공제는 세율 15% 기준으로 15만원 절세 효과지만, 100만원 세액공제는 그대로 100만원을 절세합니다. 따라서 세액공제가 더 직접적인 혜택입니다.',
  },
]

export default function IntroPage({ onStart, onNavigate }) {
  const [mounted, setMounted] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50)
    return () => clearTimeout(t)
  }, [])

  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i)

  return (
    <article className="intro-page">

      {/* ── 히어로 섹션 (100vh 중앙 정렬) ── */}
      <div className="intro-hero-wrap">
        {/* Animated background blobs */}
        <div className="intro-blob blob-1" aria-hidden="true" />
        <div className="intro-blob blob-2" aria-hidden="true" />
        <div className="intro-blob blob-3" aria-hidden="true" />

        {/* Floating emojis */}
        {FLOATING.map((item, i) => (
          <span
            key={i}
            className="float-emoji"
            aria-hidden="true"
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
              animationDelay: `${item.delay}s`,
              animationDuration: `${item.dur}s`,
              fontSize: `${item.size}px`,
            }}
          >
            {item.emoji}
          </span>
        ))}

        {/* Main content */}
        <section className={`intro-content ${mounted ? 'intro-content--in' : ''}`}>
          <div className="intro-badge" aria-label="이벤트 태그">✨ 2025 연말정산 특집</div>

          <header className="intro-hero">
            <div className="intro-coin" aria-hidden="true">💰</div>
            <h1 className="intro-title">
              13월의 월급
              <br />
              <span className="intro-title-sub">소비 MBTI</span>
            </h1>
            <p className="intro-desc">
              나의 소비 성향을 파악하고
              <br />
              내년 연말정산을 미리 준비해봐요!
            </p>
          </header>

          <div className="intro-pills" aria-label="테스트 특징">
            <span className="pill">⏱️ 약 2분 소요</span>
            <span className="pill">🔥 8가지 질문</span>
            <span className="pill">🎯 4가지 유형</span>
          </div>

          <button className="intro-cta" onClick={onStart} aria-label="나의 소비유형 알아보기 시작 버튼">
            <span>나의 소비유형 알아보기</span>
            <span className="cta-arrow" aria-hidden="true">→</span>
          </button>

          <p className="intro-note">* 결과는 재미로만 봐주세요 😊</p>
        </section>
      </div>

      {/* ── 콘텐츠 섹션들 (실질 정보, SEO 핵심) ── */}
      <div className="intro-sections">

        {/* 섹션 1: 소비 유형 소개 */}
        <section className="is-section" aria-labelledby="types-heading">
          <h2 id="types-heading" className="is-title">4가지 소비 MBTI 유형</h2>
          <p className="is-sub">8개의 질문을 통해 아래 4가지 유형 중 나의 소비 성향이 어디에 해당하는지 알아보세요</p>
          <div className="is-type-grid">
            {TYPES.map((t, i) => (
              <div key={i} className="is-type-card" style={{ background: t.bg }}>
                <div className="is-type-card-top">
                  <span className="is-type-num" style={{ color: t.accent }}>{t.num}</span>
                  <span className="is-type-emoji" aria-hidden="true">{t.emoji}</span>
                </div>
                <h3 className="is-type-name" style={{ color: t.accent }}>{t.title}</h3>
                <p className="is-type-sub">{t.subtitle}</p>
                <p className="is-type-desc">{t.desc}</p>
              </div>
            ))}
          </div>
          <div className="is-cta-wrap">
            <button className="is-cta" onClick={onStart}>지금 내 유형 확인하기 →</button>
          </div>
        </section>

        {/* 섹션 2: 연말정산 핵심 공제 항목 */}
        <section className="is-section is-section--alt" aria-labelledby="ded-heading">
          <h2 id="ded-heading" className="is-title">연말정산 핵심 공제 항목 총정리</h2>
          <p className="is-sub">놓치면 아까운 세액공제·소득공제 항목들을 미리 알아두고 내년 연말정산을 준비하세요</p>
          <div className="is-ded-grid">
            {DEDUCTIONS.map((d, i) => (
              <article key={i} className="is-ded-card">
                <div className="is-ded-top">
                  <div className="is-ded-icon" aria-hidden="true">{d.icon}</div>
                  <div className="is-ded-header">
                    <span className="is-ded-tag" style={{ background: d.tagColor }}>{d.tag}</span>
                    <h3 className="is-ded-name">{d.title}</h3>
                  </div>
                </div>
                <div className="is-ded-highlight">{d.highlight}</div>
                <p className="is-ded-desc">{d.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 섹션 3: FAQ */}
        <section className="is-section" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="is-title">자주 묻는 질문</h2>
          <div className="is-faq-list">
            {FAQ.map((item, i) => (
              <div key={i} className="is-faq-item">
                <button
                  className={`is-faq-btn ${openFaq === i ? 'is-faq-btn--open' : ''}`}
                  onClick={() => toggleFaq(i)}
                  aria-expanded={openFaq === i}
                >
                  <span className="is-faq-num">Q{i + 1}</span>
                  <span className="is-faq-q">{item.q}</span>
                  <span className="is-faq-arrow" aria-hidden="true">
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="is-faq-a">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="is-cta-wrap">
            <button className="is-cta" onClick={onStart}>테스트 시작하기 →</button>
          </div>
        </section>

        {/* 블로그 배너 */}
        <section className="is-section is-blog-banner" aria-label="블로그 바로가기">
          <div className="is-blog-inner">
            <div className="is-blog-text">
              <p className="is-blog-label">📝 더 많은 절세 정보가 궁금하다면?</p>
              <p className="is-blog-title">연말정산 블로그 — 체크카드 전략, IRP 활용법, 월세 공제 등 심층 가이드</p>
            </div>
            <a href="#/blog" className="is-blog-btn">블로그 보기 →</a>
          </div>
        </section>

      </div>

      <Footer onNavigate={onNavigate} />
    </article>
  )
}
