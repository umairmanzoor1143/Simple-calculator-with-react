
import './App.css';
import { useState } from 'react';

function App(){
  let valuesof = ""
  const [store,update] = useState("")
  let display  = (e) => {
    console.log(e);
    
    update(store.concat(e.target.name));
    console.log(store);
  }
  let calculate = () => {
    try {
      update(eval(store).toString());
    } catch(err){
      update("Error");

    }
    

console.log(store);
  }
  let clear = () => {
    update("");
  }
  return(
  <div className="innri">
    <div className="inline">
      <input value={store} type="text" />
    <button onClick={clear}>clear</button>
    <button name="+" onClick={display}>+</button>
    <button name="/" onClick={display}>/</button>
    <button name="-" onClick={display}>-</button>
    <button name="*" onClick={display}>x</button>
    <button name="0" onClick={display}>0</button>
    <button name="1" onClick={display}>1</button>
    <button name="2" onClick={display}>2</button>
    <button name="3"onClick={display}>3</button>
    <button name="4"onClick={display}>4</button>
    <button name="5"onClick={display}>5</button>
    <button name="6"onClick={display}>6</button>
    <button name="7"onClick={display}>7</button>
    <button name="8" onClick={display}>8</button>
    <button name="9" onClick={display}>9</button>
    <button onClick={calculate}>=</button>
    </div> 

</div>
  )
  
}



export default App;
