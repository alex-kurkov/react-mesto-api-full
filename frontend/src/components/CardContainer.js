import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const CardContainer = (props) => {
  const { cards } = props;
  return (
    <section>
      <ul className="cards-container">
        {cards.map((card) => (
          <Card
            card={card}
            key={card._id}
            {...props}/>
        ))}
      </ul>
    </section>
  );
};

CardContainer.propTypes = {
  cards: PropTypes.array,
  props: PropTypes.props,
};

export default CardContainer;
