
import React from 'react'

function App() {

  const submition= (n)=> {
    n.preventDefault();
    console.log('Submitted');
  }

  return (
    <div>
      <form onSubmit={(n)=>{
          submition(n);
        }} action="">
        <input type="text" placeholder='Enter your name' />
        <input type="email" placeholder='Enter your email' />
        <input type="password" placeholder='Enter your password' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App