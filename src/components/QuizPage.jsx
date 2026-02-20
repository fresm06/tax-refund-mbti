import { useState, useEffect } from 'react'
import './QuizPage.css'

export default function QuizPage({ question, questionIndex, totalQuestions, onAnswer, transitioning }) {
  const [animKey, setAnimKey] = useState(0)
  const [selected, setSelected] = useState(null)
  const progress = (questionIndex / totalQuestions) * 100

  useEffect(() => {
    setAnimKey((k) => k + 1)
    setSelected(null)
  }, [questionIndex])

  const handleAnswer = (score, idx) => {
    if (transitioning || selected !== null) return
    setSelected(idx)
    setTimeout(() => onAnswer(score), 260)
  }

  return (
    <section className="quiz-page" aria-label="퀴즈 진행 화면">
      {/* Progress header */}
      <header className="quiz-header">
        <div className="quiz-meta" aria-live="polite">
          <span className="quiz-count">
            <span className="quiz-count-current">{questionIndex + 1}</span>
            <span className="quiz-count-sep"> / </span>
            <span className="quiz-count-total">{totalQuestions}</span>
          </span>
        </div>
        <div
          className="quiz-bar-track"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className="quiz-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="quiz-dots" aria-hidden="true">
          {Array.from({ length: totalQuestions }).map((_, i) => (
            <div
              key={i}
              className={`quiz-dot ${i < questionIndex ? 'done' : i === questionIndex ? 'active' : ''
                }`}
            />
          ))}
        </div>
      </header>

      {/* Question card */}
      <article key={animKey} className="question-card">
        <div className="question-emoji" aria-hidden="true">{question.emoji}</div>
        <h2 className="question-text">
          {question.question.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i === 0 && <br />}
            </span>
          ))}
        </h2>
      </article>

      {/* Answer buttons */}
      <div className="answers-wrap" role="group" aria-label="답변 선택">
        {question.answers.map((answer, i) => (
          <button
            key={i}
            className={`answer-btn ${selected === i ? 'answer-btn--selected' : ''} ${selected !== null && selected !== i ? 'answer-btn--faded' : ''
              }`}
            onClick={() => handleAnswer(answer.score, i)}
            disabled={transitioning || selected !== null}
            aria-pressed={selected === i}
          >
            <span className="answer-label" aria-hidden="true">{i === 0 ? 'A' : 'B'}</span>
            <span className="answer-text">
              {answer.text.split('\n').map((line, j) => (
                <span key={j} className={j === 1 ? 'answer-sub' : ''}>
                  {j === 1 && <br />}
                  {line}
                </span>
              ))}
            </span>
            {selected === i && <span className="answer-check" aria-hidden="true">✓</span>}
          </button>
        ))}
      </div>
    </section>
  )
}
