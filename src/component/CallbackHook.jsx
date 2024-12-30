import React, { useCallback, useState } from 'react'
import Callback2 from './Callback2'

export default function CallbackHook() {

    const [add , setAdd] = useState(0);
    const [data , setData] = useState([]); // khali Array banen gan

    const todos = useCallback(()=>{
        setData((pre) =>[...pre , "New Todo"]); // ... 3dot mtlb ispirat Operater ispirat operater ki help sa hum last data ko store krta hain
    },[data])

    // useCallBack Hook jab call hoga jab data update hoga wrna ya call nhi hoga is sa hum ko page mai better speed hoti hai 

    
  return (
    <>
    <Callback2 todo={todos} data = {data}/>  <br /><br />  
    {/* ya hum props ki help sa data Callback2 component mai bhj rha hain ek sth 2 props */}
    <button onClick={()=> setAdd(add+1) }>Addition</button>
    <h1>{add}</h1>
    </>
  )
}

// jab hum function par kam krta hain jab hum usecallback ko use krta hain  

// use Callback Hook hum ko memoized function return krta hai jab k usememo Hook jo hai wo hum ko memoized value return krta hai 