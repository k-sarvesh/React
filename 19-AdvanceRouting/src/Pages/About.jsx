import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

  let navigate = useNavigate()
  return (
    <div className='flex flex-col items-center justify-center h-screen text-3xl text-white gap-5'>
      About page
      <button onClick={()=>{
        navigate('/');
      }} className='bg-green-800 text-white font-lg p-3 rounded cursor-pointer'>Go to Home Page</button>
      <button onClick={()=>{
        navigate(-1);
      }} className='bg-green-800 text-white font-lg p-3 rounded cursor-pointer'>Back</button>
    </div>
  )
}

export default About
