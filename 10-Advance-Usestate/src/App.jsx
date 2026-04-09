import React, { useState } from 'react'

function App() {

  const [num, setNum] = useState(0)
  const increase = ()=>{
    // setNum(num + 1)
    // setNum(num + 1)
    // setNum(num + 1)
    setNum(prev => (prev + 1));
    setNum(prev => (prev + 1));
    setNum(prev => (prev + 1));
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increase}>Increment</button>
    </div>
  )
}

export default App