import React, { useContext } from 'react'
import ChildC from './ChildC'
import { MyData } from './UseContextHook';


// export default function ChildB({name}) {
//   return (
//     // <div>ChildB</div>

//     // <ChildC name={name}/>


//   )
// }

export default function ChildB({ name }) {
  const { valueData , getSalary } = useContext(MyData);
  const salary = 50000;
  return (

    <>
      <h1>Second Child </h1>
      <h1>Value Data : {valueData} </h1>
      <button onClick={() => getSalary(salary)}>Salary</button>
    </>


  )
}