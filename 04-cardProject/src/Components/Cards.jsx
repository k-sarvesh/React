import React from 'react'

function Cards(props) {
  return (
       <div className="card">
        <div className="top">
          <img src={props.blogo} alt="logo" />
          <button>Save </button>
        </div>
        <div className="center">
          <h3>{props.cname} <span>{props.pdate}</span></h3>
          <h2>{props.post}</h2>
          <div>
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>

        </div>
        <div className="bottom">
          <div><h2>{props.pay}</h2>
          <p>{props.location}</p></div>
          <button>Apply Now</button>
        </div>
      </div> 
    
  )
}

export default Cards