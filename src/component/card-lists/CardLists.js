import React from 'react'
import List from '../list/List'

export default function CardLists(props) {
  
  return (
    <>
      {props.lists.map((list, index) => 
       
        <List 
          key={index}
          header={list.header}
          cardIds={list.cardIds}
          allCards={props.allCards}
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