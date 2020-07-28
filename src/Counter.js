import React from 'react';
import CountBtn from "./CountBtn";
export default function Counter(props) {
   const updateCounterButton = (n) => {
    props.updateCounter(props.id, n)
    }
    const resetCounter = () => {
        //setCount(0);
    }

    console.log(props)
    return (
        <center>
            <CountBtn value={-3} count={props.count} updateCounter={updateCounterButton}/>
            <CountBtn value={-2} count={props.count} updateCounter={updateCounterButton}/>
            <CountBtn value={-1} count={props.count} updateCounter={updateCounterButton}/>
            {props.count}
            <CountBtn value={+1} count={props.count} updateCounter={updateCounterButton}/>
            <CountBtn value={+2} count={props.count} updateCounter={updateCounterButton}/>
            <CountBtn value={+3} count={props.count} updateCounter={updateCounterButton}/>
            <button onClick={resetCounter}> reset counter</button>
            <button onClick ={() => props.deleteCounter(props.id)}> delete counter </button>
            <hr/>

        </center>
    );
}

