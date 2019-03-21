import React from 'react'
import CardItem from '../card-item/CardItem.js'
import AddRandomCardForm from '../add-random-card-form/AddRandomCardForm';

export default function List(props) {
  
  // Needs to filter allCards based on card.id
  //console.log(props.cardIds);

  // cardsToRender = props.cardsIds.filter( id => (

  // ));
  return (

    <seciton>

      <>
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
        <button
        onClick={() => props.onRandomCard(props.id)}
        type='button'>
        Add Random Card 
      </button>
      </>
    </seciton>
  )
    
}

List.defaultProps = {
  header: {},
  cardIds: {},
  allCards: {}
}
