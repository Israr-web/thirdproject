import React, { useState } from 'react'

export default function ReactFragment
    () {
    const [input, setInput] = useState(false);
    const [place, setPlace] = useState("");

    const [btn, setBtn] = useState(false);
    const [check, setCheak] = useState(false);
    const [textarea, setTextarea] = useState(false); 
  
    const makeinput = () =>{
        // setPlace = prompt("Enter The PlaceHolder");
        setInput(true);

    }

    return (
        <>
            <div>
                {
                    input ? <input type="text"  /> : null
                }
                {
                    btn ? <button type='submit'>Submit</button> : null
                }
                {
                    check ? <input type="checkBox" /> : null
                }
                {
                    textarea ? <textarea name="" id=""></textarea> : null
                }
            </div>


            {/* <button onClick={() => setInput(true)}>Input</button> */}
            <button onClick={makeinput}>Input</button>

            <button onClick={() => setBtn(true)}>Button</button>
            <button onClick={() => setCheak(true)}>Check Box</button>
            <button onClick={() => setTextarea(true)}>textarea</button>



        </>
    )
}
