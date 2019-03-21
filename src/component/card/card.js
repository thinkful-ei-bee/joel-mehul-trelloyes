import React from 'react';

const Card = (props) => {
  //console.log(props);
  
  const cards = props.cardIds.map((card, index) => (
    <div className="Card" key={index}>
      <h3>{props.allCards[card].title}</h3>
      <p>{props.allCards[card].content}</p>
    </div>
  ));

  //console.log(cards);
  
  return (
    <div className="List-cards">
      {cards}
    </div>
  )

}

export default Card;