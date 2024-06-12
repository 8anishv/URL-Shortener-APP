import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputShortener from './InputShortener'
import BackgroundAnimate from './BackgroundAnimate'
import LinkResult from './LinkResult'

function App() {
  const [InputValue , setInputValue] = useState("")

  return (
    <>
      <div className='container'>
          <InputShortener setInputValue={setInputValue}/>
          <BackgroundAnimate/>
          <LinkResult InputValue={InputValue}/>
      </div>
    </>
  )
}

export default App
