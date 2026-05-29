import React from 'react'
import { useParams } from 'react-router-dom'

const AboutDetails = () => {
    const params = useParams();
  return (
    <div>
      <h1>{params.id} About Details</h1>
    </div>
  )
}

export default AboutDetails
