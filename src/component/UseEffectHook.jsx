import React, { useEffect, useState } from 'react'

// export default function UseEffectHook(props) {
//     // useEffect jo hai wo andr ek function lata hai  or useEffect hook ek br component k chlt hi run hota hai or jab bhi koi useState ya koi or function update hoga to ya useeffect rnder hoga
//     useEffect(()=>{
//       console.log("Use Effect hook with Props " , props);
//     })
//   return (
//     <>

//     <h1>Use Effect Hooks With Props</h1>
//     <h2>Count {props.data}</h2>

//     </>
//   )
// }

export default function UseEffectHook() {

  const [age, setAge] = useState(22);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Use Effect hook with Count  ");
  }, [count])

  useEffect(() => {
    console.log("Use Effect hook with Age  ");
  }, [age])

  return (
    <>
      <h2>Use Effect hook with Condition</h2>
      <h3>Age : {age}</h3>
      <h3>Count : {count}</h3>
      <button onClick={() => setAge(age + 1)}>Update Age</button>
      <button onClick={() => setCount(count + 1)}>Update Count</button>


    </>
  )
}
