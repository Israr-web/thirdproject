import React, { useContext } from 'react';
import ChildB from './ChildB';

import { MyData } from './UseContextHook';

// export default function ChildA({name}) {
//   return (
//     // <div>ChildA</div>

//     // <ChildB name={name}/>
//   )
// }

export default function ChildA() {
  const { valueData } = useContext(MyData);

  return (
    <>
      <h1>First Child </h1>
      <h1>Value Data : {valueData} </h1>
      <ChildB />
    </>


  );
}