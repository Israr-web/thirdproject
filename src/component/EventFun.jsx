import React from 'react'

export default function EventFun() {

    function sayHello(){
        alert("Hello");

    }
  return (
    <div>
        <h1>Hello</h1>
        <button onClick={() => alert("Hello")}>One </button>

        {/* or agr arrgment dana hota hain to is trhn likha hain arror function k sth  */}

        <button onClick={sayHello}>Two </button>

        {/* is leya hum function ko is trhn call krta hain  */}


        {/* <button onClick={sayHello()}>Three</button> */}

        {/* Agr hum is trhn function ko call krta hain to wo page ki load hona par direct function call ho jaega  */}


    </div>
  )
}
