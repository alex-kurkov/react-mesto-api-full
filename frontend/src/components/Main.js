import React from 'react';
import CardContainer from './CardContainer';
import Profile from './Profile';

const Main = (props) => {
  return (
    <div className="main-block">
      <Profile {...props} />
      <CardContainer {...props} />
    </div>
  );
}

export default Main;
