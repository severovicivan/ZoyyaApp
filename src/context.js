import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'
import all_locations from './database/locations.json'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading,setLoading] = useState(true)
  const [searchTerm,setSearchTerm] = useState('')
  const [locations,setLocations] = useState([])
  // const [selectedLocation, setSelectedLocation] = useState(null)

  const fetchLocations = async() => {
    setLoading(true)
    try {
      var newArray = all_locations.filter(function (el) {
        return ((el.name).toLowerCase()).includes(searchTerm.toLowerCase())
      });
      // const response = await fetch(`${url}${searchTerm}`)
      // const data = await response.json()
      const data = newArray;
      // const {filtered_locations} = data;
      if(data){
        const newLocations = data.map((item)=>{
          const {id,name,imageUrl,address,city,category} = item
          return {
            id:id,name:name,image:imageUrl,
            address:address+', '+city,category:category
          }
        })
        setLocations(newLocations)
      } else {
        setLocations([])
      }
      setLoading(false)
      // console.log(data)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchLocations()
  }, [searchTerm])

  //     {!selectedLocation ?
  //       locations.map(location =>  <div onClick={()=>setSelectedLocation(location)}>{location.name}</div>)
  //      : <div>
  //         ...INSERT SELECTED LOCATION DATA HERE...
  //       </div>}
  //     {!!selectedLocation &&  <div onClick={()=>setSelectedLocation(null)}>{"<- BACK"}</div>}

  return <AppContext.Provider value={{
    loading,locations,setSearchTerm
  }}>
      {children}
    </AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
