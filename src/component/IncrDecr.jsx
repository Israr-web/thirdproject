import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

export default function IncrDecr() {
    const [num , setNum] = useState(0)

    // const fname = useParams();

    // varaible ka name same hi dana hai jo Route mai dae ga agr kuch or deya to wo error dega or useParam hum ko ek object return krta hai
    
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
    
  return (
    <>
 {/* <h1>Hello To {fname}</h1> */}
    <h1>{num}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={Decrement}>Decrement</button>

   

    {/* UseParams Hook ka use hum is leya krta hain k URL mai jo bhi route k sth name da gan wo hum ko yaha show hoga  */}
    </>
  )
}
