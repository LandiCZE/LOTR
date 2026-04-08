"use client"

import { useState, useEffect, useCallback } from "react"
import { questions as allQuestions, Question, ChoiceQuestion, OrderQuestion, MatchQuestion, Category } from "@/data/questions"
import { shuffle, shuffleAnswers } from "@/lib/shuffle"
import OrderQuestionComponent from "@/components/OrderQuestion"
import MatchQuestionComponent from "@/components/MatchQuestion"

type Mode = "all" | "wrong"
type Phase = "select" | "playing" | "done"
type AnswerState = "idle" | "correct" | "wrong"

interface ActiveChoiceQuestion extends ChoiceQuestion {
  shuffledAnswers: string[]
  shuffledCorrect: number
  originalIndex: number
}

type ActiveQuestion = ActiveChoiceQuestion | (OrderQuestion & { originalIndex: number }) | (MatchQuestion & { originalIndex: number })

const CATEGORIES: { id: Category; label: string; emoji: string }[] = [
  { id: "characters", label: "Characters", emoji: "🧙" },
  { id: "fellowship", label: "Fellowship", emoji: "💍" },
  { id: "places",     label: "Places",     emoji: "🗺️" },
  { id: "lore",       label: "Lore",       emoji: "📜" },
  { id: "battles",    label: "Battles",    emoji: "⚔️" },
  { id: "quotes",     label: "Quotes",     emoji: "💬" },
  { id: "book-vs-film", label: "Book vs Film", emoji: "📽️" },
  { id: "creatures",    label: "Creatures",   emoji: "🐉" },
  { id: "flowers",      label: "Flora",       emoji: "🌿" },
  { id: "geography",    label: "Geography",   emoji: "🏔️" },
]

function prepareQuestions(pool: Question[]): ActiveQuestion[] {
  return shuffle(pool).map((q, i) => {
    if (q.type === "order" || q.type === "match") {
      return { ...q, originalIndex: i }
    }
    const { answers, correct } = shuffleAnswers(q.answers, q.correct)
    return { ...q, shuffledAnswers: answers, shuffledCorrect: correct, originalIndex: i }
  })
}

