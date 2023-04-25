import './SortingVisualizer.css';
import Algorithms from './Algorithms';

import Bars from "./Bars";
import Abbreviation from './Abbreviaton';



function SortingVisualizer(props){

    
    let array = props.array;  
    let setArray = props.setArray;

    let busy = props.busy;
    let setBusy = props.setBusy;


    return(
        <div className='main-container'>
            <Abbreviation />
            <Bars value = {array}></Bars>   
            <Algorithms setArray={setArray} array={array} busy={busy} setBusy={setBusy} speed={props.speed} />
        </div>     
    )
}

export default SortingVisualizer;