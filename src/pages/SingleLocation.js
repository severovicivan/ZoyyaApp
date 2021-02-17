import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'

const SingleLocation = () => {
  const {id} = useParams();
  return (
    <div>
      <h2>{id}</h2>
    </div>
  )
}

export default SingleLocation
