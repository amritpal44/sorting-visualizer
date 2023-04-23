

function SelectionSort(props){

    let array = props.array;
    let setArray = props.setArray;

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

            for(let j = i + 1; j < n; j++){

                if(tempArr[j] < tempArr[min]){
                    min = j;
                }
            }

            [tempArr[i], tempArr[min]] = [tempArr[min], tempArr[i]];
            setArray(tempArr.slice());

            arrayBars[i].classList.add("sorted");
        }
    }


    return(
        <div>
            <button onClick={selectionsort} className="btn">Selection Sort</button>
        </div>
    )
}

export default SelectionSort;