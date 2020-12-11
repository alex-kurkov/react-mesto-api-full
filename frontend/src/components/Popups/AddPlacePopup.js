import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import validate from '../../utils/validation';
import PopupWithForm from './PopupWithForm';

const AddPlacePopup = ({ onCardAdd, isOpen, onClose}) => {
  const [errors, setErrors] = useState({
    name: '',
    link: '',
  });
  const [values, setValues] = useState({
    name: '',
    link: '',
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
    e.preventDefault();
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onCardAdd(values);
  };

  return (
    <PopupWithForm
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleFormSubmit}
      anyInputInvalid={anyInputInvalid}>

        <label className="form__label">
          <input
            className={`form__input form__input_border_black form__input_color_${errors.name ? 'red' : 'black'}`}
            value={values.name}
            type="text" 
            name="name"
            placeholder="Название" 
            onChange={handleInputChange}
            onFocus={() => setShowError({ name: true })}
            onBlur={() => setShowError({})}
            noValidate />
          {errors.name && <div className="form__error-indicator"/>}
          {errors.name && showError.name && <span className="form__error-message">{errors.name}</span>}
        </label>

        <label className="form__label">
          <input
            className={`form__input form__input_border_black form__input_color_${errors.link ? 'red' : 'black'}`}
            value={values.link}
            error={errors.link}
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
            onChange={handleInputChange}
            onFocus={() => setShowError({ link: true })}
            onBlur={() => setShowError({})}
            noValidate />
          {errors.link && <div className="form__error-indicator"/>}
          {errors.link && showError.link && <span className="form__error-message">{errors.link}</span>}
        </label>

    </PopupWithForm>);
}

AddPlacePopup.propTypes = {
  isOpen: PropTypes.bool,
  onClose:  PropTypes.func,
  onCardAdd: PropTypes.func.isRequired,
};

export default AddPlacePopup;
