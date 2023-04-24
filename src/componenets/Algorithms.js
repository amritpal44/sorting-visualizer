
import './Algorithms.css'

import BubbleSort from "./algorithms/BubbleSort";
import InsertionSort from './algorithms/InsertionSort';
import MergeSort from './algorithms/MergeSort';
import SelectionSort from './algorithms/SelectionSort';
import QuickSort from './algorithms/QuickSort';


function Algorithms(props){
    
    let array = props.array;
    let setArray = props.setArray;

    let busy = props.busy;
    let setBusy = props.setBusy;


    return(
        <div className="btn-container">
            <BubbleSort array={array} setArray={setArray} busy={busy} setBusy={setBusy} />
            <InsertionSort array={array} setArray={setArray} busy={busy} setBusy={setBusy} />
            <SelectionSort array={array} setArray={setArray} busy={busy} setBusy={setBusy} />
            <MergeSort array={array} setArray={setArray} busy={busy} setBusy={setBusy} />
            <QuickSort array={array} setArray={setArray} busy={busy} setBusy={setBusy} />
        </div>
    )
}

export default Algorithms;