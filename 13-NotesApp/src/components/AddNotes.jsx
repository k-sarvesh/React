import React, { useState } from 'react'

function AddNotes() {

    function submitHandler(n){
        n.preventDefault();
        console.log("Submitted");
        setHeading("");
        setNotes("");
    }
    const [heading, setHeading] = useState("")
    const [notes, setNotes] = useState("")
  return (
   <div className='flex justify-center items-center h-screen'>
  <form className='flex items-center flex-col justify-center p-20 gap-5 w-1/2 mx-auto border border-gray-300 shadow-2xl rounded-lg' >
    
    <h1 className=' text-4xl mb-6 text-center'>New Note</h1> 

    <input 
      type="text" 
      placeholder='Enter Title' 
      value={heading} 
      onChange={(e)=> setHeading(e.target.value)}
      className='w-full text-2xl font-bold shadow-xl h-20 text-center border border-gray-400' 
    />

    <textarea 
      placeholder='Enter Your Notes' 
      value={notes} 
      onChange={(n)=> setNotes(n.target.value)}
      className='w-full shadow-xl h-40 text-2xl font-bold text-left p-3 border border-gray-400'>
    </textarea> 

    <button 
      onClick={(n)=> submitHandler(n)}
      className='bg-gray-200 border border-gray-400 rounded-xl w-32 h-10 mt-6 text-xl cursor-pointer transition-transform duration-200 hover:scale-105'>
      Add Notes
    </button>

  </form>
</div>
  )
}

export default AddNotes