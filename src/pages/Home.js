import React from 'react'
import LocationList from '../components/LocationList'
import SearchForm from '../components/SearchForm'

const Home = () => {
  return (
    <div>
      <SearchForm />
      <LocationList />
    </div>
  )
}

export default Home
