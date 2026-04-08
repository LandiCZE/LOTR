"use client"

import { useState, useEffect, useCallback } from "react"
import { questions as allQuestions, Question } from "@/data/questions"
import { shuffle, shuffleAnswers } from "@/lib/shuffle"

type Mode = "all" | "wrong"
type AnswerState = "idle" | "correct" | "wrong"

interface ActiveQuestion extends Question {
  shuffledAnswers: string[]
  shuffledCorrect: number
  originalIndex: number
}

function prepareQuestions(pool: Question[]): ActiveQuestion[] {
  return shuffle(pool).map((q, i) => {
    const { answers, correct } = shuffleAnswers(q.answers, q.correct)
    return { ...q, shuffledAnswers: answers, shuffledCorrect: correct, originalIndex: i }
  })
}

export default function Quiz() {
  const [mode, setMode] = useState<Mode>("all")
  const [questions, setQuestions] = useState<ActiveQuestion[]>([])
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [bestStreak, setBestStreak] = useState(0)
  const [answerState, setAnswerState] = useState<AnswerState>("idle")
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [wrongQuestions, setWrongQuestions] = useState<Question[]>([])
  const [done, setDone] = useState(false)
  const [startTime, setStartTime] = useState<number>(Date.now())
  const [speedBonus, setSpeedBonus] = useState<number | null>(null)

  useEffect(() => {
    setQuestions(prepareQuestions(allQuestions))
    setStartTime(Date.now())
  }, [])

  const q = questions[current]
  const progress = questions.length > 0 ? (current / questions.length) * 100 : 0

  const nextQuestion = useCallback(() => {
    setAnswerState("idle")
    setSelectedIndex(null)
    setSpeedBonus(null)

    if (current + 1 >= questions.length) {
      setDone(true)
    } else {
      setCurrent((c) => c + 1)
      setStartTime(Date.now())
    }
  }, [current, questions.length])

  function handleAnswer(index: number) {
    if (answerState !== "idle") return

    const elapsed = (Date.now() - startTime) / 1000
    setSelectedIndex(index)

    if (index === q.shuffledCorrect) {
      const bonus = elapsed < 3 ? 1 : 0
      setScore((s) => s + 1 + bonus)
      setStreak((s) => {
        const next = s + 1
        setBestStreak((b) => Math.max(b, next))
        return next
      })
      setAnswerState("correct")
      if (bonus > 0) setSpeedBonus(bonus)
      if ("vibrate" in navigator) navigator.vibrate(50)
    } else {
      setStreak(0)
      setAnswerState("wrong")
      setWrongQuestions((prev) => {
        const already = prev.find((wq) => wq.question === q.question)
        return already ? prev : [...prev, { question: q.question, answers: q.answers, correct: q.correct, category: q.category }]
      })
      if ("vibrate" in navigator) navigator.vibrate([100, 50, 100])
    }

    setTimeout(nextQuestion, 1200)
  }

  function startWrongOnly() {
    if (wrongQuestions.length === 0) return
    setQuestions(prepareQuestions(wrongQuestions))
    setCurrent(0)
    setScore(0)
    setStreak(0)
    setAnswerState("idle")
    setSelectedIndex(null)
    setDone(false)
    setWrongQuestions([])
    setMode("wrong")
    setStartTime(Date.now())
  }

  function restart() {
    setQuestions(prepareQuestions(allQuestions))
    setCurrent(0)
    setScore(0)
    setStreak(0)
    setBestStreak(0)
    setAnswerState("idle")
    setSelectedIndex(null)
    setDone(false)
    setWrongQuestions([])
    setMode("all")
    setStartTime(Date.now())
  }

  function getButtonClass(index: number) {
    const base =
      "w-full text-left px-5 py-4 rounded-xl text-base font-medium transition-all duration-200 border-2 active:scale-95 "

    if (answerState === "idle") {
      return base + "border-amber-800/40 bg-stone-800 hover:bg-stone-700 hover:border-amber-600 text-stone-100"
    }

    if (index === q.shuffledCorrect) {
      return base + "border-emerald-500 bg-emerald-900/60 text-emerald-200 scale-[1.02]"
    }

    if (index === selectedIndex && answerState === "wrong") {
      return base + "border-red-500 bg-red-900/60 text-red-200"
    }

    return base + "border-stone-700/30 bg-stone-800/50 text-stone-500"
  }

  if (done) {
    const total = questions.length
    const pct = Math.round((score / total) * 100)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-stone-950 px-4 text-center">
        <div className="w-full max-w-sm space-y-6">
          <div className="text-6xl">{pct >= 80 ? "🏆" : pct >= 50 ? "⚔️" : "📖"}</div>
          <h2 className="text-2xl font-bold text-amber-400">
            {pct >= 80 ? "Worthy of the Fellowship!" : pct >= 50 ? "A true adventurer" : "Back to the library..."}
          </h2>
          <div className="bg-stone-800 rounded-2xl p-5 space-y-3">
            <div className="text-4xl font-bold text-white">
              {score}
              <span className="text-stone-400 text-xl">/{total}</span>
            </div>
            <div className="text-amber-400 font-semibold">{pct}% correct</div>
            <div className="text-stone-400 text-sm">Best streak: {bestStreak} 🔥</div>
          </div>

          <div className="space-y-3">
            {wrongQuestions.length > 0 && (
              <button
                onClick={startWrongOnly}
                className="w-full py-4 rounded-xl bg-amber-700 hover:bg-amber-600 text-white font-bold text-base transition-colors"
              >
                ⚔️ Retry {wrongQuestions.length} wrong answers
              </button>
            )}
            <button
              onClick={restart}
              className="w-full py-4 rounded-xl bg-stone-700 hover:bg-stone-600 text-white font-semibold text-base transition-colors"
            >
              Start over
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (questions.length === 0 || !q) return <div className="min-h-screen bg-stone-950" />

  return (
    <div className="flex flex-col min-h-screen bg-stone-950 px-4 pt-4 pb-8">
      <div className="w-full max-w-sm mx-auto space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-stone-400">
            {current + 1}/{questions.length}
            {mode === "wrong" && <span className="ml-2 text-amber-500 text-xs">RETRY MODE</span>}
          </span>
          <div className="flex items-center gap-3">
            <span className="text-stone-300 font-medium">{score} pts</span>
            {streak >= 2 && (
              <span className="text-orange-400 font-bold">
                🔥 {streak}
              </span>
            )}
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1.5 bg-stone-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-amber-600 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Category badge */}
        {q.category && (
          <div className="text-xs text-stone-500 uppercase tracking-wider font-medium">
            {q.category}
          </div>
        )}

        {/* Image */}
        {q.image && (
          <div className="rounded-2xl overflow-hidden border border-stone-800 bg-white">
            <img
              src={q.image}
              alt=""
              className="w-full object-contain max-h-52 p-3"
            />
          </div>
        )}

        {/* Question */}
        <div className="bg-stone-900 rounded-2xl p-5 border border-stone-800">
          <p className="text-stone-100 text-lg font-semibold leading-snug">{q.question}</p>
        </div>

        {/* Feedback banner */}
        <div
          className={`text-center text-sm font-semibold py-2 rounded-lg transition-all duration-200 ${
            answerState === "correct"
              ? "bg-emerald-900/50 text-emerald-400"
              : answerState === "wrong"
              ? "bg-red-900/50 text-red-400"
              : "opacity-0 pointer-events-none bg-transparent"
          }`}
        >
          {answerState === "correct" && (speedBonus ? `Correct! +${speedBonus} speed bonus ⚡` : "Correct!")}
          {answerState === "wrong" && `Wrong — it was: ${q.shuffledAnswers[q.shuffledCorrect]}`}
          {answerState === "idle" && "placeholder"}
        </div>

        {/* Answer buttons */}
        <div className="space-y-3">
          {q.shuffledAnswers.map((answer, i) => (
            <button key={i} onClick={() => handleAnswer(i)} className={getButtonClass(i)} disabled={answerState !== "idle"}>
              <span className="text-stone-500 mr-2">{String.fromCharCode(65 + i)}.</span>
              {answer}
            </button>
          ))}
        </div>

        {/* Wrong answers tracker */}
        {wrongQuestions.length > 0 && answerState === "idle" && (
          <div className="text-center text-xs text-stone-600">
            {wrongQuestions.length} wrong answer{wrongQuestions.length > 1 ? "s" : ""} queued for retry
          </div>
        )}
      </div>
    </div>
  )
}
