import React, { useEffect, useState } from 'react';
import axios from 'axios';

import LocationCard from './LocationCard';

export default function LocationsList() {
  // TODO: Add useState to track data from useEffect
  //locations will be stored in an array 
  const [locations, setLocations] = useState([])
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://rickandmortyapi.com/api/location/`)
      .then(response => { setLocations(response.data.results) })
      .catch(error => console.log('Unexpected Error: ', error))
  }, [])//Cannot add anything to the dependency array as then useEffect will perform API requests to check if locations changed and hit API limit.

  return <section className="location-list grid view">
    {locations.map((location, index) => <LocationCard key={index} location={location} />)}
  </section>
}
