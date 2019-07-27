import React from 'react'
import { Card } from 'semantic-ui-react'
export default function LocationCard (props) {
  const { location } = props;
  return (
  
  <Card>
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
  )
}
