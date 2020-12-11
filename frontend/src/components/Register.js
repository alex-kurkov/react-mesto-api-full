import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import validate from '../utils/validation';

const Register = ({ handleRegister, setHeaderAuthStatus }) => {
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const [values, setValues] = useState({
    email: '',
    password: '',
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
    handleRegister(values);
  };
  
  useEffect(() => {
    setHeaderAuthStatus('login');
  }, [])

  return (
    <section className="auth-section">
      <Form
        onSubmit={handleFormSubmit}
        belongsTo="section"
        title="Регистрация"
        anyInputInvalid={anyInputInvalid}
        formButtonText="Зарегистрироваться"
        authStatus={{
          text: 'Уже зарегистрированы?',
          link: '/sign-in',
          linkText: 'Войти',
        }}>

        <label className="form__label">
          <input
            className={`form__input form__input_border_white form__input_color_${errors.email ? 'red' : 'white'}`}
            value={values.email}
            onChange={handleInputChange}
            onFocus={() => setShowError({ email: true })}
            onBlur={() => setShowError({})}
            type="email"
            placeholder="Почта"
            name="email"
            noValidate />
          {errors.email && <div className="form__error-indicator"/>}
          {errors.email && showError.email && <span className="form__error-message">{errors.email}</span>}
        </label>
        <label className="form__label">
          <input
            className={`form__input form__input_border_white form__input_color_${errors.password ? 'red' : 'white'}`}
            value={values.password}
            onChange={handleInputChange}
            onFocus={() => setShowError({ password: true })}
            onBlur={() => setShowError({})}
            type="password"
            name="password"
            placeholder="Пароль"
            noValidate />
          {errors.password && <div className="form__error-indicator"/>}
          {errors.password && showError.password && <span className="form__error-message">{errors.password}</span>}
        </label>
      </Form>
    </section>
)};

Register.propTypes = {
  handleRegister: PropTypes.func.isRequired,
  setHeaderAuthStatus: PropTypes.func,
};
export default Register;