import React, { useState } from 'react'

export default function ConditionalRendering() {

    const [vote, setVote] = useState(true);
    const [age, setAge] = useState(10);


    // if(vote){
    //     return (
    //         <div>
    //             <h1>You Can Vote
    //                 </h1>



    //         </div>
    //       )
    // }
    // else{
    //     return (
    //         <div>
    //             <h1>You Cannot Vote
    //                 </h1>



    //         </div>
    //       )

    // }

    return (
        <div>
            {/* { vote && <h1>You Can Vote </h1> } */}

            { age > 18 ? <h1>You Can Vote </h1> : <h1>You Cannot Vote </h1>}


            



        </div>
    )

}
