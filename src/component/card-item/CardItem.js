import React from 'react'

export default function CardItem(props) {

  // reference only
  // const cards = props.cardIds.map((card, index) => (
  //   <div className="Card" key={index}>
  //     <h3>{props.allCards[card].title}</h3>
  //     <p>{props.allCards[card].content}</p>
  //   </div>
  // ));
  
  return (
    <li>
      <p>{props.title}</p>
      <button
        onClick={() => props.onDeleteCard(props.card)}
        type='button'>
        delete
      </button>
    </li>
  )

}

CardItem.defaultProps = {
  allCards: {},
  title: {},
  content: {},
}