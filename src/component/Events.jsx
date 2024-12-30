import React, { useState } from 'react'

export default function Events() {
    const [bg, setbg] = useState("red");
    const [text , setText] = useState("Click Here");
    
    const changeColor = () =>{
        setbg("green");
        setText("ChangeText");

    }
    const back = () =>{
        setbg("red");
        setText("Click Here");
    }

  return (
    <>
    <h1>Events Handling</h1>
    <div style={{backgroundColor:bg}} className='box'>
        <button onClick={changeColor} onDoubleClick={back}>{text}</button>

    </div>
    </>
  )
}
