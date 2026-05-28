import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='bg-cyan-800 text-white p-10 '>
        <nav className='flex justify-between items-center text-lg'>
            <div><h2>Company</h2>
            </div>
            <div>
                <ul className='flex space-x-8 hover:cursor-pointer '>
                    <Link to='/' className='hover:text-gray-300 cursor-pointer'>Home</Link>
                    <Link to='/product' className='hover:text-gray-300 cursor-pointer'>Product</Link>
                    <Link to='/contact' className='hover:text-gray-300 cursor-pointer'>Contact</Link>
                    <Link to='/about' className='hover:text-gray-300 cursor-pointer'>About</Link>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default NavBar
