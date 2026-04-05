import React from 'react'

function Welcome() {
  return (
    <div className="flex justify-center items-center flex-col h-screen w-screen bg-black text-white gap-4">
      <h1 className="text-6xl font-bold tracking-tight">Sudoku</h1>

      <p className="text-xl font-light opacity-80">
        Welcome to the game of Sudoku
      </p>

      <button
        className="px-6 py-3 text-lg rounded-full mt-10 w-32 h-8 bg-white text-black hover:bg-gray-200 hover:scale-105 active:scale-95 transition-all duration-200 shadow-md"
      >
        Start Game
      </button>
    </div>
  )
}

export default Welcome