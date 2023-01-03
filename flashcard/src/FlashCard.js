import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'

export default function FlashCard({flashcard}) {
  const [flip, setFlip] = useState(false)

  return (
    <div 
    className={`card ${flip ? 'flip':''}`}
    onClick={() => setFlip(!flip)}>
      <div
      className='front'
      >
        {flashcard.question}
      <div className='flashcard-options'>
        {
          flashcard.options.map(option => {
            return <div className='flashcard-option' key={uuidv4()} >{option}</div>
          })
        }
      </div>
      </div>
      <div className='back'>{flashcard.answer}</div>

    </div>
  )
}

