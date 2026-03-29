import React from 'react'


function App() {
  function btnclicked(){
  console.log("Button clicked")
}
function mouseEnter(){
  console.log("Mouse Entered");
}
function typeing(){
  console.log("Typing");
}
  return (
    <div className="">
      <button onMouseEnter={mouseEnter} onClick={btnclicked}>Click me</button>
      <input onChange={(elem)=>{
        typeing();
        console.log(elem.target.value);
      }} type="text" placeholder='Enter somthing' />
    </div>
  )
}

export default App