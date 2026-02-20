import { useState } from 'react'
import IntroPage from './components/IntroPage'
import QuizPage from './components/QuizPage'
import ResultPage from './components/ResultPage'
import { questions } from './data/questions'
import { getResult } from './data/results'
import './App.css'

export default function App() {
  const [phase, setPhase] = useState('intro') // 'intro' | 'quiz' | 'result'
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const [result, setResult] = useState(null)

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

  return (
    <main className="app">
      {phase === 'intro' && <IntroPage onStart={handleStart} />}

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
        <ResultPage result={result} onRestart={handleRestart} />
      )}
    </main>
  )
}
