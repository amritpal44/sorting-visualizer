import './SortingVisualizer.css';
import Algorithms from './Algorithms';

import Bars from "./Bars";



function SortingVisualizer(props){

    
    let array = props.array;  
    let setArray = props.setArray;

    let busy = props.busy;
    let setBusy = props.setBusy;


    return(
        <div className='main-container'>
            <Bars value = {array}></Bars>   
            <Algorithms setArray={setArray} array={array} busy={busy} setBusy={setBusy}/>
        </div>     
    )
}

export default SortingVisualizer;