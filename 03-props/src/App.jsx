import React from 'react'
import Cards from './components/cards.jsx'
function App() {
  return (
    <div className='parent'>
      <Cards name="Sarvesh Khawale" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat!" img="https://images.unsplash.com/photo-1768092754652-c89fc7f48474?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Cards name="Krishna Deole" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat!" img="https://plus.unsplash.com/premium_photo-1670966282879-ef5f3cbf1000?q=80&w=823&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Cards name="Samprat Deshmukh" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat!" img="https://plus.unsplash.com/premium_photo-1764699345499-50440f0bfb17?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    </div>
  )
}

export default App