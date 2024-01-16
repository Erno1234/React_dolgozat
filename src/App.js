import './App.css';
import LampakModel from './model/LampakModel';
import Jatekter from './view/Jatekter';
import { useState } from "react";
const lmodel = new LampakModel(3);
function App() {
  
  const [lista, setAllapot]=useState([lmodel.getLista()]);
  function kattintasKezelo(index){
    lmodel.setAllapot(index);
    setAllapot([lmodel.getAllapot()])}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Light On</h1>
      </header>
      <article>
           <Jatekter kattintasKezelo={kattintasKezelo} lista={lista} />   
      </article>
      <footer>
        <p>Pálóci Ernő</p>
      </footer>
    </div>
  );
}

export default App;
