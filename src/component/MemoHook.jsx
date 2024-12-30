import React, { useMemo, useState } from 'react'

export default function MemoHook() {

    const [add , setAdd] = useState(0);
    const [state , setState] = useState(false);
    const addition = () =>{
        setAdd(add+1);
    }

    function count(add){
        console.log("Function Calling " , add);
        for(let i = 0 ; i < 1000000; i++){
        };
        return add;
    }

    let num =  useMemo(()=>{
        return count(add);
    },[add])

  return (
    <>
    <button onClick={addition}>Addition</button>
    <h1>{num}</h1>

    <button onClick={()=> setState(!state)}>Plz Click</button>
    <h1>{state ? "You Click" : "Plz Click"}</h1>
    </>
  )
}

// jab hum calculation par kam krta hain jab hum usememo ko use krta hain  
// UseMemo hook hum ko return krta hai memoized value or ya humari Appliction ki performance ko better krta hain or useMemo hook jab hi run krta hai jab hum koi dependenice ya function  ko update krta hain 