import React from 'react'
import Location from './Location'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const LocationList = () => {
  const {locations,loading} = useGlobalContext();
 
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
    <section className="section">
      <h2 className="section-title">Dostupne usluge</h2>
      <div className="locations-center">
        {locations.map((item) => {
          return <Location key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default LocationList