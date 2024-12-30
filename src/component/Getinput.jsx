import React, { useState } from 'react'

export default function Getinput() {

    const [data , setData] = useState(null);
    const [print , setPrint] = useState(false);

    function getValue(val){
        console.log(val.target.value);
        setData(val.target.value);
        setPrint(false);
    }


  return (
    <div>
        {
            print ? 
        <h1>{data}</h1>
        : null

        }
         {/* <h1>{data}</h1> */}
        <input type="text" onChange={getValue} />
        <button onClick={()=> setPrint(true)}>Display Value</button>


    </div>
  )
}
