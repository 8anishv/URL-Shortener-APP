import React, { useState } from 'react'

const InputShortener = ({setInputValue}) => {
  const [value , setValue] = useState("")

  const handleClick =()=>{
    setInputValue(value)
    setValue("")
  }
  return (
    <div className='InputContainer'>
        <h1> URL <span>Shortener</span></h1>
        <div>
            <input 
            type="text" 
            placeholder='Paste the long URL'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={handleClick}>Shorten</button>
        </div>
    </div>
  )
}

export default InputShortener