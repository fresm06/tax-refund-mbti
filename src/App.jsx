import { useState } from 'react'
import IntroPage from './components/IntroPage'
import QuizPage from './components/QuizPage'
import ResultPage from './components/ResultPage'
import PrivacyPage from './components/PrivacyPage'
import TermsPage from './components/TermsPage'
import { questions } from './data/questions'
import { getResult } from './data/results'
import './App.css'

// phase: 'intro' | 'quiz' | 'result' | 'privacy' | 'terms'
export default function App() {
  const [phase, setPhase] = useState('intro')
  const [prevPhase, setPrevPhase] = useState('intro')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const [result, setResult] = useState(null)

  const navigateTo = (target) => {
    setPrevPhase(phase)
    setPhase(target)
    window.scrollTo(0, 0)
  }

  const handleStart = () => {
    setPhase('quiz')
    setCurrentIndex(0)
    setScore(0)
    setResult(null)
  }

  const handleAnswer = (answerScore) => {
    if (transitioning) return
    setTransitioning(true)
    const newScore = score + answerScore

    setTimeout(() => {
      if (currentIndex + 1 >= questions.length) {
        setResult(getResult(newScore))
        setPhase('result')
      } else {
        setScore(newScore)
        setCurrentIndex((i) => i + 1)
      }
      setTransitioning(false)
    }, 380)
  }

  const handleRestart = () => {
    setPhase('intro')
    setCurrentIndex(0)
    setScore(0)
    setResult(null)
  }

  const handleLegalBack = () => {
    const mainPhases = ['intro', 'quiz', 'result']
    setPhase(mainPhases.includes(prevPhase) ? prevPhase : 'intro')
    window.scrollTo(0, 0)
  }

  return (
    <main className="app">
      {phase === 'intro' && (
        <IntroPage onStart={handleStart} onNavigate={navigateTo} />
      )}

      {phase === 'quiz' && (
        <QuizPage
          question={questions[currentIndex]}
          questionIndex={currentIndex}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
          transitioning={transitioning}
        />
      )}

      {phase === 'result' && result && (
        <ResultPage
          result={result}
          onRestart={handleRestart}
          onNavigate={navigateTo}
        />
      )}

      {phase === 'privacy' && <PrivacyPage onBack={handleLegalBack} />}

      {phase === 'terms' && <TermsPage onBack={handleLegalBack} />}
    </main>
  )
}
