import React from 'react'
import CardItem from '../card-item/CardItem.js'
import AddRandomCardForm from '../add-random-card-form/AddRandomCardForm';

export default function List(props) {
  
  return (

    <section className="list-section">
      <p><h2>{props.header}</h2></p>
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
    </section>
  )
  
}

List.defaultProps = {
  header: {},
  cardIds: {},
  allCards: {}
}
