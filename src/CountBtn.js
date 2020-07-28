import React from 'react';

export default function CountBtn(props) {

    console.log(props)
    const send = () => {
        props.updateCounter(props.value + props.count)
         }
    return (
        <button onClick={send}>{props.value} </button>
   );
}

