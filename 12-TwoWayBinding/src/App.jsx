
import React from 'react'
import { useState } from 'react';

function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submition= (n)=> {
    n.preventDefault();
    console.log(`Form Submitted by ${name}`);
    setName('');
    setEmail('');
    setPassword('');
  }

  return (
    <div>
      <form onSubmit={(n)=>{
          submition(n);
        }} action="">
        <input type="text" placeholder='Enter your name' value={name} onChange={(e)=>{
          setName(e.target.value)
        }}/>
        <input type="email" placeholder='Enter your email' value={email} onChange={(e)=>{
          setEmail(e.target.value)
        }}/>
        <input type="password" placeholder='Enter your password' value={password} onChange={(e)=>{
          setPassword(e.target.value)
        }}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App