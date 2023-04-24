import {toast} from "react-toastify";



function SelectionSort(props){

    let array = props.array;
    let setArray = props.setArray;

    let busy = props.busy;
    let setBusy = props.setBusy;

    


    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function selectionsort(){

        let tempArr = array;
        let n = array.length;

        let arrayBars = document.getElementsByClassName("array-bar");

        for(let i = 0; i < n; i++){
            arrayBars[i].classList.remove('sorted');
        }
        
        for(let i = 0; i < n ; i++){

            let min = i;
            arrayBars[i].classList.add("compared");
            
            for(let j = i + 1; j < n; j++){
                
                let check = false;

                arrayBars[j].classList.add("compared");
                

                if(tempArr[j] < tempArr[min]){

                    await delay(300);
                    arrayBars[j].classList.remove("compared");
                    arrayBars[j].classList.add("swapping");
                    arrayBars[min].classList.remove("compared")
                        min = j;
                        check = true;
                    await delay(300);
                    arrayBars[min].classList.remove("swapping");
                    arrayBars[min].classList.add("compared");
                    
                }

                await delay(300);
                if(check === false){
                    arrayBars[j].classList.remove("compared");
                }
            }

            arrayBars[min].classList.remove("compared");
            arrayBars[min].classList.add("swapping");
            arrayBars[i].classList.add("swapping");
            await delay(200);

                [tempArr[i], tempArr[min]] = [tempArr[min], tempArr[i]];
                setArray(tempArr.slice());

            await delay(200);
            arrayBars[min].classList.remove("swapping");
            arrayBars[i].classList.remove("swapping");
            arrayBars[i].classList.add("sorted");
        }   

        setBusy(false);
        toast.success("Selection Sort Completed.")
    }


    return(
        <div>
            <button onClick={() =>{
                
                if(busy === true){
                    toast.warning("Sorting in progress. Try again after sorting gets completed.")
                    return;
                }
                else{
                    setBusy(true);
                    selectionsort();  
                }
                
            }} className="btn">Selection Sort</button>
        </div>
    )
}

export default SelectionSort;