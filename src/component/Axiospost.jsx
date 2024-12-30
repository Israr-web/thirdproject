import axios from 'axios';
import React, { useState } from 'react'

export default function Axiospost() {
    const data ={
        fname :"",
        lname :""
    }

    const [inputData , setInputData] = useState(data);

    const handleInput = (event)=>{
        console.log(event.target.value);
        setInputData({...inputData , [event.target.name]: event.target.value})
        
    }

    console.log(inputData);
    

    const handleForm = (evnt) =>{
        evnt.preventDefault()
        axios.post("https://jsonplaceholder.typicode.com/todos", inputData)
        .then((res) =>{
            console.log(res);
        }).catch((err) => {
            console.log(err);
            
        })
    }

    const handleUpdate =(e) =>{
        e.preventDefault();

        // jab bhi hum edit data ya update krta hain data ko to API mai edit ya update bhi likha hoga 
        axios.put("https://jsonplaceholder.typicode.com/todos/1", inputData)
        .then((res) =>{
            console.log(res);
        }).catch((err) => {
            console.log(err);
            
        })
    }

    const handleDelete = (e) =>{
        e.preventDefault();
        // jab bhi hum data ko delete kren ga to  API mai delete bhi likha hoga or hum ko input wala data likha ki need nhi hogai 
        axios.delete("https://jsonplaceholder.typicode.com/todos/1")
        .then((res) =>{
            console.log(res);
        }).catch((err) => {
            console.log(err);
            
        })


    }

  return (
    <div>
        <form >
            <input type="text" placeholder='Enter First Name' name='fname' onChange={handleInput}/>
            <input type="text" placeholder='Enter Last Name' name='lname' onChange={handleInput}/>
            <button onClick={handleForm}>Submit</button>
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleDelete}>Delete</button>


        </form>
    </div>
  )
}
