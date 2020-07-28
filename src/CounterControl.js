import React, {useState} from 'react';
import Counter from "./Counter";
import generateId from "./utils2";

export default function CounterControl() {
    const [counterList, setCounterList] = useState([])
    //let array = [{id:56,count:78}, {id:58,count:79}];
    // const [quantityButtons, setquantityButtons] = useState(1)
    const updateCounter = (id, n) => {
        let newCounterList = counterList.slice()
        for (let i = 0; i < newCounterList.length; i++) {
            if (newCounterList[i].id === id) {
                newCounterList[i].count = n
            }
        }
        setCounterList(newCounterList)
    }
    const resetAll = () => {
        let newCounterList = counterList.slice()
        for (let i = 0; i < newCounterList.length; i++) {
             newCounterList[i].count = 0
            }
         setCounterList(newCounterList)
    }

    const deleteCounter = (id) => {
        let newCounterList = counterList.slice()
        for (let i = 0; i < newCounterList.length; i++) {
            if (newCounterList[i].id === id) {
                newCounterList.splice(i, 1)
            }
        }
        setCounterList(newCounterList)
    }

    const add = () => {
        let newCounterList = counterList.slice()
        newCounterList.push({id: generateId(), count:0})
        setCounterList(newCounterList)
    };

    //const resetAll = () => setCounterList(counterList.map(counter => 0))
    const deleteAll = () => setCounterList([]);

    console.log(counterList)
    return (
        <center>
            {counterList.map((el) => <Counter deleteCounter = {deleteCounter} updateCounter= {updateCounter} count={el.count} key={el.id} id={el.id}/>)}
            <button onClick={add}>Add one more counter</button>
            <button onClick={deleteAll}>Delete all counters</button>
            <button onClick={() => resetAll()}> Reset all</button>
            {/*<button onclick = {deleteAll}>deleteAll</button>*/}
        </center>
    );


}
