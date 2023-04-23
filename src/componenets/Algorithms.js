
import './Algorithms.css'

import BubbleSort from "./algorithms/BubbleSort";
import InsertionSort from './algorithms/InsertionSort';
import SelectionSort from './algorithms/SelectionSort';


function Algorithms(props){
    
    let array = props.array;
    let setArray = props.setArray;

    return(
        <div className="btn-container">
            <BubbleSort array={array} setArray={setArray}/>
            <InsertionSort array={array} setArray={setArray}/>
            <SelectionSort array={array} setArray={setArray}/>
        </div>
    )
}

export default Algorithms;