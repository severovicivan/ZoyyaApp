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

  return (
    <section className="section location-section">
      <Link to="/" className="btn btn-primary">
        Natrag na lokacije
      </Link>
      <h2 className="section-title">{location.name}</h2>
      <div className="place">
        <img src={location.imageUrl} alt={location.name}/>
      </div>
    </section>
  )
}

export default SingleLocation
