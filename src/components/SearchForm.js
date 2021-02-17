import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {serSearchTerm} = useGlobalContext()
  return (
    <div>
      <h2>search form component</h2>
    </div>
  )
}

export default SearchForm
