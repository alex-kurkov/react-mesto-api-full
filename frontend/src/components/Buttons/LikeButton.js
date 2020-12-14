import React from 'react';
import PropTypes from 'prop-types';

const LikeButton = ({ onClick, liked }) => (
  <button className="like-btn" onClick={onClick}>
    <svg width="100%" height="100%" viewBox="0 0 50 50" fill="#000" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={liked ? '#000' : '#fff'}
        fillRule="nonzero"
        stroke="#000"
        strokeWidth="2"
        d="M44.44 27.77c4.75,-4.74 4.75,-12.44 0,-17.14 -4.74,-4.74 -12.44,-4.74 -17.18,0l-2.3 2.35 -2.3 -2.3c-4.75,-4.79 -12.45,-4.79 -17.14,-0.05 -2.3,2.3 -3.52,5.36 -3.52,8.6 0,3.24 1.27,6.29 3.52,8.59l19.44 19.44 19.48 -19.49z"/>
    </svg>
  </button>
);

LikeButton.propTypes = {
  liked: PropTypes.bool,
  onClick: PropTypes.func,
};

export default LikeButton;
