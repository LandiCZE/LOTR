"use client"

import { useState, useEffect } from "react"
import {
  DndContext,
  closestCenter,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core"
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { OrderQuestion as OrderQuestionType } from "@/data/questions"
import { shuffle } from "@/lib/shuffle"

interface Props {
  question: OrderQuestionType
  onResult: (correct: boolean, partial: number, total: number) => void
}

interface SortableItemProps {
  id: string
  label: string
  state: "idle" | "correct" | "wrong"
  disabled: boolean
}

function SortableItem({ id, label, state, disabled }: SortableItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id, disabled })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : undefined,
  }

  const colorClass =
    state === "correct"
      ? "border-emerald-500 bg-emerald-900/60 text-emerald-200"
      : state === "wrong"
      ? "border-red-500 bg-red-900/60 text-red-200"
      : isDragging
      ? "border-amber-500 bg-stone-700 text-stone-100 shadow-xl"
      : "border-amber-800/40 bg-stone-800 text-stone-100"

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 text-sm font-medium select-none transition-colors ${colorClass}`}
    >
      {!disabled && (
        <span
          {...attributes}
          {...listeners}
          className="text-stone-500 cursor-grab active:cursor-grabbing touch-none shrink-0 text-lg leading-none"
        >
          ⠿
        </span>
      )}
      {disabled && (
        <span className="shrink-0 text-base">
          {state === "correct" ? "✓" : "✗"}
        </span>
      )}
      <span className="leading-snug">{label}</span>
    </div>
  )
}

export default function OrderQuestion({ question, onResult }: Props) {
  const [items, setItems] = useState<string[]>([])
  const [checked, setChecked] = useState(false)
  const [itemStates, setItemStates] = useState<Record<string, "idle" | "correct" | "wrong">>({})

  useEffect(() => {
    setItems(shuffle([...question.items]))
    setChecked(false)
    setItemStates({})
  }, [question])

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 100, tolerance: 5 } })
  )

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    if (over && active.id !== over.id) {
      setItems((prev) => {
        const oldIndex = prev.indexOf(active.id as string)
        const newIndex = prev.indexOf(over.id as string)
        return arrayMove(prev, oldIndex, newIndex)
      })
    }
  }

  function handleCheck() {
    const states: Record<string, "correct" | "wrong"> = {}
    let correct = 0
    items.forEach((item, i) => {
      if (item === question.items[i]) {
        states[item] = "correct"
        correct++
      } else {
        states[item] = "wrong"
      }
    })
    setItemStates(states)
    setChecked(true)
    onResult(correct === question.items.length, correct, question.items.length)
  }

  if (items.length === 0) return null

  return (
    <div className="space-y-3">
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          <div className="space-y-2">
            {items.map((item) => (
              <SortableItem
                key={item}
                id={item}
                label={item}
                state={itemStates[item] ?? "idle"}
                disabled={checked}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>

      {!checked && (
        <button
          onClick={handleCheck}
          className="w-full py-4 rounded-xl bg-amber-700 hover:bg-amber-600 text-white font-bold text-base transition-colors active:scale-95"
        >
          Check order
        </button>
      )}

      {checked && (
        <div className={`text-center text-sm font-semibold py-2 rounded-lg ${
          Object.values(itemStates).every(s => s === "correct")
            ? "bg-emerald-900/50 text-emerald-400"
            : "bg-red-900/50 text-red-400"
        }`}>
          {Object.values(itemStates).filter(s => s === "correct").length} / {question.items.length} correct
        </div>
      )}
    </div>
  )
}
