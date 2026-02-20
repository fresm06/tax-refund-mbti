import { useEffect, useState, useRef } from 'react'
import './ResultPage.css'

const CONFETTI_COLORS = ['#FFB5A7', '#FCD5CE', '#F9DCC4', '#FEC89A', '#fff', '#ffde7d', '#ffa8a8']

function generateConfetti() {
  return Array.from({ length: 28 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
    size: 6 + Math.random() * 8,
    delay: Math.random() * 0.8,
    duration: 2.2 + Math.random() * 1.5,
    rotation: Math.random() * 360,
    shape: Math.random() > 0.5 ? 'circle' : 'rect',
  }))
}

export default function ResultPage({ result, onRestart }) {
  const [revealed, setRevealed] = useState(false)
  const [confetti] = useState(generateConfetti)
  const [copied, setCopied] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 80)
    return () => clearTimeout(t)
  }, [])

  const handleShare = async () => {
    const text = `나의 소비 MBTI는 "${result.title}"!\n${result.subtitle} ${result.emoji}\n\n#소비MBTI #연말정산 #13월의월급`
    if (navigator.share) {
      try {
        await navigator.share({ title: '13월의 월급 소비 MBTI', text, url: window.location.href })
      } catch { }
    } else {
      try {
        await navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2400)
      } catch { }
    }
  }

  return (
    <section className="result-page" aria-label="테스트 결과 화면">
      {/* Confetti */}
      {confetti.map((p) => (
        <div
          key={p.id}
          className="confetti"
          aria-hidden="true"
          style={{
            left: `${p.x}%`,
            width: p.shape === 'circle' ? p.size : p.size * 0.6,
            height: p.size,
            background: p.color,
            borderRadius: p.shape === 'circle' ? '50%' : '2px',
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            '--rot': `${p.rotation}deg`,
          }}
        />
      ))}

      <div className={`result-scroll ${revealed ? 'result-scroll--in' : ''}`}>
        {/* Hero result card */}
        <article className="result-hero" style={{ background: result.bgGradient }} ref={cardRef}>
          <div className="result-tag" aria-label="결과 태그">나의 소비 유형</div>
          <div className="result-big-emoji" aria-hidden="true">{result.emoji}</div>
          <h1 className="result-title">{result.title}</h1>
          <p className="result-subtitle">{result.subtitle}</p>
          <div className="result-divider" aria-hidden="true" />
          <p className="result-desc">{result.description}</p>
        </article>

        {/* Traits */}
        <section className="result-section" aria-labelledby="traits-title">
          <h2 id="traits-title" className="section-title">📌 나의 특징</h2>
          <div className="traits-grid">
            {result.traits.map((t, i) => (
              <div key={i} className="trait-chip" style={{ animationDelay: `${i * 0.08 + 0.3}s` }}>
                {t}
              </div>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section className="result-section tips-section" aria-labelledby="tips-title">
          <h2 id="tips-title" className="section-title">💡 {result.tipTitle}</h2>
          <div className="tips-list">
            {result.tips.map((tip, i) => (
              <article key={i} className="tip-row" style={{ animationDelay: `${i * 0.1 + 0.5}s` }}>
                <span className="tip-num" aria-hidden="true" style={{ background: result.color }}>{i + 1}</span>
                <p className="tip-text">{tip}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Compatibility */}
        <section className="result-section" aria-labelledby="compat-title">
          <h2 id="compat-title" className="section-title">💞 궁합 유형</h2>
          <div className="compat-row">
            <article className="compat-card compat-good">
              <div className="compat-icon" aria-hidden="true">💕</div>
              <div className="compat-label">찰떡 궁합</div>
              <h3 className="compat-name">{result.compatibleWith}</h3>
            </article>
            <div className="compat-divider" aria-hidden="true">vs</div>
            <article className="compat-card compat-bad">
              <div className="compat-icon" aria-hidden="true">⚡</div>
              <div className="compat-label">파국 케미</div>
              <h3 className="compat-name">{result.incompatibleWith}</h3>
            </article>
          </div>
        </section>

        {/* Actions */}
        <nav className="result-actions" aria-label="결과 페이지 액션">
          <button className="btn-share" onClick={handleShare} aria-label="친구에게 결과 공유하기">
            {copied ? '📋 클립보드에 복사됐어요!' : '🔗 친구에게 공유하기'}
          </button>
          <button className="btn-restart" onClick={onRestart} aria-label="테스트 처음부터 다시하기">
            🔄 다시 테스트하기
          </button>
        </nav>

        <footer className="result-footer">
          <p>* 본 테스트는 재미 목적으로만 활용해주세요 😊</p>
        </footer>
      </div>
    </section>
  )
}
