import React from 'react'

export default function Callback2({todo , data}) {
    console.log("Todo Function");
    
  return (
    <>
    {
        data.map((curVal , index)=>{
            return <h1 key={index}>{curVal+index}</h1> // key unqiue honi chachiya is leya index pass kraga index unqiue ati hai hr br
        })
    }
    <button onClick={todo}> ADD TODO</button>
    </>
  )
}
