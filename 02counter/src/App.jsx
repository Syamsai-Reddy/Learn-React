/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'


function App() {
  

  let [counter,setCounter] = useState(0);
  const addval = () =>{
    
     if(counter<20){
      counter=counter+1;
      setCounter(counter);
     }
     else{
      setCounter("out of bound");
     }
  }

  const decval= () =>{
    if(counter>0){
      counter=counter-1;
      setCounter(counter);
    }
    else{
      setCounter("out of bound");
      
    }
   
  }


 return (
  <>
    <h1>counter : {counter}</h1>
    <h1>
      <button onClick={addval}>Increament</button>
      <button onClick={decval}>Decrement</button>
    </h1>
  </>
 )
}

export default App
