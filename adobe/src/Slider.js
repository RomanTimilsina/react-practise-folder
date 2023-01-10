import React from 'react'

export default function Slider({handleSliderChange, min, max, value}) {
  return (
    <div className='slider-container'>
      <input type='range' className='slider' 
      min={min}
      max={max}
      value={value}
      onChange={handleSliderChange}
      />
    </div>
  )
}
