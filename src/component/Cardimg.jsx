import React, { useState } from 'react'

export default function Cardimg() {

    const curTime = new Date().toLocaleTimeString();
    const [time, setTime] = useState(curTime);
    const update = () =>{
    const curTime = new Date().toLocaleTimeString();
    setTime(curTime);
    }
    setInterval(() => {
        update();
    },1000)

    return (
        <>
            <div>
                <h1>
                    Digital Clock
                </h1>
                <h1>
                    {curTime}
                </h1>


            </div>

        </>

    )
}
