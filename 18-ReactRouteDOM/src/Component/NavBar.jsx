import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <nav className='nav'>
            <div className="">
                <h2>Huiya</h2>
            </div>
            <div className="nav2">
                <Link to='/'>Home</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/about'>About</Link>
            </div>
        </nav>
      
    </div>
  )
}

export default NavBar
