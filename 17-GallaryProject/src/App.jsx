import React, { useEffect, useState, useTransition } from 'react'
import axios from 'axios'

const App = () => {

  const [UserData, setUserData] = useState([])
  const [Images, setImages] = useState()

  const getData = async () => {
    const randomPage = Math.floor(Math.random() * 100) + 1;
    const response = await axios.get(`https://picsum.photos/v2/list?page=${randomPage}&limit=${Images || 10}`);
    setUserData(response.data);
  }

  let printuserData = "No userdata available";

  if(UserData.length > 0){
      printuserData = UserData.map((item,index)=>{
        return (
          <div key={index} className="p-4">
            <img src={item.download_url} alt={item.author} className="h-50 rounded shadow-lg" />
            <p>{item.author}</p>
          </div>
        )
      })
  }

  
  return (
    <div className='bg-black min-h-screen overflow-auto p-10'>
      <div className="text-center mb-10">
        <h1 className='text-white text-5xl mb-10 bg-cover'>Random Image Gallary</h1>
        <input className='border border-white p-2 rounded mr-2 text-white w-sm ' placeholder='Enter the number of images you want' type="text" value={Images} onChange={(elem)=>{
          setImages(elem.target.value);
        }} />
        <button onClick={getData} className='bg-green-400 p-3 text-white rounded text-2xl cursor-pointer active:scale-95 '>Get Data </button>
      </div>
      <div className="flex text-white text-2xl bg-cover flex flex-wrap justify-center gap-6">
        {printuserData}
      </div>
    </div>
  )
}

export default App