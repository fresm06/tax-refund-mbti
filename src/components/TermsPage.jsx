import './LegalPage.css'

const UPDATED = '2025년 2월 20일'

export default function TermsPage({ onBack }) {
  return (
    <div className="legal-page">
      <div className="legal-header">
        <button className="legal-back" onClick={onBack} aria-label="뒤로가기">
          ← 돌아가기
        </button>
        <h1 className="legal-title">이용약관</h1>
        <p className="legal-updated">최종 업데이트: {UPDATED}</p>
      </div>

      <div className="legal-body">
        <section className="legal-section">
          <h2>제1조 (목적)</h2>
          <p>
            본 약관은 <strong>taxmbti.cc</strong>(이하 "사이트")가 제공하는
            "13월의 월급 소비 MBTI 테스트"(이하 "서비스") 이용과 관련하여
            사이트와 이용자 간의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.
          </p>
        </section>

        <section className="legal-section">
          <h2>제2조 (서비스 소개)</h2>
          <p>
            본 서비스는 연말정산 소비 성향을 파악하는 심리테스트로,
            8가지 질문에 대한 응답을 바탕으로 소비 유형을 분류하고 관련 정보를 제공합니다.
          </p>
          <ul>
            <li>무료로 제공되는 오락·정보 목적의 서비스입니다.</li>
            <li>별도의 회원가입 없이 이용 가능합니다.</li>
            <li>테스트 결과는 응답 시점에 즉시 생성되며 서버에 저장되지 않습니다.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>제3조 (면책조항)</h2>
          <p>
            본 서비스의 테스트 결과는 <strong>순수한 오락 목적</strong>으로 제공되며,
            전문적인 재무·세무 조언을 대체하지 않습니다.
          </p>
          <ul>
            <li>결과는 이용자의 응답에 기반하여 자동 산출되며 정확성을 보장하지 않습니다.</li>
            <li>연말정산, 세금, 투자 관련 중요한 결정은 반드시 공인된 전문가와 상담하시기 바랍니다.</li>
            <li>사이트는 결과의 활용으로 인한 어떠한 손실에 대해서도 책임을 지지 않습니다.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>제4조 (지식재산권)</h2>
          <p>
            본 서비스의 콘텐츠(텍스트, 디자인, 로직, 코드 등)에 대한 지식재산권은
            사이트에 귀속됩니다. 이용자는 사이트의 사전 동의 없이 콘텐츠를 상업적 목적으로
            복제·배포·수정·판매할 수 없습니다.
          </p>
          <p>
            단, 테스트 결과를 개인 SNS에 공유하는 행위는 허용됩니다.
          </p>
        </section>

        <section className="legal-section">
          <h2>제5조 (광고)</h2>
          <p>
            본 사이트는 Google AdSense를 통해 광고를 게재합니다. 광고 콘텐츠는
            Google이 제공하며, 사이트는 광고의 내용에 대한 책임을 지지 않습니다.
            광고 클릭은 이용자의 자유로운 의사에 따라 이루어지며, 클릭으로 인한
            제3자 사이트 이용은 해당 사이트의 정책을 따릅니다.
          </p>
        </section>

        <section className="legal-section">
          <h2>제6조 (서비스 변경 및 중단)</h2>
          <p>
            사이트는 운영상·기술상 필요에 따라 서비스 내용을 변경하거나
            일시적으로 중단할 수 있습니다. 서비스 중단 시 사전 공지를 원칙으로 하나,
            불가피한 경우 사후 공지할 수 있습니다.
          </p>
        </section>

        <section className="legal-section">
          <h2>제7조 (이용자 의무)</h2>
          <p>이용자는 아래 행위를 해서는 안 됩니다.</p>
          <ul>
            <li>서비스를 이용하여 타인의 명예를 훼손하거나 불법 행위를 조장하는 행위</li>
            <li>자동화된 수단(봇, 스크래퍼 등)으로 대량 접근하는 행위</li>
            <li>서비스의 정상적인 운영을 방해하는 행위</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>제8조 (준거법 및 분쟁 해결)</h2>
          <p>
            본 약관은 대한민국 법률에 따라 해석되며, 서비스 이용과 관련한 분쟁은
            민사소송법상의 관할 법원에서 해결합니다.
          </p>
        </section>

        <section className="legal-section">
          <h2>제9조 (연락처)</h2>
          <ul>
            <li><strong>운영:</strong> taxmbti.cc</li>
            <li><strong>문의 이메일:</strong> <a href="mailto:contact@taxmbti.cc">contact@taxmbti.cc</a></li>
          </ul>
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
