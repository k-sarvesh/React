import React, { useState } from 'react'

const App = () => {


  // Set Item
  // localStorage.setItem("Name", "Sarvesh");
  // localStorage.setItem("age", "21");
  // localStorage.setItem("number", "9876543210");
  // // Get Item
  // const name = localStorage.getItem("Name");
  // const age = localStorage.getItem("age");
  // const number = localStorage.getItem("number");
  // console.log(name, age, number);
  // // Remove Item
  // localStorage.removeItem("Name");
  // localStorage.removeItem("age");
  // localStorage.removeItem("number");
  // //Clear Storage
  // localStorage.clear();
  // Storing Objects in local Storage
  const user = {
    name : "Sarvesh",
    age : "21",
    number : "9876543210"
  }
  localStorage.setItem("User" , JSON.stringify(user));
  const data = localStorage.getItem("User");
  console.log(data); //Its come in string format
  // To get in object format we need to parse it
  const Data = JSON.parse(data);
  console.log(Data); //Its come in object format

  const [Key, setKey] = useState("")
  const [Value, setValue] = useState("")

  function SaveLS(){
    localStorage.setItem(Key, Value);
    setKey("")
    setValue("")
  }
  
  return (
    <div className='flex justify-center align-center h-fit flex-col gap-5 w-1/2 mt-52 mx-auto border-2 border-gray-400 p-2'>
      Hello !!
      <h2>What you want to save in Local Storage</h2>
      <input type="text" placeholder="Enter Anything" className='border-2 border-gray-400 p-2' onChange={(n)=>{
        setKey(n.target.value)
      }} value={Key}/>
      <h2>Enter the value </h2>
      <input type="text" placeholder="Enter Anything" className='border-2 border-gray-400 p-2' onChange={(n)=>{
        setValue(n.target.value)
      }} value={Value}/>
      <button onClick={()=>{
        SaveLS()
      }} className='bg-green-200 h-10 w-40 mx-auto rounded hover:bg-green-300 cursor-pointer transition-colors '>Save in Local Storage</button>

    </div>
  )
}

export default App