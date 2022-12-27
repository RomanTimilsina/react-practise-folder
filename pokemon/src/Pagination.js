import React from 'react'

export default function Pagination({previous, next}) {
  return (
    <div>
      
      {previous && <button onClick = {previous}>Prev</button>}
      {next && <button onClick = {next}>Next</button>}
    </div>
  )
}
