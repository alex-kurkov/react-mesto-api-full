import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const CardContainer = (props) => (
  <section>
    <ul className="cards-container">
      {props.cards.map((card) => (
        <Card
          card={card}
          key={card._id}
          {...props} />
      ))}
    </ul>
  </section>
);

CardContainer.propTypes = {
  cards: PropTypes.array,
  map: PropTypes.func,
};

export default CardContainer;
