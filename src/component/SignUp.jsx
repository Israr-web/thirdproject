import React, { Suspense } from 'react'
import App from '../App';
// import Login from './Login'


// const Login = React.lazy(()=> import("/Login"));
// lazy loading sa hum App ki bether krta hain 
export default function SignUp() {
  return (
    <>
    <h1>Sign Up : </h1> <br />
    <form>
    <label htmlFor="">User Name</label><br /><br />
    <input type="text" /><br /><br />
    <label htmlFor="">PassWord</label><br /><br />
    <input type="password" /><br /><br />
    <label htmlFor="">Email</label><br /><br />
    <input type="email" /><br /><br />
    <label htmlFor="">Number</label><br /><br />
    <input type="number" /><br /><br />
    <button >Sign Up</button>
</form>
{/* <Suspense fallback="Plz Wait">
<Login/>
</Suspense> */}

{/* suspense k andr hum login Component ko rkh denga fallback hum ko ek massage show krta hai jab tk humara component show nhi hota hai  */}

    </>
  )
}
