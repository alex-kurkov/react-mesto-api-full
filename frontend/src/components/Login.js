import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import validate from '../utils/validation';

const Login = ({ handleLogin, setHeaderAuthStatus }) => {
  const [errors, setErrors] = useState({
    email: 'Обязательное поле',
    password: 'Обязательное поле',
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
    handleLogin(values);
  };
  
  useEffect(() => {
    setHeaderAuthStatus('register');
  }, [])

  return (
    <section className="auth-section">
      <Form
        onSubmit={handleFormSubmit}
        belongsTo="section"
        title="Вход"
        formButtonText="Войти"
        anyInputInvalid={anyInputInvalid}
        authStatus={{
          text: 'Еще не зарегистрированы?',
          link: '/sign-up',
          linkText: 'Зарегистрироваться',
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

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  setHeaderAuthStatus: PropTypes.func,
};
export default Login;