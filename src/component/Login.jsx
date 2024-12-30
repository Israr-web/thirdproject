import React from 'react'

export default function Login() {
    return (
        <>
            <h1>Login :</h1>
            <br /><br />
            <form>
                <label htmlFor="">User Name</label><br /><br />
                <input type="text" placeholder='Enter Your Username' /><br /><br />
                <label htmlFor="">PassWord</label><br /><br />
                <input type="password" placeholder='Enter Your Password' /> <br /><br />

                <button type='submit'>Login</button>

            </form>
        </>
    )
}
