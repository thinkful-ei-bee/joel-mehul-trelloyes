import React from 'react';
import Card from '../card/card';

const List = (props) => {

  const listItems = props.list.map((card, index) => ({Card}));

  return(
    <div className="List-cards">
      {listItems}
    </div>
  )
  
}

export default List;