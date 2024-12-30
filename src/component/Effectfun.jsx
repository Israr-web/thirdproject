import React,{ useEffect, useState } from 'react'

export default function Effectfun() {
    const [num , setNum] = useState(0);
    const [data , setData] = useState("Code");
    const increment = () =>{
        setNum(num+1);
    }
    const Decrement = () =>{
        if(num == 0){
            alert("Plz Increment value No Decrement Value 0");
        }
        else{
        setNum(num-1);
        }
    }

    const change = () =>{
        setData("Code With Israr");
    }


    useEffect(() =>{
        console.log("Running UseEffect()");
    },[]) // data use sa jab bhi hum usestate ko Update krenga useEffect run hoga wrna ya run nhi hoga
  return (
    <>
    <h1>{data}</h1>
     <h1>{num}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={Decrement}>Decrement</button>
    <button onClick={change}>Change</button>

    </>
  )
}


