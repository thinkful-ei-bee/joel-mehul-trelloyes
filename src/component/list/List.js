import React from 'react'
import CardItem from '../card-item/CardItem.js'

export default function List(props) {
  

  // deprecated, here for reference only
  // const lists = this.state.lists.map((list) => (
  //   <section className="List" key={list.id}>
  //     <header className="List-header">
  //       <h2>{list.header}</h2>
  //     </header>
  //     <Card allCards={this.state.allCards} cardIds={list.cardIds}></Card>
  //   </section>
  // ));

  return (
    <div>
      <p></p>
      {props.cardIds.map((card, index) =>
        // <ul key={index}>
        //   <list 
        //     key={index}
        //     cardIds={list.cardIds}
        //     // onDeleteCard={this.props.onDeleteCard}
        //   />
        // </ul>  
        <CardItem 
          key={index}
          title={card.title}
          content={card.content}
          onDeleteCard={props.onDeleteCard}
        />
      )}
    </div>
  )
    
}

List.defaultProps = {
  list: {}
}
