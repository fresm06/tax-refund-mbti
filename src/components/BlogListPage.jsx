import { blogPosts } from '../data/blogPosts'
import Footer from './Footer'
import './BlogListPage.css'

const CATEGORY_COLORS = {
  '연말정산 기초': { bg: '#eef6ff', color: '#4a90d9' },
  '공제 전략':    { bg: '#fff0ee', color: '#e85a3a' },
  '세액공제':     { bg: '#eefaf6', color: '#1a9e6e' },
}

export default function BlogListPage({ onNavigate }) {
  const goPost = (slug) => {
    window.location.hash = `/blog/${slug}`
  }

  return (
    <article className="blog-list-page">
      <header className="bl-header">
        <button className="bl-back" onClick={() => { window.location.hash = '' }} aria-label="홈으로 돌아가기">
          ← 홈으로
        </button>
        <div className="bl-hero">
          <span className="bl-hero-badge">📝 연말정산 가이드</span>
          <h1 className="bl-hero-title">연말정산 블로그</h1>
          <p className="bl-hero-desc">직장인을 위한 연말정산 절세 전략과 공제 꿀팁을 정리했습니다</p>
        </div>
      </header>

      <main className="bl-main">
        <div className="bl-grid">
          {blogPosts.map((post, i) => {
            const cat = CATEGORY_COLORS[post.category] || { bg: '#f5f5f5', color: '#666' }
            return (
              <article
                key={post.slug}
                className="bl-card"
                onClick={() => goPost(post.slug)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && goPost(post.slug)}
                aria-label={`${post.title} 읽기`}
              >
                <div className="bl-card-top">
                  <span className="bl-cat" style={{ background: cat.bg, color: cat.color }}>
                    {post.category}
                  </span>
                  <span className="bl-read-time">⏱ {post.readTime}</span>
                </div>
                <h2 className="bl-card-title">{post.title}</h2>
                <p className="bl-card-summary">{post.summary}</p>
                <div className="bl-card-footer">
                  <span className="bl-date">{post.date}</span>
                  <span className="bl-more">읽기 →</span>
                </div>
              </article>
            )
          })}
        </div>
      </main>

      <Footer onNavigate={onNavigate} />
    </article>
  )
}
