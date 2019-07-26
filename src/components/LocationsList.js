import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'semantic-ui-react'

export default function LocationsList() {
  // TODO: Add useState to track data from useEffect
  //locations will be stored in an array 
  const[locations, setLocations]=useState([])
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
        .get(`https://rickandmortyapi.com/api/location/`)
        .then(response => {setLocations(response.data.results)
          console.log(response.data.results);} )
        .catch(error => console.log('Unexpected Error: ',error))
  }, [])//Cannot add anything to the dependency array as then useEffect will perform API requests to check if locations changed and hit API limit.
  
  return <section className="character-list grid view">
      {locations.map((location,index)=>
                  <Card key={index}>
                  <Card.Content>
                    <Card.Header>{location.name}</Card.Header>
                    <Card.Meta>
                      <span className='date'>Type: {location.type}</span>
                    </Card.Meta>
                    <Card.Description>
                      Dimension:{location.dimension}
                    </Card.Description>
                  </Card.Content>
                </Card>
        )}
      </section>
}
