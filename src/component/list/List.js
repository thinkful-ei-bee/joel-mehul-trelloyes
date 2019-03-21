import React from 'react'
import CardItem from '../card-item/CardItem.js'

export default function List(props) {
  
  // Needs to filter allCards based on card.id
  //console.log(props.cardIds);

  // cardsToRender = props.cardsIds.filter( id => (

  // ));
  console.log(props);
  return (
    <div>
      <p>{props.header}</p>
      <ul>
        {props.cards.map((card, index) =>
          <CardItem 
            key={index}
            listId = {props.id}
            card = {card}
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
