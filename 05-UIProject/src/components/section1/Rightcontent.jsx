import React from 'react'
import RightCard from './RightCard'

function Rightcontent(props) {
  return (
    <div id = "cardsflow" className='h-full w-2/3 p-4 flex flex-nowrap gap-10 overflow-x-auto'>
      {
        props.data.map((item) => {
          return <RightCard key={item.id} data={item}/>
        })
      }
      </div>
  )
}

export default Rightcontent