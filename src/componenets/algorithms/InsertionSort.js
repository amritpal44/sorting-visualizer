function InsertionSort(props){

    let array = props.array;
    let setArray = props.setArray;

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function insertionsort(){

        let tempArr = array;
        const n = array.length;

        let arrayBars = document.getElementsByClassName("array-bar");

        for(let i = 0; i < n; i++){
            arrayBars[i].classList.remove('sorted');
        }

        for(let i = 1; i < n; i++){

            let key = tempArr[i];
            let j = i -1;
            let check = false;

            arrayBars[i].classList.add("compared");
            await delay(900);
            check = true;
            arrayBars[i].classList.remove("compared");

            while(j>=0 && tempArr[j]>key)
            {
                if(check === false){
                    arrayBars[j+1].classList.add("compared");
                    await delay(900);
                    arrayBars[j+1].classList.remove("compared");
                }

                arrayBars[j].classList.add("swapping");
                await delay(200);
                arrayBars[j+1].classList.add("swapping");
                await delay(100);
                    tempArr[j+1] = tempArr[j];
                    setArray(tempArr.slice());
                    
                await delay(200);
                arrayBars[j].classList.remove("swapping");
                arrayBars[j+1].classList.remove("swapping");

                    j = j -1;
            }


            arrayBars[j+1].classList.add("overwrite");
            await delay(400);
                tempArr[j+1] = key;
                setArray(tempArr.slice());
            await delay(500);
            arrayBars[j+1].classList.remove("overwrite");
        }

        for(let i = 0; i < n; i++){
            arrayBars[i].classList.add('sorted');
        }
        
    }

    return(
        <div>
            <button className="btn" onClick={insertionsort}>Insertion Sort</button>
        </div>
    )
}


export default InsertionSort;