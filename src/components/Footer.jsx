import './Footer.css'

export default function Footer({ onNavigate }) {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-copy">© 2025 소비 MBTI 테스트. All rights reserved.</p>
        <nav className="footer-links" aria-label="법적 정보">
          <button className="footer-link" onClick={() => onNavigate('privacy')}>
            개인정보처리방침
          </button>
          <span className="footer-sep">·</span>
          <button className="footer-link" onClick={() => onNavigate('terms')}>
            이용약관
          </button>
          <span className="footer-sep">·</span>
          <a className="footer-link" href="mailto:contact@taxmbti.cc">
            문의하기
          </a>
        </nav>
        <p className="footer-ad-notice">
          본 사이트는 Google AdSense를 통해 광고를 게재합니다.
          광고는 쿠키를 사용할 수 있으며, 자세한 내용은 개인정보처리방침을 확인해주세요.
        </p>
      </div>
    </footer>
  )
}
