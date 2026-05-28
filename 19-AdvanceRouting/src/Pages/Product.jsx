import React from 'react'
import { Link , Outlet } from 'react-router-dom'


const Product = () => {
  return (
    <div>
      Product Page
      <div className='flex space-x-4 mt-4 justify-center'>
        <Link to='/product/mens' className='text-white hover:underline'>Mens</Link>
        <Link to='/product/womens' className='text-white hover:underline'>Womens</Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default Product
