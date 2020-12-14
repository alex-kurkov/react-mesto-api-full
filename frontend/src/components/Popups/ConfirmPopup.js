import React from 'react';
import PropTypes from 'prop-types';
import Overlay from './Overlay';
import { CloseButton } from '../Buttons/index';
import Form from '../Form';
import Modal from './Modal';

const ConfirmPopup = ({
  isOpen,
  onClose,
  onSubmit,
}) => (
  <Overlay onClick={onClose} isOpen={isOpen}>
    <Modal isOpen={isOpen}>
      <CloseButton title="Закрыть" onClick={onClose} />
      <Form
        onSubmit={onSubmit}
        title="Вы уверены?"
        formButtonText="Да"
        belongsTo="modal"
        anyInputInvalid={false} />
    </Modal>
  </Overlay>
);

ConfirmPopup.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
};

export default ConfirmPopup;
