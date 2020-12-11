import React from 'react';
import PropTypes from 'prop-types';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { LikeButton, TrashButton } from './Buttons/index';

const Card = ({ card, onCardClick, onCardLike, onCardDelete }) => {
  const { name, link, owner, likes } = card;

  const handleCardClick = () => {
    onCardClick(card);
  };
  const handleLikeClick = () => {
    onCardLike(card);
  };
  const handleCardDelete = () => {
    onCardDelete(card);
  };

  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = owner._id === currentUser._id;
  const liked = likes.some((item) => item._id === currentUser._id);

  return (
    <li className="card">
      <img className="card__image" src={link} alt="Фотография места" onClick={handleCardClick} />
        <div className="card__description-wrap">
          <h2 className="card__title">{name}</h2>
          <div className="card__likes-wrap">
            <LikeButton liked={liked} title="Нравится" onClick={handleLikeClick} />
            <span className="card__likes-counter">{likes.length}</span>
          </div>
        </div>
      {isOwn && <TrashButton title="Удалить" onClick={handleCardDelete} />}
    </li>
  );
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
  onCardClick: PropTypes.func,
  onCardLike: PropTypes.func,
  onCardDelete: PropTypes.func,
};

export default Card;
