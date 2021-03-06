import React from 'react'
import { Link } from 'react-router-dom'

const Location = ({image,name,id,address,category}) => {
  return (
    <article className="location">
      <div className="img-container">
        <img src={image} alt={name}/>
      </div>
      <div className="location-footer">
        <h4>{category}</h4>
        <h5><i>{name}</i></h5>
        <p>{address}</p>
        <Link to={`/location/${id}`} 
          className="btn btn-primary btn-details">
            Rezerviraj termin
        </Link>
      </div>
    </article>
  )
}

export default Location