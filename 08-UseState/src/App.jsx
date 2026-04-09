import React, { useState } from 'react'



function App() {

  const [nums, setnums] = useState(0)

function increaseNum(){
  setnums(nums+1);
}
function decreaseNum(){
  setnums(nums-1);
}

  return (
    <div>
      <h1>{nums}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
    </div>
  )
}

export default App