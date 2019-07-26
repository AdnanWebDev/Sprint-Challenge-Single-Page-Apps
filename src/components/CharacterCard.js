import React from 'react'
import {Card, Icon, Image} from 'semantic-ui-react'

export default function CharacterCard (props) {
  const { character } = props;
  return (          
 
  <Card>
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

  )
}
