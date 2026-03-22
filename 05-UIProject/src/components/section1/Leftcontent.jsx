import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Hero from './hero'
import Arrow from './arrow'

const Leftcontent = () => {
  return (
    <div className="w-1/3 h-full flex flex-col justify-between">
       <Hero/>
       <Arrow/>
    </div>
  )
}

export default Leftcontent