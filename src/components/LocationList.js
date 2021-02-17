import React from 'react'
import Location from './Location'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const LocationList = () => {
  const {locations,loading} = useGlobalContext();
  console.log(locations);
  if(loading){
    return <Loading />
  }

  if(locations.length < 1){
    return (
      <h2>
        Ne možete rezervirati termin na traženoj lokaciji!
      </h2>
    )
  }

  return (
    <div>
      <h2>Location list component</h2>
    </div>
  )
}

export default LocationList