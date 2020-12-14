import React from 'react';
import PropTypes from 'prop-types';

const Overlay = ({ isOpen, onClick, children }) => {
  const overlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClick();
    }
  };

  return (
    <div className={`overlay overlay_visible_${isOpen}`} onClick={overlayClick}>{children}</div>
  );
};

Overlay.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.object,
  onClick: PropTypes.func,
};

export default Overlay;
