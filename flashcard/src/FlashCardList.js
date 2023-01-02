import React from 'react'
import FlashCard from './FlashCard'


export default function FlashCardList({flashcards}) {
  return (
    <>
    {
      flashcards.map(flashcard => {
        return <FlashCard flashcard={flashcard} />
      })
    }
    </>
    
  )
}
