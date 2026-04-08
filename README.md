# LOTR Quiz 🧙‍♂️

A mobile-first Middle-earth trivia app built with Next.js. Test your knowledge of The Lord of the Rings and The Hobbit before Monday.

## Features

- **4 question types** — multiple choice, order events, match the pair, visual (image-based)
- **10 categories** — Characters, Fellowship, Places, Lore, Battles, Creatures, Flora, Geography, Book vs Film, Quotes
- **Category filter** — pick one or more categories before each round
- **Streak system** — 🔥 streak counter resets on wrong answers
- **Speed bonus** — +1 point for answering under 3 seconds
- **Wrong answers retry** — at the end, replay only the questions you missed
- **Mobile-first** — big tap targets, vibration feedback, works great on phone

## Tech Stack

- [Next.js 14](https://nextjs.org) (App Router)
- React 18
- TypeScript
- Tailwind CSS
- [@dnd-kit](https://dndkit.com) — drag-and-drop for order questions

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding Questions

All questions live in [`data/questions.ts`](data/questions.ts). Three types are supported:

**Multiple choice**
```ts
{
  question: "What is Frodo's sword called?",
  answers: ["Glamdring", "Andúril", "Sting", "Orcrist"],
  correct: 2,
  categories: ["characters"],
}
```

**Order** (drag to arrange)
```ts
{
  type: "order",
  question: "Order these events chronologically:",
  items: ["Bilbo finds the Ring", "Battle of Five Armies", "Frodo leaves the Shire"],
  categories: ["lore"],
}
```

**Match the pair**
```ts
{
  type: "match",
  question: "Match each character to their weapon:",
  pairs: [
    { left: "Gandalf", right: "Glamdring" },
    { left: "Frodo",   right: "Sting" },
  ],
  categories: ["characters"],
}
```

**With image** (add `image` field to any multiple choice question)
```ts
{
  question: "Which kingdom does this flag belong to?",
  answers: ["Rohan", "Gondor", "Arnor", "Númenor"],
  correct: 1,
  image: "/images/your-image.jpg",  // or a full URL
  categories: ["lore"],
}
```

Questions can belong to multiple categories: `categories: ["battles", "characters"]`
