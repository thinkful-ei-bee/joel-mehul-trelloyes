import React from 'react'
import List from '../list/List'

export default function CardLists(props) {
  
  return (  

    <>
      {props.lists.map((list, index) => 
       
        <List 
          key={index}
          id = {list.id}
          header={list.header}
          // cardIds={list.cardIds}
          // allCards={props.allCards}
          cards={list.cardIds.map(id => props.allCards[id])}
          onDeleteCard={props.onDeleteCard}
        />
       
      )}
    </>
  )

}

CardLists.defaultProps = {
  lists: {},
  allCards: {}
}