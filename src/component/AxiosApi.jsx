import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AxiosApi() {
    const [store , setStore] = useState()

    const getData = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            console.log(res);
            
        }).catch((err) => {
            console.log(err);
            
        })
    }

    // const getData = async () => {

    //     try{
    //         const respone = await axios.get("https://jsonplaceholder.typicode.com/users");
    //     console.log(respone);
    //     }catch(err){
    //         console.log(err);
            

    //     }
        
        
    // }


    useEffect(()=>{
        getData();

    },[])
  return (
    <>
    
    </>
  )
}
// Axios API ko use krta howa hum kis API ko fetch kr skta hain ya API ko call kr skta hain 

// Axios ka faida ya hai k ya hum ko data jSon mai convert kr k data hai by default 

// Axios ko hum ko install krna parhta hai 