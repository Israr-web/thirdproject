import React, { useEffect, useRef, useState } from 'react'

export default function Ref() {

    const [val , setVal] = useState("");
    // const [num , setNum] = useState(0);

    const RefElem = useRef(0);

    console.log(RefElem);
    

    const change = (event) => {
        setVal(event.target.value);
        // RefElem.current = RefElem.current+1;
    }

    const submit = () => {
        // RefElem.current.style.color="red";
        // RefElem.current.style.backgroundColor= "green"  
        // jab bhi hum submit ka button press kragen to color or background color change hoga useRef hook ki help sa hum direct Dom elecment to hit kr rha hain 
        setVal("");   // is sa hum submit ka button press kragen to setVal ko update kraga or input ki flied ko khali kr daga 
        RefElem.current.focus(); // focus use krana sa hum input jab khali hoga to jab bhi  focus rhaega input par    
    
    }
    // useEffect(()=>{
    //     // setNum(num+1);

    // })
  return (
    <>
    <h1>UseRef:</h1>
    <input type="text" ref={RefElem} value={val} onChange={change} />
    <button onClick={submit}>Submit</button>
    {/* <h1>Count :{RefElem.current}</h1> */}
    
    </>
  )
}


// useRef hook sa hum mutable value create krta hain jo re-render nhi krta hai 

// mutable value or varable wo hoti hai jis ko hum change kr saken 

// UseRef hum ko object return krta hai

// UseRef ki help sa hum direct Dom element ko access kr skta hain phly hum getElementbyId ki help lata tha ab UseRef ki help sa direct Dom element ko access kr skta hain