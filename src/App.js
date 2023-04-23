import "./App.css";
import { useState} from "react";

import TopBar from "./componenets/TopBar";
import SortingVisualizer from './componenets/SortingVisualizer'
import Footer from "./componenets/Footer";

function App() {

  const[array, setArray] = useState([]);
  // console.log(`arrsize in appjs: ${arrSize}`);

  return (
    <div className="wrapper">
      
      <TopBar setArray={setArray} />
 
      <SortingVisualizer array={array} setArray={setArray}/>

      <Footer />
    
    </div>
  );
}

export default App;
