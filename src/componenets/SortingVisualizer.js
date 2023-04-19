import './SortingVisualizer.css';

import {useState} from "react";
import { useEffect } from "react";
import Bars from "./Bars";

function SortingVisualizer(){

    const[array, setArray] = useState([]);


    useEffect(() => {
        resetArray();
    },[])


    function resetArray(){
        const tempArr = [];
        for(let i = 0; i < 100; i++){
            tempArr.push(randomInt(5,500));
        }
        
        
        setArray(tempArr);
    }

    function randomInt(min, max){
        return Math.floor(Math.random()*(max - min + 1) + min);
    }

    function bubbleSort(){

    }

    function mergeSort(){

    }

    function quickSort(){
        
    }


    return(
        <div>
            <Bars value = {array}></Bars>
             {/* <div>
                 {array.map((value, index) => (
                 <div className="array-bar" key={index}> {value} </div>
             ))}
             </div> */}
             <div className="btn-container">
                <button className="btn" onClick={() => resetArray()}>Generate new Array</button>
                <button className='btn' onClick={() => bubbleSort()}>Bubble Sort</button>
                <button className='btn' onClick={() => mergeSort()}>Merge Sort</button>
                <button className='btn' onClick={() => quickSort()}>Quick Sort</button>
             </div>
        </div>     
        
    )
}

export default SortingVisualizer;