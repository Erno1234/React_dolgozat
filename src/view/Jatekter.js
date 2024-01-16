import Lampa from "./Lampa";
function Jatekter(props) {

    console.log(props.lista)
    function kattintasKezelo(){

        props.kattintasKezelo("");
    }
  return (
    <div className="jatekter">
    {
        props.lista[0].map((elem,index)=>{
            console.log(elem)
            return(
                <Lampa ertek={elem} kattintasKezelo={kattintasKezelo} key={index} index={index}/>
            )
        })
    }     
    </div>
  );
}

export default Jatekter;