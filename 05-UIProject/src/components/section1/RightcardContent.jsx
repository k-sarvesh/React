import React from 'react'

function RightcardContent(props) {
  return (
    <div className='absolute top-0 left-0 w-full h-full flex flex-col p-6 justify-between'> 
            <h2 className='bg-white text-2xl rounded-full w-12 h-12 font-semibold flex items-center justify-center '>{props.data.id}</h2>
        <div>
        <p className=' text-shadow-lg text-xl text-white font-semibold leading-relaxed mb-15'>{props.data.description}</p>
        <div className='flex justify-between p-4'>
            <button className='bg-blue-600 rounded-full h-10 w-24 text-white font-semibold'>{props.data.tag}</button>
            <button className='bg-blue-600 rounded-full h-10 w-10 text-white font-semibold'><i class="ri-arrow-right-line"></i></button>
        </div>
        </div>
        </div>
  )
}

export default RightcardContent