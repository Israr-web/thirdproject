import React, { useState } from 'react'

export default function FormValidation() {

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [err , setErr] = useState(false);
    const [passErr , setPassErr] = useState(false);

    const loginFrom = (e)=>{
        if(email.length < 3 || password.length < 5){
            alert("Bhai Sahi sa Form Fill krdo plz")
        }
        else{
            console.log(email);
            console.log(password);
            alert("Thanks");
        }
        e.preventDefault();
    }

    const emailHandler = (e) =>{
        // console.log(e.target.value.length);
        let element = e.target.value;
        if(element.length < 3){
            // console.log("Minium 3 letters required !!!");
            setErr(true);
        }
        else{
            setErr(false);
        }
        setEmail(element);
        
    }

    const passHandler = (e) =>{
        // console.log(e.target.value.length);
        let element = e.target.value;
        if(element.length < 5){
            // console.log("Minium 3 letters required !!!");
            setPassErr(true);
        }
        else{
            setPassErr(false);
        }
        setPassword(element)
        
    }
  return (
    <>
    <h2>Form Validation</h2>
    <form onSubmit={loginFrom}>
        <input type="text" placeholder='Enter Your Email' onChange={emailHandler} />
        {err ? <span>Minium 3 letters required !!!</span> : <span></span>}
        <br /><br />
        <input type="password" placeholder='Enter Your Password' onChange={passHandler} />
        {passErr ? <span>Minium 5 letters required !!!</span> : <span></span>}

        
        <br /><br />

        <button type='submit'>Submit</button>


    </form>
    
    </>
  )
}
