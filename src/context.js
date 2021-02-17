import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'
// import locations from './database/locations.json'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
// const [selectedLocation, setSelectedLocation] = useState(null)
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  return <AppContext.Provider value='hello'>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
