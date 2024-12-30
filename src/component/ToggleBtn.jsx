import React, { useState } from 'react'

export default function ToggleBtn() {

    const [res , setRes] = useState(true);
  return (
    <div>
        <h1>Show Hide and Toggle Btn</h1>
        {
                 res ?  <h2>Hello...........</h2> : null
      
        }
        {/* <h2>Hello...........</h2> */}
        <button onClick={() => setRes(false)}>Hide</button>
        <button onClick={() => setRes(true)}>Show</button>
        <button onClick={() => setRes(!res)}>Toggle</button>





    </div>
  )
}
