import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import About from './Pages/About' 
import NavBar from './Component/NavBar'


const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path = "/contact" element = {<Contact/>}/>
        <Route path = "/about" element = {<About/>}/>
      </Routes>
      
    </div>
  )
}

export default App
