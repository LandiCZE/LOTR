export function shuffle<T>(array: T[]): T[] {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export function shuffleAnswers(answers: string[], correctIndex: number): { answers: string[]; correct: number } {
  const indexed = answers.map((a, i) => ({ answer: a, isCorrect: i === correctIndex }))
  const shuffled = shuffle(indexed)
  return {
    answers: shuffled.map((a) => a.answer),
    correct: shuffled.findIndex((a) => a.isCorrect),
  }
}
