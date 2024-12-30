import React, { useContext } from 'react';
// import { fName, lName } from '../App';


export default function ContextAPI() {

    // const name = useContext(fName); // is trhn sa useContext ko use krta hain 
    // const lname = useContext(lName); // is trhn sa jitna Context ko use krna hai kr skta hain 
    return (
        <>
        {/* <h1>My Name is {name}</h1>  */}
        {/* <h1>My Last Name is :: {lname}</h1> */}
        {/* // use ContextAPI ko use krta howa hum na dkh k kitna time save howa or na function bana ki need hai na consumer likhna ki need hai  */}

        {/* context APi Hooks ami 3 terms hoti hai create provide or Use  */}
            {/* this is context API step Context API k andr hum Consumer k andr function likhna Parh rha hota hai  */}

            {/* <fName.Consumer>
                {
                    (fname) => {
                        return (
                            <lName.Consumer>
                                {
                                    (lname) => {
                                        return (
                                            <h1>My Name is {fname} last name {lname}</h1>
                                        )
                                    }
                                }

                            </lName.Consumer>
                        )
                    }
                }

            </fName.Consumer> */}


        </>
    )
}
