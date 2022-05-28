import { useState } from "react"

interface Prop{
    initialValue:number
}

interface CounterProps{
    counters:number,
    click:number
}

export default function CounterBy( {initialValue=5}:Prop ) {

    const [counter, setcounter] = useState <CounterProps > ({
        counters:initialValue,
        click:0
    })
    const {click,counters}=counter;
    const handleClick=(num:number)=>{
        setcounter({
            counters:counters+num,
            click:click+1
        })
    }

    return (
        <>
         <h1>CounterBy: {counter.counters} </h1>   
         <h1>click: {counter.click} </h1>   
         <button onClick={()=>handleClick(1)} >
            +1
         </button>
         <button onClick={()=> handleClick(5)} >
            +5
         </button>
         
        </>
    )
}