export default function Quiz() {
  const [phase, setPhase] = useState<Phase>("select")
  const [selectedCategories, setSelectedCategories] = useState<Set<Category>>(
    new Set(CATEGORIES.map((c) => c.id))
  )
  const [mode, setMode] = useState<Mode>("all")
  const [questions, setQuestions] = useState<ActiveQuestion[]>([])
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [bestStreak, setBestStreak] = useState(0)
  const [answerState, setAnswerState] = useState<AnswerState>("idle")
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [wrongQuestions, setWrongQuestions] = useState<Question[]>([])
  const [startTime, setStartTime] = useState<number>(Date.now())
  const [speedBonus, setSpeedBonus] = useState<number | null>(null)

  const q = questions[current]
  const progress = questions.length > 0 ? (current / questions.length) * 100 : 0

  const nextQuestion = useCallback(() => {
    setAnswerState("idle")
    setSelectedIndex(null)
    setSpeedBonus(null)
    if (current + 1 >= questions.length) {
      setPhase("done")
    } else {
      setCurrent((c) => c + 1)
      setStartTime(Date.now())
    }
  }, [current, questions.length])

  function toggleCategory(id: Category) {
    setSelectedCategories((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        if (next.size > 1) next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  function startQuiz(pool?: Question[]) {
    const base = pool ?? allQuestions.filter((q) =>
      !q.categories || q.categories.length === 0 || q.categories.some((c) => selectedCategories.has(c))
    )
    setQuestions(prepareQuestions(base))
    setCurrent(0)
    setScore(0)
    setStreak(0)
    setAnswerState("idle")
    setSelectedIndex(null)
    setWrongQuestions([])
    setStartTime(Date.now())
    setPhase("playing")
  }

  function handleAnswer(index: number) {
    if (answerState !== "idle" || q.type === "order") return
    const cq = q as ActiveChoiceQuestion
    const elapsed = (Date.now() - startTime) / 1000
    setSelectedIndex(index)

    if (index === cq.shuffledCorrect) {
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
        const already = prev.find((wq) => wq.question === cq.question)
        return already ? prev : [...prev, { question: cq.question, answers: cq.answers, correct: cq.correct, categories: cq.categories }]
      })
      if ("vibrate" in navigator) navigator.vibrate([100, 50, 100])
    }

    setTimeout(nextQuestion, 1200)
  }

  function getButtonClass(index: number) {
    if (q.type === "order") return ""
    const cq = q as ActiveChoiceQuestion
    const base = "w-full text-left px-5 py-4 rounded-xl text-base font-medium transition-all duration-200 border-2 active:scale-95 "
    if (answerState === "idle") return base + "border-amber-800/40 bg-stone-800 hover:bg-stone-700 hover:border-amber-600 text-stone-100"
    if (index === cq.shuffledCorrect) return base + "border-emerald-500 bg-emerald-900/60 text-emerald-200 scale-[1.02]"
    if (index === selectedIndex && answerState === "wrong") return base + "border-red-500 bg-red-900/60 text-red-200"
    return base + "border-stone-700/30 bg-stone-800/50 text-stone-500"
  }

  const questionCount = allQuestions.filter(
    (q) => !q.categories || q.categories.length === 0 || q.categories.some((c) => selectedCategories.has(c))
  ).length

  // — Category selection screen —
  if (phase === "select") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-stone-950 px-4">
        <div className="w-full max-w-sm space-y-6">
          <div className="text-center space-y-1">
            <div className="text-4xl">🧙‍♂️</div>
            <h1 className="text-2xl font-bold text-amber-400">LOTR Quiz</h1>
            <p className="text-stone-500 text-sm">Choose your categories</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {CATEGORIES.map((cat) => {
              const active = selectedCategories.has(cat.id)
              return (
                <button
                  key={cat.id}
                  onClick={() => toggleCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all active:scale-95 ${
                    active
                      ? "border-amber-600 bg-amber-900/30 text-amber-300"
                      : "border-stone-700 bg-stone-800/50 text-stone-500"
                  }`}
                >
                  <span>{cat.emoji}</span>
                  <span>{cat.label}</span>
                </button>
              )
            })}
          </div>

          <div className="text-center text-stone-500 text-sm">
            {questionCount} question{questionCount !== 1 ? "s" : ""} selected
          </div>

          <button
            onClick={() => startQuiz()}
            disabled={questionCount === 0}
            className="w-full py-4 rounded-xl bg-amber-700 hover:bg-amber-600 disabled:opacity-40 text-white font-bold text-base transition-colors"
          >
            Start Quiz
          </button>
        </div>
      </div>
    )
  }

  // — End screen —
  if (phase === "done") {
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
              {score}<span className="text-stone-400 text-xl">/{total}</span>
            </div>
            <div className="text-amber-400 font-semibold">{pct}% correct</div>
            <div className="text-stone-400 text-sm">Best streak: {bestStreak} 🔥</div>
          </div>
          <div className="space-y-3">
            {wrongQuestions.length > 0 && (
              <button
                onClick={() => { setMode("wrong"); startQuiz(wrongQuestions) }}
                className="w-full py-4 rounded-xl bg-amber-700 hover:bg-amber-600 text-white font-bold text-base transition-colors"
              >
                ⚔️ Retry {wrongQuestions.length} wrong answers
              </button>
            )}
            <button
              onClick={() => startQuiz()}
              className="w-full py-4 rounded-xl bg-stone-700 hover:bg-stone-600 text-white font-semibold text-base transition-colors"
            >
              Play again
            </button>
            <button
              onClick={() => { setBestStreak(0); setMode("all"); setPhase("select") }}
              className="w-full py-3 rounded-xl text-stone-500 hover:text-stone-300 text-sm transition-colors"
            >
              Change categories
            </button>
          </div>
        </div>
      </div>
    )
  }

  // — Quiz screen —
  if (!q) return <div className="min-h-screen bg-stone-950" />

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
            {streak >= 2 && <span className="text-orange-400 font-bold">🔥 {streak}</span>}
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1.5 bg-stone-800 rounded-full overflow-hidden">
          <div className="h-full bg-amber-600 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>

        {/* Category badge */}
        {q.categories && q.categories.length > 0 && (
          <div className="text-xs text-stone-500 uppercase tracking-wider font-medium">
            {q.categories.join(" · ")}
          </div>
        )}

        {/* Image (choice questions only) */}
        {'image' in q && q.image && (
          <div className="rounded-2xl overflow-hidden border border-stone-800 bg-white">
            <img src={q.image} alt="" className="w-full object-contain max-h-52 p-3" />
          </div>
        )}

        {/* Question */}
        <div className="bg-stone-900 rounded-2xl p-5 border border-stone-800">
          <p className="text-stone-100 text-lg font-semibold leading-snug">{q.question}</p>
        </div>

        {/* Order question */}
        {q.type === "order" && (
          <OrderQuestionComponent
            key={current}
            question={q}
            onResult={(_correct, partial, total) => {
              setScore((s) => s + partial)
              if (partial === total) {
                setStreak((s) => { const n = s + 1; setBestStreak((b) => Math.max(b, n)); return n })
                setAnswerState("correct")
              } else {
                setStreak(0)
                setAnswerState("wrong")
              }
              setTimeout(nextQuestion, 2000)
            }}
          />
        )}

        {/* Match question */}
        {q.type === "match" && (
          <MatchQuestionComponent
            key={current}
            question={q}
            onResult={(correct, total) => {
              setScore((s) => s + correct)
              if (correct === total) {
                setStreak((s) => { const n = s + 1; setBestStreak((b) => Math.max(b, n)); return n })
                setAnswerState("correct")
              } else {
                setStreak(0)
                setAnswerState("wrong")
              }
              setTimeout(nextQuestion, 1500)
            }}
          />
        )}

        {/* Choice question — feedback banner */}
        {q.type !== "order" && q.type !== "match" && (
          <div className={`text-center text-sm font-semibold py-2 rounded-lg transition-all duration-200 ${
            answerState === "correct" ? "bg-emerald-900/50 text-emerald-400"
            : answerState === "wrong" ? "bg-red-900/50 text-red-400"
            : "opacity-0 pointer-events-none bg-transparent"
          }`}>
            {answerState === "correct" && (speedBonus ? `Correct! +${speedBonus} speed bonus ⚡` : "Correct!")}
            {answerState === "wrong" && `Wrong — it was: ${'shuffledAnswers' in q ? q.shuffledAnswers[q.shuffledCorrect] : ''}`}
            {answerState === "idle" && "placeholder"}
          </div>
        )}

        {/* Choice question — answer buttons */}
        {q.type !== "order" && q.type !== "match" && 'shuffledAnswers' in q && (
          <div className="space-y-3">
            {q.shuffledAnswers.map((answer, i) => (
              <button key={i} onClick={() => handleAnswer(i)} className={getButtonClass(i)} disabled={answerState !== "idle"}>
                <span className="text-stone-500 mr-2">{String.fromCharCode(65 + i)}.</span>
                {answer}
              </button>
            ))}
          </div>
        )}

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
