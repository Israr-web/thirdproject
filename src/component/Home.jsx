import React from 'react'

export default function Home() {

    let age = 16;
    // Third Way 
    // const Myfun = () => {
    //     let age = 17;
    //     if (age >= 18) {
    //         return (
    //             <>
    //                 <h1> Eligible For Vote</h1>
    //             </>
    //         )
    //     }
    //     else {
    //         return (
    //             <>
    //                 <h1> Not Eligible For Vote</h1>
    //             </>
    //         )
    //     }
    // }
    // return (
    //     <>
    //         <Myfun />
    //     </>
    // )

    // First way 

    // let age = 18;
    // if (age >= 18) {
    //     return (
    //         <>
    //             <h1> Eligible For Vote</h1>
    //         </>
    //     )
    // }
    // else {
    //     return (
    //         <>
    //             <h1> Not Eligible For Vote</h1>
    //         </>
    //     )
    // }

    // Second Way 

    // let age = 18;
    // let result ;
    // if(age >= 18){
    //     result= <h1>You can Vote</h1>;
    // }
    // else{
    //     result = <h1>You Can,t Vote</h1>;
    // }

    // return (
    //     <>
    //         {/* <div>
    //         {result}
    //     </div> */}
    //     </>
    // )
   

    // four Way 
    return(
        <>
        <div>
            {/* ternary operator */}
    
            {age>18 ? <h1>Eligible For Vote</h1> : <h1>Not Eligible For Vote</h1>}
        </div>
        </>

    )
   

}

