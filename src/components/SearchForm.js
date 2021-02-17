import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  // setSearchTerm is invoked on user type event
  const {setSearchTerm} = useGlobalContext()
  const searchValue = React.useRef('');

  // Setting Cursor to Search Form input
  React.useEffect(() => {
    searchValue.current.focus()
  },[])

  const searchLocation = () => {
    setSearchTerm(searchValue.current.value)
  }

  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name"> Pronađi lokaciju </label>
          <input type="text" id="name" 
          ref={searchValue} onChange={searchLocation} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
