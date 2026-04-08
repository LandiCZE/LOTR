"use client"

import { useState, useEffect } from "react"
import { MatchQuestion as MatchQuestionType } from "@/data/questions"
import { shuffle } from "@/lib/shuffle"

interface Props {
  question: MatchQuestionType
  onResult: (correct: number, total: number) => void
}

type MatchState = "idle" | "correct" | "wrong"

export default function MatchQuestion({ question, onResult }: Props) {
  const [leftItems, setLeftItems] = useState<string[]>([])
  const [rightItems, setRightItems] = useState<string[]>([])
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null)
  const [matched, setMatched] = useState<Record<string, string>>({})   // left → right
  const [states, setStates] = useState<Record<string, MatchState>>({})  // item → state
  const [done, setDone] = useState(false)

  useEffect(() => {
    setLeftItems(shuffle(question.pairs.map(p => p.left)))
    setRightItems(shuffle(question.pairs.map(p => p.right)))
    setSelectedLeft(null)
    setMatched({})
    setStates({})
    setDone(false)
  }, [question])

  function handleLeft(item: string) {
    if (done || matched[item]) return
    setSelectedLeft(prev => prev === item ? null : item)
  }

  function handleRight(item: string) {
    if (done || !selectedLeft) return
    if (Object.values(matched).includes(item)) return

    const correctRight = question.pairs.find(p => p.left === selectedLeft)?.right
    const isCorrect = correctRight === item

    if (isCorrect) {
      const newMatched = { ...matched, [selectedLeft]: item }
      setMatched(newMatched)
      setStates(prev => ({ ...prev, [selectedLeft]: "correct", [item]: "correct" }))
      setSelectedLeft(null)

      if (Object.keys(newMatched).length === question.pairs.length) {
        setDone(true)
        onResult(question.pairs.length, question.pairs.length)
      }
    } else {
      setStates(prev => ({ ...prev, [selectedLeft]: "wrong", [item]: "wrong" }))
      setTimeout(() => {
        setStates(prev => {
          const next = { ...prev }
          if (next[selectedLeft!] === "wrong") delete next[selectedLeft!]
          if (next[item] === "wrong") delete next[item]
          return next
        })
        setSelectedLeft(null)
      }, 600)
    }
  }

  function getLeftClass(item: string) {
    const base = "px-3 py-2.5 rounded-xl border-2 text-sm font-medium text-center transition-all duration-150 active:scale-95 "
    if (states[item] === "correct") return base + "border-emerald-500 bg-emerald-900/60 text-emerald-200 cursor-default"
    if (states[item] === "wrong")   return base + "border-red-500 bg-red-900/60 text-red-200"
    if (selectedLeft === item)      return base + "border-amber-400 bg-amber-900/40 text-amber-200"
    if (matched[item])              return base + "border-emerald-500 bg-emerald-900/60 text-emerald-200 cursor-default"
    return base + "border-amber-800/40 bg-stone-800 text-stone-100 cursor-pointer hover:border-amber-600"
  }

  function getRightClass(item: string) {
    const base = "px-3 py-2.5 rounded-xl border-2 text-sm font-medium text-center transition-all duration-150 active:scale-95 "
    const alreadyMatched = Object.values(matched).includes(item)
    if (states[item] === "correct" || alreadyMatched) return base + "border-emerald-500 bg-emerald-900/60 text-emerald-200 cursor-default"
    if (states[item] === "wrong")   return base + "border-red-500 bg-red-900/60 text-red-200"
    if (!selectedLeft)              return base + "border-stone-700 bg-stone-800/50 text-stone-500 cursor-default"
    return base + "border-amber-800/40 bg-stone-800 text-stone-100 cursor-pointer hover:border-amber-600"
  }

  const correctCount = Object.keys(matched).length

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-2">
          {leftItems.map(item => (
            <button key={item} onClick={() => handleLeft(item)} className={getLeftClass(item)}>
              {item}
            </button>
          ))}
        </div>
        <div className="space-y-2">
          {rightItems.map(item => (
            <button key={item} onClick={() => handleRight(item)} className={getRightClass(item)}>
              {item}
            </button>
          ))}
        </div>
      </div>

      {selectedLeft && !done && (
        <p className="text-center text-xs text-amber-400">
          "{selectedLeft}" selected — now tap its match →
        </p>
      )}

      {done && (
        <div className="text-center text-sm font-semibold py-2 rounded-lg bg-emerald-900/50 text-emerald-400">
          {correctCount}/{question.pairs.length} matched!
        </div>
      )}
    </div>
  )
}
