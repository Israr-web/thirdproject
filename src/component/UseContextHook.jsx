import React, { createContext, useState } from 'react'
import ChildA from './ChildA';


export const MyData = createContext();

// is ko component sa bhr is leya banata hain k ya golbal hai golbal hona ki waja sa hum is ko hr component mai use kr skta hain 

export default function UseContextHook() {
    const [data, setData] = useState(1);

    const [salary , setSalary] = useState();

    const getSalary =  (val) =>{
        console.log("Salary Is " , val);
        setSalary(val);
        

    }
    return (
        <MyData.Provider value={{ valueData: data , getSalary : getSalary}}> 
        {/* value ko use krna sa hum data ko ChildA component mai bhj denga  */}
            <>
                {/* context APi Hooks ami 3 terms hoti hai create provide or Use  */}
                <h1>
                    UseContextHook
                </h1>
                <h1>
                    Salary is Child B {salary}
                </h1>
                <button onClick={() => setData(data + 1)}>Update Data</button>
                <ChildA/>
            </>
        </MyData.Provider>

    )
}
