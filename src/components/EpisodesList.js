import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'semantic-ui-react'

export default function EpisodesList() {
  // TODO: Add useState to track data from useEffect
  //episodes will be stored in an array 
  const [episodes, setEpisodes] = useState([])
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://rickandmortyapi.com/api/episode/`)
      .then(response => { setEpisodes(response.data.results) })
      .catch(error => console.log('Unexpected Error: ', error))
  }, [])//Cannot add anything to the dependency array as then useEffect will perform API requests to check if episodes changed and hit API limit.

  return <section className="episode-list">
    {episodes.map((episode, index) =>
      <Card key={index}>
        <Card.Content>
          <Card.Header>{episode.name}</Card.Header>
          <Card.Meta>
            <span className='date'>Air date: {episode.air_date}</span>
          </Card.Meta>
          <Card.Description>
            Episode Tag:{episode.episode}
          </Card.Description>
        </Card.Content>
      </Card>
    )}
  </section>
}
