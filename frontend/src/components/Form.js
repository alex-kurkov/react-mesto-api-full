import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Form = ({
  onSubmit, title, authStatus, formButtonText, anyInputInvalid, children, belongsTo,
}) => (
  <form className={`form form_belongs-to_${belongsTo}`} onSubmit={onSubmit}>

    <fieldset className={`form__fieldset_belongs-to_${belongsTo}`}>
      <legend className={`form__title form__title__belongs-to_${belongsTo}`}>{title}</legend>
      {children}
    </fieldset>

    <div>
      <button className={`form__submit-btn ${anyInputInvalid && 'form__submit-btn_disabled'} form__submit-btn_belongs-to_${belongsTo} `}>
        {formButtonText}
      </button>
      { authStatus && (<p className="form__auth-status">{authStatus.text}
        <Link className="form__link" to={authStatus.link}>{authStatus.linkText}</Link>
      </p>)}
    </div>
  </form>
);

Form.propTypes = {
  title: PropTypes.string,
  authStatus: PropTypes.object,
  formButtonText: PropTypes.string,
  anyInputInvalid: PropTypes.bool,
  belongsTo: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node,
};
export default Form;
