import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

function Page1content() {
  return (
    <div className='py-3 px-18 flex justify-between flex-1 w-full gap-10'>
        <Leftcontent/>
        <Rightcontent/>
    </div>
  )
}

export default Page1content