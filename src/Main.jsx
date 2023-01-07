import React, { useState } from 'react'
let  num1;
const Main = () => {
    const[input,setInput]=useState([1,2,3,4,5,6]);
    const[value,setValue]=useState();
    function handleClick1(){
           num1 = setValue(input[0]);
    }
    function handleClick2(){
            setValue(...num1+input[1]);
    }
  return (
      
    <div>
        <input onChange={e=>setInput(e.target.value)} value={value} readOnly type="number" />
        <button onClick={handleClick1} >1</button>
        <button onClick={handleClick2} >2</button>
    </div>
  )
}

export default Main