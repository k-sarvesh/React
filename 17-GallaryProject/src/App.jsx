import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [UserData, setUserData] = useState([])
  const [Images, setImages] = useState()
  const [Index, setIndex] = useState(1)
  

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${Index}&limit=${Images || 10}`);
    setUserData(response.data);
    console.log(response.data);
  }

  useEffect(() => {
    getData();
  },[Index]);

  let printuserData = <h3 className="text-gray-300 text-xs absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Loading...</h3>;

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
        <h1 className='text-white text-5xl mb-10 bg-cover'>Random Image Gallery</h1>
        <input className='border border-white p-2 rounded mr-2 text-white w-sm ' placeholder='Enter the number of images you want' type="text" value={Images} onChange={(elem)=>{
          setImages(elem.target.value);
        }} />
        <button onClick={() => {
          getData();
          setIndex(1);
        }} className='bg-green-400 p-1 w-28 text-white rounded text-2xl cursor-pointer active:scale-95 '>Get Data </button>
      </div>
      <div className="flex text-white h-[82] text-2xl bg-cover flex flex-wrap justify-center gap-6">
        {printuserData}
      </div>
      <div className="flex justify-center gap-4 mt-10">
        <h3 className="text-white text-xl">Page {Index}</h3>
        <button onClick={() => {
          if(Index > 1){
            setIndex(Index - 1);
            setUserData([]);
          }
        }} className='bg-gray-200 rounded h-10 w-20 text-4sm text-black active:scale-95'>Previous</button>
      <button onClick={() => {
        setIndex(Index + 1);
        setUserData([]);
      }} className='bg-gray-200 rounded h-10 w-20 text-4sm text-black active:scale-95'>Next</button>
      </div>
    </div>
  )
}

export default App