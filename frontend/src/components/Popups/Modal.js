import React from 'react';
import PropTypes, { array, object } from 'prop-types';

const Modal = ({ isOpen, children }) => (
  <div className={`modal modal_visible_${isOpen}`}>{children}</div>
);

Modal.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.oneOfType([array, object]),
};

export default Modal;
