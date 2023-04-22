import "./App.css";
import { useState} from "react";

import TopBar from "./componenets/TopBar";
import SortingVisualizer from './componenets/SortingVisualizer'
import Footer from "./componenets/Footer";

function App() {

  const[array, setArray] = useState([]);
  // console.log(`arrsize in appjs: ${arrSize}`);

  return (
    <div className="container">
      
      <TopBar setArray={setArray} />

      <main>
        <SortingVisualizer array={array} setArray={setArray}/>

      </main>
      
      <Footer />
    
    </div>
  );
}

export default App;
