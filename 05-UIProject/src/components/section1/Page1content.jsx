import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

function Page1content(props) {
  return (
    <div className='pb-16 pt-1 px-18 flex item-center h-[90vh] w-full gap-10'>
        <Leftcontent/>
        <Rightcontent data = {props.data}/>
    </div>
  )
}

export default Page1content