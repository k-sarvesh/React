import React from 'react'

function cards() {
  return (
    <div>
        <div id='container' className='flex w-full h-screen bg-gray-200'>
     <div id='cards' className='w-10 h-10 border border-gray-400 shadow-2xl rounded-lg'>
        <div id='title' className='w-full h-1/4 bg-gray-200'></div>
        <div id='content' className='w-full h-3/4 bg-gray-200'></div>
     </div>
    </div>
    </div>
  )
}

export default cards