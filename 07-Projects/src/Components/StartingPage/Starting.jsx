import React from 'react'

function Starting() {
  return (
    <div>
        <div id='Header' className='flex justify-between align-center p-20 '>
            <h2>Level : <span>Easy</span></h2>
            <h2>Timer : <span>00:00</span></h2>
            <h2>Score : <span>0</span></h2>
        </div>

        <div className="flex justify-center align-center h-100">
            <div id='SudokuGrid' className='grid grid-cols-9 gap-1 border w-100 h-100 '>
                
            </div>
        </div>
    </div>
  )
}

export default Starting