import React, { useState, useRef, useEffect } from 'react'
import {v4 as uuidv4} from 'uuid'

export default function FlashCard({flashcard}) {
  const [ flip, setFlip ] = useState(false)
  const [ height, setHeight ] = useState('height')

  const frontEl = useRef()
  const backEl = useRef()

  function setMaxHeight(){
    const frontHeight = frontEl.current.getBoundingClientRect().height
    const backHeight = backEl.current.getBoundingClientRect().height
    setHeight(Math.max(frontHeight, backHeight, 100))
  }

  useEffect(() => {
    window.addEventListener('resize', setMaxHeight)
    return () => window.removeEventListener('resize', setMaxHeight)
  }, [])
  
  useEffect( setMaxHeight, [ flashcard.question, flashcard.answer, flashcard.options ] )

  return (
    <div 
    style={{height:height}}
    className = { `card ${flip ? 'flip':''}` }
    onClick = { () => setFlip(!flip) } 
    >
      <div
      className='front'
      ref={frontEl}
      >
        {flashcard.question}
      <div className='flashcard-options'>
        {
          flashcard.options.map(option => {
            return <div className='flashcard-option' key={uuidv4()} > {option} </div>
          })
        }
      </div>
      </div>
      <div className='back' ref={backEl} > {flashcard.answer} </div>

    </div>
  )
}


