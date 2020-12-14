import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import validate from '../../utils/validation';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../../contexts/CurrentUserContext';

const EditProfilePopup = ({ onUpdateUser, isOpen, onClose }) => {
  const currentUser = React.useContext(CurrentUserContext);

  const [errors, setErrors] = useState({
    name: '',
    about: '',
  });
  const [values, setValues] = useState({});
  const [anyInputInvalid, setAnyInputInvalid] = useState(true);
  const [showError, setShowError] = useState({});

  useEffect(() => {
    setValues(currentUser);
  }, [currentUser, isOpen]);

  const checkFormValidity = () => {
    const any = Object
      .values(errors)
      .some((i) => i !== false);
    setAnyInputInvalid(any);
  };

  useEffect(() => {
    setErrors(validate(values));
  }, [values]);

  useEffect(() => {
    checkFormValidity();
  }, [errors]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onUpdateUser(values);
  };

  return (
    <PopupWithForm
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleFormSubmit}
      anyInputInvalid={anyInputInvalid}>
        <label className="form__label">
          <input
            className={`form__input form__input_border_black form__input_color_${errors.name ? 'red' : 'black'}`}
            value={values.name}
            type="textarea"
            rows="2"
            name="name"
            onChange={handleInputChange}
            onFocus={() => setShowError({ name: true })}
            onBlur={() => setShowError({})}
            placeholder="Введите имя"
            noValidate />
          {errors.name && <div className="form__error-indicator"/>}
          {errors.name && showError.name && <span className="form__error-message">{errors.name}</span>}
        </label>

        <label className="form__label">
          <input
            className={`form__input form__input_border_black form__input_color_${errors.about ? 'red' : 'black'}`}
            value={values.about}
            type="text"
            name="about"
            onChange={handleInputChange}
            onFocus={() => setShowError({ about: true })}
            onBlur={() => setShowError({})}
            placeholder="О Вас"
            noValidate />
          {errors.about && <div className="form__error-indicator"/>}
          {errors.about && showError.about && <span className="form__error-message">{errors.about}</span>}

        </label>
    </PopupWithForm>);
};

EditProfilePopup.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onUpdateUser: PropTypes.func.isRequired,
};

export default EditProfilePopup;
