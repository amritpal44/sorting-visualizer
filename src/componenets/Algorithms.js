
import './Algorithms.css'

import BubbleSort from "./algorithms/BubbleSort";
import InsertionSort from './algorithms/InsertionSort';
import MergeSort from './algorithms/MergeSort';
import SelectionSort from './algorithms/SelectionSort';
import QuickSort from './algorithms/QuickSort';
import { useEffect, useState } from 'react';


function Algorithms(props){
    
    let array = props.array;
    let setArray = props.setArray;

    let busy = props.busy;
    let setBusy = props.setBusy;

    let speed = props.speed;

    const[delay_time, setDelayTime] = useState(100);
    
    useEffect(() => {
        speedHandler(speed);
    },[speed]);

    function speedHandler(speed){
        switch(parseInt(speed))
        {
            case 1: speed=5;
                    break;
            case 2: speed=20;
                    break;
            case 3: speed=100;
                    break;
            case 4: speed=1000;
                    break;
            case 5: speed=10000;
                    break;
            default: speed=100;
                    break;
        }
        
        setDelayTime( 10000/(Math.floor(array.length/10)*speed) ); 
        console.log("speed:", speed, "delay_time:", delay_time);
    }

    return(
        <div className="btn-container">
            <BubbleSort array={array} setArray={setArray} busy={busy} setBusy={setBusy} delay_time={delay_time}/>
            <InsertionSort array={array} setArray={setArray} busy={busy} setBusy={setBusy} delay_time={delay_time}/>
            <SelectionSort array={array} setArray={setArray} busy={busy} setBusy={setBusy} delay_time={delay_time}/>
            <MergeSort array={array} setArray={setArray} busy={busy} setBusy={setBusy} delay_time={delay_time}/>
            <QuickSort array={array} setArray={setArray} busy={busy} setBusy={setBusy} delay_time={delay_time}/>
        </div>
    )
}

export default Algorithms;