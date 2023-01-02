import { useState } from "react";
import FlashCardList from "./FlashCardList";
import './app.css'


function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASH_CARD)
  return (
    <FlashCardList flashcards={flashcards} />
  )
}

export default App;

const SAMPLE_FLASH_CARD = [
  {
    id:'1',
    question:'Question 1?',
    answer:'Answer 1',
    options:[
      2,
      3,
      4,
      5
    ]
  },
  {
    id:'2',
    question:'Question 2?',
    answer:'Answer 2',
    options:[
      2,
      3,
      4,
      5
    ]
  }
]