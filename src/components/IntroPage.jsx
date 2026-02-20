import { useEffect, useState } from 'react'
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

export default function IntroPage({ onStart }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="intro-page">
      {/* Animated background blobs */}
      <div className="intro-blob blob-1" />
      <div className="intro-blob blob-2" />
      <div className="intro-blob blob-3" />

      {/* Floating emojis */}
      {FLOATING.map((item, i) => (
        <span
          key={i}
          className="float-emoji"
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
      <div className={`intro-content ${mounted ? 'intro-content--in' : ''}`}>
        <div className="intro-badge">✨ 2025 연말정산 특집</div>

        <div className="intro-hero">
          <div className="intro-coin">💰</div>
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
        </div>

        <div className="intro-pills">
          <span className="pill">⏱️ 약 2분 소요</span>
          <span className="pill">🔥 8가지 질문</span>
          <span className="pill">🎯 4가지 유형</span>
        </div>

        <button className="intro-cta" onClick={onStart}>
          <span>나의 소비유형 알아보기</span>
          <span className="cta-arrow">→</span>
        </button>

        <p className="intro-note">* 결과는 재미로만 봐주세요 😊</p>
      </div>
    </div>
  )
}
