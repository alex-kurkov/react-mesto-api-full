import React from 'react';
import PropTypes from 'prop-types';
import Overlay from './Overlay';
import Form from '../Form';
import Modal from './Modal';
import { CloseButton } from '../Buttons/index';

const PopupWithForm = ({
  title,
  children,
  isOpen,
  onClose,
  onSubmit,
  anyInputInvalid,
}) => (
  <Overlay onClick={onClose} isOpen={isOpen}>
    <Modal isOpen={isOpen}>
      <CloseButton title="Закрыть" onClick={onClose} />
      <Form
        onSubmit={onSubmit}
        title={title}
        formButtonText="Сохранить"
        belongsTo="modal"
        anyInputInvalid={anyInputInvalid}>
          { children }
      </ Form>
    </Modal>
  </Overlay>
);

PopupWithForm.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.element,
  ]),
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  anyInputInvalid: PropTypes.bool.isRequired,
};

export default PopupWithForm;
