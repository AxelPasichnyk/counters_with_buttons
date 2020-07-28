import React from 'react';

function NumCounters(props) {
    const CreateCounter = () => {
        props.update(1)
    }

    const DestroyCounter = () => {
        props.update(-1)
    }


    return (
        <div className="App">
            <center>
                <button onClick={DestroyCounter}>Destroy Counter</button>
                <button onClick={CreateCounter}>Create Counter</button>
            </center>
            <ol>
                {props.arrayCounter.map(OneCounter => <li>{OneCounter}</li>)}
            </ol>
            <hr/>
        </div>
    );
}

export default NumCounters;