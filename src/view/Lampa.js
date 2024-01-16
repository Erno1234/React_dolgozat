import "./Lampa.css";
import { useState } from "react";
function Lampa(props) {
  const [color, setColor] = useState("");
  
  function kattintasKezelo() {
    setSzin(props.ertek);
  }

  
  function setSzin(ertek) {
    if (ertek) {
      setColor('green');
    } else {
      setColor('yellow');
    }
  }
  return (
    <div
      className="lampa"
      style={{ backgroundColor: color }}
      onClick={kattintasKezelo}
    >
      <p>{props.ertek}</p>
    </div>
  );
}

export default Lampa;
