import React from 'react'
import AddNotes from './AddNotes'
import cards from './cards'
import NotesApp from '../App'

function Main() {
    return (
        <div className='flex flex-col justify-center items-center mt-10 p-10'>
            <NotesApp/>
            <h1 className='text-6xl font-bold text-gray-400 p-5 border-b-4 border-gray-400 w-full flex justify-center'>Notes</h1>
            <button onClick={() => { AddNotes() }} className='border border-gray-400 shadow-2xl bg-white w-32 h-20 text-black text-2xl mt-10 rounded-xl hover:scale-105 transition-transform duration-300'>Add Notes</button>
        </div>
    )
}

export default Main