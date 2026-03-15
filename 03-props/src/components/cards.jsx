import React from 'react'

function Cards(props) {
  return (
        <div className="card">
        <img src={props.img} alt="image" />
        <h1>{props.name}</h1>
        <p>{props.desc}</p>
        <button>Click Me</button>
      </div>
   
  )
}

export default Cards