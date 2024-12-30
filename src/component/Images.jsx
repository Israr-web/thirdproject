import React, { useState } from 'react';
import './cssfile/Images.css';

export default function Images() {
    const [count , setCount] = useState(0);

    const incre = () =>{
        setCount(count+1);

    }
    return (
        <>
          <div className='box'>
            <h1>{count}</h1>
            <button onClick={incre}>Increment</button>
          </div>
        </>
    )
}
