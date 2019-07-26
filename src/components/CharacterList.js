import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Card, Icon, Image} from 'semantic-ui-react'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  //characters will be stored in an array 
  const[characters, setCharacters]=useState([])
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
        .get(`https://rickandmortyapi.com/api/character/`)
        .then(response => {setCharacters(response.data.results)})
        .catch(error => console.log('Unexpected Error: ',error))
  }, [])//Cannot add anything to the dependency array as then useEffect will perform API requests to check if characters changed and hit API limit.
  
  return <section className='character-list grid-view'>
      
      {characters.map((character,index) => 
          <Card key={index}>
          <Image src={character.image} wrapped ui={true} />
          <Card.Content>
            <Card.Header>{character.name}</Card.Header>
            <Card.Meta>
              <span className='date'>{character.species}</span>
            </Card.Meta>
            <Card.Description>
              Status:{character.status}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <p>
              <Icon name='location arrow' />
              Location: {character.location.name}
            </p>
          </Card.Content>
        </Card>
        )}
    </section>

}
