import './SortingVisualizer.css';
import Algorithms from './Algorithms';

import Bars from "./Bars";



function SortingVisualizer(props){

    
    let array = props.array;  
    let setArray = props.setArray;

    return(
        <div className='main-container'>
            <Bars value = {array}></Bars>
            <Algorithms setArray={setArray} array={array}/>
        </div>     
        
    )
}

export default SortingVisualizer;