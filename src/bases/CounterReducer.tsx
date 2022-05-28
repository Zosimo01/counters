import { useReducer, useState } from "react"

interface Prop{
    initialValue:number
}

interface CounterState{
    counter:number,
    previous:number,
    changes:number
}

const INITIAL_STATE:CounterState={
    counter:0,
    previous:0,
    changes:0
}

type CounterAction=
    | {type:'increaseBy',payload:{value:number}}
    | {type:'reset'}

const counterReducer =(state:CounterState,action:CounterAction):CounterState=>{
    switch (action.type) {
        case 'increaseBy':
            return{
                counter: state.counter+action.payload.value,
                previous:state.counter,
                changes:state.changes++
            }
        case 'reset':
            return{
                counter:0,
                previous:0,
                changes:0
            }
        default: return state;
    }
}

export default function CounterReducerComponent( {initialValue}:Prop ) {

    
    const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE)
     
    const {counter,previous,changes }= state;

    const handleClick=(value:number)=>{
        dispatch({type:'increaseBy',payload:{value}});
    }

    const handleReset =()=>{
        dispatch({type:'reset'});
    }

    return (
        <>
         <h1>CounterReducer: {counter} </h1>   
         <h1>CounterPrevious: {previous} </h1>   
         <h1>CounterChanges: {changes} </h1>   
         <button onClick={()=> handleClick(initialValue)} >
            +{initialValue}
         </button> <button onClick={()=> handleClick(2)} >
            +2
         </button>
         <button onClick={handleReset} >
            reset
         </button>
        </>
    )
}
