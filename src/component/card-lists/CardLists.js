import React from 'react'
import List from '../list/List'

export default function CardLists(props) {
  
  return (
    <div>
      {props.lists.map((list, index) => 
        <ul key={index}>
          <List 
            key={index}
            cardIds={list.cardIds}
            onDeleteCard={props.onDeleteCard}
          />
        </ul>  
      )}
    </div>
  )

}
