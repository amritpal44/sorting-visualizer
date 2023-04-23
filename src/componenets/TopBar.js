import { useEffect, useState } from "react";
import './TopBar.css';


function TopBar(props){

    const[arrSize, setArrSize] = useState(20);
    // let arrSize = 20;
    let setArray = props.setArray;

    useEffect(() => {
        resetArray();
    },[])

    function arrSizeHandler(e){
        console.log(e.target.value);

        // arrSize = e.target.value;
        setArrSize(e.target.value);
        // resetArray(); yaha se reset array ko islie hatana pada kyuki range ke change hone par
        // arraysize imidiately display nahi ho raha
        // next call pe previous value dikah raha hae
        //agar samaj na aee to uncomment karke check kar lena
    }


    function resetArray(){
        const tempArr = [];
        // console.log(`arrsize resetarray: ${arrSize}`);
        for(let i = 0; i < arrSize; i++){
            tempArr.push(randomInt(10,99));
        }

        setArray(tempArr);
    }

    function randomInt(min, max){
        return Math.floor(Math.random()*(max - min + 1) + min);
    }


    return(
        <div className="nav-container">
            <h1 className="nav-heading">Sorting Visualizer</h1>

            <div className="nav-filters">
                <input type="range" min={10} max={50} onClick={arrSizeHandler} defaultValue={arrSize} className="nav-input"></input>
                <span className="nav-input-value">{arrSize}</span>

                <button className="nav-btn" onClick={() => resetArray()}>RANDOMIZE</button>
            </div>
            
        </div>
    )
}

export default TopBar;