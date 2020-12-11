import React from 'react';
import PropTypes from 'prop-types';
import Overlay from './Overlay';
import { CloseButton } from '../Buttons/index';

const ImagePopup = ({ card, onClose }) => {
  const {link = '', name = ''} = card;
  return (
    <Overlay onClick={onClose} isOpen={!!card}>
      <div className={`image-modal image-modal_opened_${!!card}`}>
        <CloseButton onClick={onClose} />
        <img className="image-modal__image" src={link || ''} alt="фото" />
        <h3 className="image-modal__title">{name}</h3>
      </div>
    </Overlay>
  );
}

ImagePopup.propTypes = {
  card: PropTypes.oneOfType([
    PropTypes.shape({
      link: PropTypes.string,
      name: PropTypes.string,
    }), 
    PropTypes.string
  ]),
  onClose:  PropTypes.func.isRequired,
};

export default ImagePopup;
