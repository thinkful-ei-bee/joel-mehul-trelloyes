import React from 'react'
import CardItem from '../card-item/CardItem.js'

export default function List(props) {
  
  // Needs to filter allCards based on card.id
  //console.log(props.cardIds);

  // cardsToRender = props.cardsIds.filter( id => (

  // ));

  return (
    <div>
      <p>{props.header}</p>
      <ul>
        {props.cardIds.map((card, index) =>
          <CardItem 
            key={index}
            title={card.title}
            content={card.content}
            onDeleteCard={props.onDeleteCard}
          />
        )}
      </ul>
    </div>
  )
    
}

List.defaultProps = {
  header: {},
  cardIds: {},
  allCards: {}
}
