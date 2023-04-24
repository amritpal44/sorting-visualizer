import "./App.css";
import { useState} from "react";

import TopBar from "./componenets/TopBar";
import SortingVisualizer from './componenets/SortingVisualizer';
import Footer from "./componenets/Footer";


function App() {

  const[array, setArray] = useState([]);
  const[busy, setBusy] = useState(false);
  const[speed, setSpeed] = useState(2);

  // console.log(`arrsize in appjs: ${arrSize}`);

  return (
    <div className="wrapper">
      
      <TopBar array={array} setArray={setArray} busy={busy} setBusy={setBusy} speed={speed} setSpeed={setSpeed} />
 
      <SortingVisualizer array={array} setArray={setArray} busy={busy} setBusy={setBusy} speed={speed} setSpeed={setSpeed} />

      <Footer />
    
    </div>
  );
}

export default App;
