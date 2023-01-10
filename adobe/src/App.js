import Slider from './Slider';
import {useState} from 'react'
import './App.css';
import SidebarItem from './SidebarItem';

const DEFAULT_OPTIONS = [
  {
    name:'Brightness',
    property:'brightness',
    value:100,
    range:
    {
      min:0,
      max:200
    },
    unit:"%"
  },
  {
    name:'Saturation',
    property:'saturate',
    value:100,
    range:
    {
      min:0,
      max:200
    },
    unit:"%"
  },
  {
    name:'Contrast',
    property:'contrast',
    value:100,
    range:
    {
      min:0,
      max:200
    },
    unit:"%"
  },
  {
    name:'Grayscale',
    property:'grayscale',
    value: 0,
    range:
    {
      min:0,
      max:100
    },
    unit:"%"
  },
  {
    name:'Sepia',
    property:'sepia',
    value:100,
    range:
    {
      min:0,
      max:200
    },
    unit:"%"
  },
  {
    name:'Blur',
    property:'blur',
    value: 0,
    range:
    {
      min:0,
      max:20
    },
    unit:"px"
  },
  {
    name:'Hue-rotate',
    property:'hue-rotate',
    value:0,
    range:
    {
      min:0,
      max:360
    },
    unit:"deg"
  }
]

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [options, setOptions] = useState(DEFAULT_OPTIONS)
  const selectedItems = options[selectedIndex]

  function handleSliderChange({target}){
    setOptions(prevOption => {
      return prevOption.map((option, index) => {
        if(index === selectedIndex) return {...option, value: target.value}
        return option
      })
    })
  }
  
  function getStyle(){
    const filters = options.map(option => {
      return `${option.property}(${option.value}${option.unit})`
    })

    return {filter : filters.join(' ')}
  }

  return (
    <div className='container'>
      <div className='main-image'  style={getStyle()}/>
      <div className='sidebar'>
        {
          options.map((option, index) => {
            return <SidebarItem 
                    active={index === selectedIndex}
                    key={index} 
                    option={option} 
                    handleClick={() => setSelectedIndex(index)}
                    />
          })
        }
      </div>
      <Slider 
      min={selectedItems.range.min}
      max={selectedItems.range.max}
      value={selectedItems.value}
      className='slider' 
      handleSliderChange={handleSliderChange}
      />
    </div>
  );
}

export default App;
