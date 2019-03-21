import React from 'react'

export default function CardItem(props) {
  
  return (
    <li className="Card">
      <p>{props.card.title}</p>
      <button
        onClick={() => props.onDeleteCard(props.card,props.listId)}
        type='button'>
        delete
      </button>
    </li>
  )

}

CardItem.defaultProps = {
 card:{}
}