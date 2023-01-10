import Slider from './Slider';
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
  return (
    <div className='container'>
      <div className='main-image' />
      <div className='sidebar'>
        <SidebarItem />
        <SidebarItem />
      </div>
      <Slider className='slider' />
    </div>
  );
}

export default App;
