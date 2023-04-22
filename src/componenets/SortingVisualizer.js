import './SortingVisualizer.css';

import Bars from "./Bars";



function SortingVisualizer(props){

    
    let array = props.array;  
    let setArray = props.setArray;

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
                await delay(300);
                arrayBars[j].classList.remove("compared");
                arrayBars[j + 1].classList.remove("compared");


                if(tempArr[j] > tempArr[j+1])
                {
                    animations.push([j, j+1]);
                    //swapping is done here
                    arrayBars[j].classList.add("swapping");
                    arrayBars[j + 1].classList.add("swapping");
                    await delay(200);

                    [tempArr[j], tempArr[j+1]] = [tempArr[j+1], tempArr[j]];

                    setArray(tempArr.slice());                    

                    console.log("swapped");
                    
                    console.log(array);

                    await delay(200);
                    arrayBars[j].classList.remove("swapping");
                    arrayBars[j + 1].classList.remove("swapping");
                }
            }


            arrayBars[j].classList.add('sorted');
            console.log("working");
        }
        arrayBars[0].classList.add('sorted');

    }

    return(
        <div>
            <Bars value = {array}></Bars>
             <div className="btn-container">
                <button className='btn' onClick={() => bubbleSort()}>Bubble Sort</button>
             </div>
        </div>     
        
    )
}

export default SortingVisualizer;