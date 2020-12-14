import React from 'react';
import PropTypes from 'prop-types';

const AddButton = ({ onClick }) => (
  <button onClick={onClick} className="add-btn">
    <svg width="70%" height="70%" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 9.77778H12.2222V0H9.77778V9.77778H0V12.2222H9.77778V22H12.2222V12.2222H22V9.77778Z" fill="#fff"/>
    </svg>
  </button>
);

AddButton.propTypes = {
  onClick: PropTypes.func,
};

export default AddButton;
