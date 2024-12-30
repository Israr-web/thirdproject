import React from 'react'

export default function PassFunctionsAsProps(props) {
  return (
    <div>
        <h1>Pass function As Props</h1>

        {/* <button onClick={props.data}>Get Your Data </button> */}

        <button onClick={()=> props.data()}>Get Your Data </button>

    </div>
  )
}
