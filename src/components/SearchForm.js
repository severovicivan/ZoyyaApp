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

  // Disable page refresh on hitting Enter
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name" className="normal-case">
            Pronađi lokaciju za rezervaciju termina
          </label>
          <input type="text" id="name" 
          ref={searchValue} onChange={searchLocation} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
