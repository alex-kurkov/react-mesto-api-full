import React from 'react';
import Card from './Card';

const CardContainer = (props) => (
  <section>
    <ul className="cards-container">
      {props.cards.map((card, i) => (
        <Card
          card={card}
          key={card._id}
          {...props}/>
      ))}
    </ul>
  </section>
);

export default CardContainer;
