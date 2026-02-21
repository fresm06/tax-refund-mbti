import { getBlogPost, blogPosts } from '../data/blogPosts'
import Footer from './Footer'
import './BlogPostPage.css'

const CATEGORY_COLORS = {
  '연말정산 기초': { bg: '#eef6ff', color: '#4a90d9' },
  '공제 전략':    { bg: '#fff0ee', color: '#e85a3a' },
  '세액공제':     { bg: '#eefaf6', color: '#1a9e6e' },
}

export default function BlogPostPage({ slug, onNavigate }) {
  const post = getBlogPost(slug)

  if (!post) {
    return (
      <div className="bp-not-found">
        <p>포스트를 찾을 수 없습니다.</p>
        <button onClick={() => { window.location.hash = '/blog' }}>목록으로</button>
      </div>
    )
  }

  const cat = CATEGORY_COLORS[post.category] || { bg: '#f5f5f5', color: '#666' }

  // 다른 추천 포스트 (현재 제외, 최대 2개)
  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <article className="bp-page">
      <nav className="bp-nav">
        <button className="bp-back" onClick={() => { window.location.hash = '/blog' }} aria-label="목록으로">
          ← 목록으로
        </button>
      </nav>

      <div className="bp-wrap">
        {/* 헤더 */}
        <header className="bp-header">
          <span className="bp-cat" style={{ background: cat.bg, color: cat.color }}>
            {post.category}
          </span>
          <h1 className="bp-title">{post.title}</h1>
          <div className="bp-meta">
            <span className="bp-date">{post.date}</span>
            <span className="bp-dot" aria-hidden="true">·</span>
            <span className="bp-read">⏱ {post.readTime} 읽기</span>
          </div>
          <p className="bp-summary">{post.summary}</p>
        </header>

        {/* 본문 */}
        <div className="bp-body">
          {post.sections.map((sec, si) => (
            <section key={si} className="bp-section">
              <h2 className="bp-section-heading">{sec.heading}</h2>
              {sec.paragraphs.map((para, pi) => (
                <p key={pi} className="bp-para">{para}</p>
              ))}
            </section>
          ))}
        </div>

        {/* 소비 MBTI 테스트 유도 */}
        <aside className="bp-cta-box">
          <div className="bp-cta-emoji" aria-hidden="true">💰</div>
          <div>
            <p className="bp-cta-title">나의 소비 유형은 어떤 타입일까요?</p>
            <p className="bp-cta-desc">8가지 질문으로 내 연말정산 소비 MBTI를 알아보세요!</p>
          </div>
          <button
            className="bp-cta-btn"
            onClick={() => { window.location.hash = ''; }}
          >
            테스트 하기 →
          </button>
        </aside>

        {/* 관련 포스트 */}
        {related.length > 0 && (
          <section className="bp-related">
            <h2 className="bp-related-title">관련 글</h2>
            <div className="bp-related-grid">
              {related.map((rp) => {
                const rc = CATEGORY_COLORS[rp.category] || { bg: '#f5f5f5', color: '#666' }
                return (
                  <div
                    key={rp.slug}
                    className="bp-related-card"
                    onClick={() => { window.location.hash = `/blog/${rp.slug}` }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && (window.location.hash = `/blog/${rp.slug}`)}
                  >
                    <span className="bp-related-cat" style={{ background: rc.bg, color: rc.color }}>
                      {rp.category}
                    </span>
                    <p className="bp-related-name">{rp.title}</p>
                    <span className="bp-related-time">⏱ {rp.readTime}</span>
                  </div>
                )
              })}
            </div>
          </section>
        )}
      </div>

      <Footer onNavigate={onNavigate} />
    </article>
  )
}
