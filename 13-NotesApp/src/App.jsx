import React, { useState } from 'react'


function App() {

  const [heading, setHeading] = useState("");
  const [desc, setDesc] = useState("");
  const [task, setTask] = useState([]);

  function submitHandler(e) {
        e.preventDefault();
        console.log("Submitted");
        const copyTask = [...task];
        copyTask.push({heading , desc});
        setTask(copyTask);

        setDesc("");
        setHeading("");
  }
  return (
    <div className='h-screen lg:flex bg-black text-white'>

      <form onSubmit={(e) => {
        submitHandler(e);
        

      }} className='flex gap-4 lg:w-1/2 p-10 flex-col items-start'>

        <h1 className='text-4xl mb-2 font-bold'>Add Notes</h1>

        {/* PEHLA INPUT FOR HEADING */}
        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 w-full font-medium py-2 border-2 outline-none rounded '
          value={heading}
          onChange={(e)=>{
            setHeading(e.target.value);
          }}
        />

        {/* DETAILED VALA INPUT  */}
        <textarea
          type="text"
          className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none  rounded '
          placeholder='Write Details here'
          value={desc}
          onChange={(e)=>{
            setDesc(e.target.value);
          }}
        />

        <button
          className='bg-white active:scale-95 font-medium w-full outline-none  text-black px-5 py-2 rounded'
        >
          Add Note
        </button>

      </form>
      <div className='lg:w-1/2 lg:border-l-2  p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto'>
          {task.map((elem, index)=>{
            return (
              <div key={index} className=" text-black px-4 py-4 rounded w-52 h-52 bg-[url('https://static.vecteezy.com/system/resources/thumbnails/018/923/705/small/paper-background-illustration-png.png')] bg-cover">
                <h1 className='text-xl mb-1 font-bold'>{elem.heading}</h1>
                <p className='text-md font-medium'>{elem.desc}</p>
                <button className='border-1 px-1.5 py-0 rounded cursor-pointer font-medium text-sm hover:bg-gray-400 hover:text-white hover:scale-105 w-15 h-5 mt-19 ml-28' onClick={()=>{
                setTask((prev)=> prev.filter((elem,i)=> i !== index));
                }}>Done</button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App