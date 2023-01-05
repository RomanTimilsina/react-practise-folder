import { useEffect, useRef, useState } from "react";
import FlashCardList from "./FlashCardList";
import './app.css'
import axios from 'axios'
import {v4 as uuidv4} from 'uuid'


function App() {
  const [flashcards, setFlashcards] = useState([])
  const [categories, setCategories] = useState([])

  const categoryEl = useRef()
  const amountEl = useRef()

  useEffect(() => {
    axios.get('https://opentdb.com/api_category.php')
    .then(res => {
      setCategories(res.data.trivia_categories)
    })
  },[])

  useEffect(() => {
    axios.get('https://opentdb.com/api.php?amount=10')
    .then(res => {
      
      setFlashcards(res.data.results.map((questionItem) => {
        
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

  function handleSubmit(e){
    e.preventDefault()
    axios.get('https://opentdb.com/api.php',{
      params:{
        amount: amountEl.current.value,
        category: categoryEl.current.value
      }
    })
    .then(res => {
      
      setFlashcards(res.data.results.map((questionItem) => {
        
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
  }

  return (
    <>
    <form className="header" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select id='category' ref={categoryEl}>
        {categories.map(category => {
          return <option value={category.id} key={category.id}>{category.name}</option>
        })}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="amount">amount</label>
        <input id='amount' ref={amountEl} type='number' step='1' min='1' defaultValue={10} />
      </div>
      <div className="form-group">
        <button className='btn'>Generate</button>
      </div>
    </form>
    <div className="container" >
      <FlashCardList flashcards={flashcards} />
    </div>
    </>
  )
}

export default App;

