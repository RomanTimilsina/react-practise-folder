import React from 'react'
import FlashCard from './FlashCard'
import {v4 as uuidv4} from 'uuid'

export default function FlashCardList({flashcards}) {
  return (
    <div className='card-grid'>
    {flashcards.map(flashcard => {
        return <FlashCard key={uuidv4()} flashcard={flashcard} />
      })
    }
    </div>
    
  )
}
