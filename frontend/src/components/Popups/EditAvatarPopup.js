import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import validate from '../../utils/validation';
import PopupWithForm from './PopupWithForm';

const EditAvatarPopup = ({ onUpdateAvatar, isOpen, onClose }) => {
  const [errors, setErrors] = useState({
    avatar: '',
  });
  const [values, setValues] = useState({
    avatar: '',
  });
  const [anyInputInvalid, setAnyInputInvalid] = useState(true);
  const [showError, setShowError] = useState({});

  const checkFormValidity = () => {
    const any = Object
      .values(errors)
      .some((i) => i !== false);
    setAnyInputInvalid(any);
  };

  useEffect(() => {
    setErrors(validate(values, errors));
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
    onUpdateAvatar(values);
    setValues({
      avatar: '',
    });
    setErrors({
      avatar: '',
    });
  };

  return (
    <PopupWithForm
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleFormSubmit}
      anyInputInvalid={anyInputInvalid}>

        <label className="form__label">
          <input
            className={`form__input form__input_border_black form__input_color_${errors.avatar ? 'red' : 'black'}`}
            value={values.avatar}
            type="url" 
            name="avatar"
            placeholder="Ссылка на новый аватар"
            onChange={handleInputChange}
            onFocus={() => setShowError({ avatar: true })}
            onBlur={() => setShowError({})}
            noValidate />

          {errors.avatar && <div className="form__error-indicator"/>}
          {errors.avatar && showError.avatar && <span className="form__error-message">{errors.avatar}</span>}
        </label>

    </PopupWithForm>);
}

EditAvatarPopup.propTypes = {
  isOpen: PropTypes.bool,
  onClose:  PropTypes.func,
  onUpdateAvatar: PropTypes.func.isRequired,
};

export default EditAvatarPopup;
