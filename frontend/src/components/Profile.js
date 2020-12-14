import React from 'react';
import PropTypes from 'prop-types';
import CurrentUserContext from '../contexts/CurrentUserContext';
import { EditButton, AddButton } from './Buttons/index';

const Profile = ({ onEditAvatar, onAddPlace, onEditProfile }) => {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <section className="profile">
      <div className="profile__avatar-wrap" onClick={onEditAvatar}>
        <img className="profile__avatar" src={currentUser.avatar} alt="фотография героя страницы" />
      </div>
      <div className="profile__info-wrap">
        <div className="profile__username-wrap">
          <h1 className="profile__username">{currentUser.name}</h1>
          <EditButton title="Изменить" onClick={onEditProfile} />
        </div>
        <p className="profile__userabout">{currentUser.about}</p>
      </div>
      <div className="profile__add-btn-wrap">
        <AddButton title="Добавить место" onClick={onAddPlace} />
      </div>
    </section>
  );
};

Profile.propTypes = {
  onEditAvatar: PropTypes.func.isRequired,
  onAddPlace: PropTypes.func.isRequired,
  onEditProfile: PropTypes.func.isRequired,
};

export default Profile;
