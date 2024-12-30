import React, { useState } from 'react'

export default function () {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");

    const [show, setShow] = useState("");


    const getName = (event) => {
        // console.log(event.target.value);
        if(event.target.name == "firstname"){
        setFname(event.target.value);
        }
        if(event.target.name == "lastname"){
            setLname(event.target.value);
        }
    }

    const submitBtn = (event) => {
        event.preventDefault();
        setShow(fname + lname);

    }
    return (
        <>
            <form onSubmit={submitBtn}>
                <h1>{show}</h1>

                <label>Enter First Name</label>
                <br />
                <input type="text"  name='firstname' onChange={getName} value={fname} />
                <br /><br />
                <label>Enter Last Name</label>
                <br />

                <input type="text"  name='lastname' onChange={getName} value={lname} />
                <br /><br />
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}
