import './SortingVisualizer.css';

import {useState} from "react";
import { useEffect } from "react";
import Bars from "./Bars";

import Buttons from './Buttons';


function SortingVisualizer(){

    const[array, setArray] = useState([]);

    
    useEffect(() => {
        resetArray();
    },[])

    useEffect(() =>{
        console.log(array);
    }, [array])

    function resetArray(){
        const tempArr = [];
        for(let i = 0; i < 10; i++){
            tempArr.push(randomInt(5,500));
        }
        
        
        setArray(tempArr);
    }

    function randomInt(min, max){
        return Math.floor(Math.random()*(max - min + 1) + min);
    }

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function bubbleSort(){
        const animations = [];
        const tempArr = [...array];
        const n = tempArr.length;

        var arrayBars = document.getElementsByClassName("array-bar");

        
        for(let i = 0; i < n; i++){
            arrayBars[i].classList.remove('sorted');
        }

        

        for(let i = 0; i < n - 1; i++)
        {
            let j = 0;
            for(j = 0; j < n - i -1; j++)
            {
                //these are being compared
                animations.push([j, j+1]);
                

                arrayBars[j].classList.add("compared");
                arrayBars[j + 1].classList.add("compared");
                await delay(400);
                arrayBars[j].classList.remove("compared");
                arrayBars[j + 1].classList.remove("compared");


                if(tempArr[j] > tempArr[j+1])
                {
                    animations.push([j, j+1]);
                    //swapping is done here
                    arrayBars[j].classList.add("swapping");
                    arrayBars[j + 1].classList.add("swapping");
                    await delay(500);

                    [tempArr[j], tempArr[j+1]] = [tempArr[j+1], tempArr[j]];

                    setArray(tempArr.slice());                    

                    console.log("swapped");
                    
                    console.log(array);

                    await delay(500);
                    arrayBars[j].classList.remove("swapping");
                    arrayBars[j + 1].classList.remove("swapping");
                }
            }


            arrayBars[j].classList.add('sorted');
            console.log("working");
        }
        arrayBars[0].classList.add('sorted');

    }

    function mergeSort(){    }    function quickSort(){    }


    return(
        <div>
            <Bars value = {array}></Bars>
            
             <Buttons value = {array}/>
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