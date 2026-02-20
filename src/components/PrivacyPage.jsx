import './LegalPage.css'

const UPDATED = '2025년 2월 20일'

export default function PrivacyPage({ onBack }) {
  return (
    <div className="legal-page">
      <div className="legal-header">
        <button className="legal-back" onClick={onBack} aria-label="뒤로가기">
          ← 돌아가기
        </button>
        <h1 className="legal-title">개인정보처리방침</h1>
        <p className="legal-updated">최종 업데이트: {UPDATED}</p>
      </div>

      <div className="legal-body">
        <section className="legal-section">
          <h2>1. 개요</h2>
          <p>
            <strong>taxmbti.cc</strong>(이하 "본 사이트")는 이용자의 개인정보를 중요하게 생각하며,
            「개인정보 보호법」 및 관련 법령을 준수합니다. 본 방침은 본 사이트가 수집하는 정보의 종류,
            사용 방법, 보호 조치에 대해 안내합니다.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. 수집하는 정보</h2>
          <p>본 사이트는 <strong>회원가입·로그인 기능이 없으며</strong>, 이름·이메일·전화번호 등
            개인 식별 정보를 직접 수집하지 않습니다.</p>
          <p>다만, 서비스 운영 및 광고 게재를 위해 아래 정보가 자동으로 수집될 수 있습니다.</p>
          <ul>
            <li>IP 주소 및 기기 정보 (OS, 브라우저 종류 및 버전)</li>
            <li>페이지 방문 기록 및 체류 시간 (Google Analytics)</li>
            <li>광고 노출·클릭 기록 (Google AdSense 쿠키)</li>
            <li>테스트 응답 결과 (로컬에서만 처리, 서버 저장 없음)</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>3. 쿠키(Cookie) 사용</h2>
          <p>
            본 사이트는 Google Analytics 및 Google AdSense를 통해 쿠키를 사용합니다.
            쿠키는 이용자의 브라우저에 저장되는 작은 데이터 파일로, 광고 맞춤 설정 및
            사이트 이용 통계 분석에 활용됩니다.
          </p>
          <p>
            이용자는 브라우저 설정에서 쿠키를 비활성화할 수 있습니다. 단, 일부 기능이
            정상적으로 작동하지 않을 수 있습니다.
          </p>
          <ul>
            <li><strong>Google Analytics:</strong> 방문자 통계 분석 (쿠키 이름: _ga, _gid 등)</li>
            <li><strong>Google AdSense:</strong> 맞춤형 광고 게재 (쿠키 이름: IDE, ANID 등)</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>4. 제3자 서비스</h2>
          <p>본 사이트는 아래 제3자 서비스를 사용하며, 각 서비스는 자체 개인정보처리방침을 적용합니다.</p>
          <ul>
            <li>
              <strong>Google Analytics</strong> — 방문자 분석 서비스
              <br />
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                Google 개인정보처리방침 보기 →
              </a>
            </li>
            <li>
              <strong>Google AdSense</strong> — 광고 게재 서비스
              <br />
              <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">
                Google 광고 정책 보기 →
              </a>
            </li>
          </ul>
          <p>
            Google의 광고 쿠키 사용을 비활성화하려면{' '}
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
              Google 광고 설정
            </a>
            을 방문하거나{' '}
            <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">
              aboutads.info
            </a>
            에서 설정할 수 있습니다.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. 정보 보유 기간</h2>
          <p>
            Google Analytics 및 AdSense를 통해 수집된 데이터는 Google의 정책에 따라
            관리됩니다. 본 사이트 서버에는 개인정보가 별도로 저장되지 않습니다.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. 이용자의 권리</h2>
          <p>이용자는 언제든지 아래 권리를 행사할 수 있습니다.</p>
          <ul>
            <li>개인정보 처리 현황 열람 요청</li>
            <li>개인정보 정정·삭제 요청</li>
            <li>개인정보 처리 정지 요청</li>
          </ul>
          <p>권리 행사를 원하시는 경우 아래 연락처로 문의해 주세요.</p>
        </section>

        <section className="legal-section">
          <h2>7. 미성년자 보호</h2>
          <p>
            본 사이트는 만 14세 미만 아동을 대상으로 개인정보를 수집하지 않습니다.
            만 14세 미만 이용자는 보호자의 동의 하에 이용하시기 바랍니다.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. 방침 변경 안내</h2>
          <p>
            본 개인정보처리방침은 법령 또는 서비스 변경에 따라 업데이트될 수 있습니다.
            변경 시 본 페이지를 통해 공지하며, 중요한 변경 사항은 사이트 공지를 통해 별도 안내합니다.
          </p>
        </section>

        <section className="legal-section">
          <h2>9. 개인정보 보호 책임자 및 연락처</h2>
          <ul>
            <li><strong>운영자:</strong> taxmbti.cc</li>
            <li><strong>이메일:</strong> <a href="mailto:contact@taxmbti.cc">contact@taxmbti.cc</a></li>
            <li><strong>소재지:</strong> 대한민국</li>
          </ul>
          <p>
            개인정보와 관련한 민원은 개인정보보호위원회(privacy.go.kr) 또는
            한국인터넷진흥원(privacy.kisa.or.kr)에 신고하실 수 있습니다.
          </p>
        </section>
      </div>

      <div className="legal-footer">
        <button className="legal-back-btn" onClick={onBack}>
          ← 테스트로 돌아가기
        </button>
      </div>
    </div>
  )
}
