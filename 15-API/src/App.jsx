import React from 'react'
import axios from 'axios';
import { useState } from 'react';

const App = () => {

// It will give data in promise (pending)
// const getdata = () =>{
//   const data = fetch('https://jsonplaceholder.typicode.com/users');
//   console.log(data);
// }



// async function 

// const getdata = async()=>{
//   const data = await fetch('https://picsum.photos/v2/list');
//   const jsondata = await data.json();  // convert the data into JSON
//   console.log(jsondata);
// }



// Axios method to get data from API

  const [data, setData] = useState([]);
  const getdata = async()=>{
    const responce = await axios.get('https://picsum.photos/v2/list')
    setData(responce.data );
  }
  return (
    <>
      <div>
        <button onClick={getdata}>Get Data</button>
      </div>
      {data.map((Element,index)=>{
      return (
        <>
        <h3 key={index}>{Element.author} {index}</h3>
        </>
      )
      })}
    </>
  )
}

export default App