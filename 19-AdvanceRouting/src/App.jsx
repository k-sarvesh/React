import React from 'react'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import {Route , Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Product from './Pages/Product'
import Contact from './Pages/Contact'
import About from './Pages/About'
import NotFound from './Pages/NotFound'
import Womens from './Pages/Womens'
import Mens from './Pages/Mens'


const App = () => {
  return (
    <div className='flex flex-col bg-gray-700 min-h-screen '>
       <NavBar/>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path='mens' element={<Mens/>} />
            <Route path='womens' element={<Womens/>} />
          </Route>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
          

          <Route path='*' element={<NotFound/>}/>
       </Routes>
       
       <Footer/>
    </div>
  )
}

export default App
