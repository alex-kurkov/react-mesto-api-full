import React from 'react';
import PropTypes from 'prop-types';

const CloseButton = ({ onClick }) => (
  <button onClick={onClick} title="Закрыть" className="close-btn">
    <svg width="100%" height="100%" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M44.7661 41.5683L31.9759 28.778L44.7661 15.9878L41.5686 12.7902L28.7783 25.5805L15.9881 12.7902L12.7905 15.9878L25.5808 28.778L12.7905 41.5683L15.9881 44.7658L28.7783 31.9756L41.5686 44.7658L44.7661 41.5683Z" fill="#fff"/>
    </svg>
  </button>
);

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CloseButton;