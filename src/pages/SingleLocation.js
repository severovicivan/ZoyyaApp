import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import all_locations from '../database/locations.json'

const SingleLocation = () => {
  const {id} = useParams();
  const [loading,setLoading] = React.useState(false);
  const [location, setLocation] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getLocation(){
      try {
        var response = all_locations.filter(function (el) {
          return el.id == id
        });
        // Fetching first and only object from list
        const data = response[0];
        if(data){
          setLocation(data)
        } else {
          setLocation(null)
        }
        setLoading(false)
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    }
    // Invoking function
    getLocation()
  },[id])

  if(loading){
    return <Loading/>
  }

  if(!location){
    return <h2 className="section-title">
      Za ovu lokaciju ne možete rezervirati termin.
    </h2>
  }

  var category = ''

  if (location.category) {
    category = location.category.toLowerCase()
  } else {
    category = 'Ostalo'
  }

  return (
    <section className="section location-section">
      <Link to="/" className="btn btn-primary">
        Natrag na lokacije
      </Link>
      <h2 className="section-title">{location.name}</h2>
      <div className="place">
        <img src={location.imageUrl} alt={location.name}/>
        <div className="place-info">
          <p>
            {/* <span className="place-data">O nama:</span> */}
            <p className="desc">{location.description}</p>
          </p>
          <p className="camel-case">
            <span className="place-data">Kategorija:</span>
            {category}
          </p>
          <p>
            <span className="place-data">Adresa:</span>
            {/* http://maps.google.com/?q=Biankinijeva ul. 13, Zagreb, 10000 */}
            <a href={`http://maps.google.com/?q=
            ${location.address},
            ${location.zipCode},
            ${location.city}`}>
              {location.address + ', ' +
              location.zipCode + ' ' + 
              location.city}
            </a>
          </p>
          <p>
            <span className="place-data">Email:</span>
            <a href={`mailto:${location.email}
              ?subject=Rezervacija%20termina`}>
              {location.email}
            </a>
          </p>
          <p>
            <span className="place-data">Telefon:</span>
            <a href={`tel:+${location.mobilePhone}`}>
              {location.mobilePhone}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default SingleLocation
