import { useState } from "react"

interface Prop{
    initialValue:number
}


export default function Counter( {initialValue}:Prop ) {

    const [counter, setcounter] = useState(initialValue)
    
    const handleClick=()=>{
        setcounter(counter+1)
    }

    return (
        <>
         <h1>Counter: {counter} </h1>   
         <button onClick={handleClick} >
            +1
         </button>
        </>
    )
}
