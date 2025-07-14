import { useState } from 'react'
import './App.css'
import ToggleButton from './EvenHanding/ToggleButton/ToggleButton'
import Counter from './EvenHanding/Counter/Counter'
import InputDisplay from './EvenHanding/InputDisplay/InputDisplay'
import ColorPicker from './EvenHanding/ColorPicker/ColorPicker'
import Form from './EvenHanding/Form/Form'
import CheckBoxList from './EvenHanding/CheckBoxList/CheckBoxList'
import HoverBox from './EvenHanding/HoverBox/HoverBox'
import SearchFilter from './EvenHanding/SearchFilter/SearchFilter'

function App() {

  return (
    <>
    <div>
      <h1>Toggle Button Demo</h1>
      <ToggleButton />
    </div>
    <div>
      <h1>Counter Demo</h1>
      <Counter />
    </div>
    <div>
      <h1>Input Display Demo</h1>
      <InputDisplay />
    </div>
    <div>
      <h1>Color Picker Demo</h1>
      <ColorPicker />
    </div>
    <div>
      <h1>Form Demo</h1>
      <Form />
    </div>  
    <div>
      <h1>CheckBox List Demo</h1>
      <CheckBoxList />
    </div>
    <div>
      <h1>Hover Box Demo</h1>
      <HoverBox />
    </div>
    <div>
      <h1>Search Filter Demo</h1>
      <SearchFilter />
    </div>
    </>
  )
}

export default App
