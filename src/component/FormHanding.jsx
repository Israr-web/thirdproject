import React, { useState } from 'react'

export default function FormHanding() {

    const [name , setName] = useState("");
    const [option , setOption] = useState("");
    const [agree , setAgree] = useState(false);

    function getformData(e){
        console.log(name,option,agree);
        
        e.preventDefault();

    }
  return (
    <div><h1>FormHanding</h1>
    <form onSubmit={getformData}>
        <input type="text" placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} /><br /><br />

        <select onChange={(e) => setOption(e.target.value)}>
            <option value="">Select Option</option>
            <option value="">A</option>
            <option value="">B</option>
            <option value="">C</option>
        </select><br /><br />
        <input type="checkbox"  onChange={(e) => setAgree(e.target.checked)} /><br /><br />

        <button type='submit'>Submit</button>

    </form>


    </div>
  )
}
