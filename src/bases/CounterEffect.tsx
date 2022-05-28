import { useEffect, useState } from "react"

interface Prop{
    initialValue:number
}

interface CounterProps{
    counters:number,
    click:number
}

const MAXIMUN_COUNT = 10;

export default function CounterEffect( ) {

    const [counter, setcounter] = useState  (6)
  
    const handleClick=(num:number)=>{
        // if(counter==MAXIMUN_COUNT) return;
        setcounter(v=> Math.min(v+1,MAXIMUN_COUNT) )
    }

    useEffect(() => {
        if(counter<MAXIMUN_COUNT) return
            console.log('%cSe plop','color:green; background-color:yellow')
    }, [counter])

    return (
        <>
         <h1>CounterEffect: {counter} </h1>   
      
         <button onClick={()=>handleClick(1)} >
            +1
         </button>
         <button onClick={()=> handleClick(5)} >
            +5
         </button>
         
        </>
    )
}
