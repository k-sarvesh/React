import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {
  const [Num1, setNum1] = useState(0);
  const [Num2, setNum2] = useState(10);

  //In this case , it will run whenever the component is run or (whenever 
  //setstate will be called)

  // useEffect(function clicked(){
  //   console.log("This function is running parallely");

  // });


  // In this case , it will run only once in first render

  // useEffect(function clicked(){
  //   console.log("This function is running parallely");

  // },[]);  //[] is called as dependency array


  // In this case , it will run whenever the component is run or (whenever 
  //setstate of Num1 will be called)

  useEffect(function clicked(){
    console.log("This function is running parallely");

  },[Num1]);

  return (
    <div>
      <h2>Num1 {Num1}</h2>
      <h2>Num2 {Num2}</h2>
      <button onMouseEnter={() => {
        setNum1(Num1 + 1);
      }}
      onMouseLeave={()=>{
        setNum2(Num2 + 10);
      }} >Add Num1</button>

    </div>
  )
}

export default App