import React from 'react';

const EditButton = ({ onClick }) => (
  <button onClick={onClick} className="edit-btn">
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="23" height="23" stroke="#fff"/>
      <path d="M17 8.32827L9.60377 15.7666L8.28302 14.4194L15.6604 7L17 8.32827ZM7 17L8.96226 16.4118L7.58491 15.0835L7 17Z" fill="#fff"/>
    </svg>
  </button>
);

export default EditButton;