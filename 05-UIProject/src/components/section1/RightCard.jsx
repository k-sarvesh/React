import React from 'react'
import RightcardContent from './RightcardContent'
function RightCard(props) {
  return (
    <div id="card"  className='bg-red-200 h-full w-90 rounded-4xl overflow-hidden relative shrink-0 '>
        <img src={props.data.image} alt="image" className='w-full h-full object-cover' />
        <RightcardContent data={props.data}/>
    </div>
  )
}

export default RightCard