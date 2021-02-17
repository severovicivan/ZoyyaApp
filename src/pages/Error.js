import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>Ova stranica ne postoji, pogrešan URL!</h1>
        <Link to="/" className="btn btn-primary">
          Početna
        </Link>
      </div>
    </section>
  )
}

export default Error
