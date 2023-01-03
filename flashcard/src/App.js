import { useEffect, useState } from "react";
import FlashCardList from "./FlashCardList";
import './app.css'
import axios from 'axios'
import {v4 as uuidv4} from 'uuid'


function App() {
  useEffect(() => {
    axios.get('https://opentdb.com/api.php?amount=10')
    .then(res => {
      
      setFlashcards(res.data.results.map((questionItem) => {
        console.log(questionItem)
        const answer = questionItem.correct_answer;
        const options = [...questionItem.incorrect_answers,answer];
        return {
          id:  `${uuidv4()}`,
          question:decodeString(questionItem.question),
          answer:answer,
          options:options.sort(() => Math.random() - .5)
        }
      }))
     
    })
  },[])

  function decodeString(str) {
    const textArea = document.createElement('textArea')
    textArea.innerHTML = str
    return textArea.value 
  }

  const [flashcards, setFlashcards] = useState([])
  return (
    <div className="container">
      <FlashCardList flashcards={flashcards} />
    </div>
    
  )
}

export default App;

