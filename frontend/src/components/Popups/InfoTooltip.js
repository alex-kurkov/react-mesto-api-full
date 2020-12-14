import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Overlay from './Overlay';
import { CloseButton, FailureIcon, SuccessIcon } from '../Buttons/index';

import Modal from './Modal';

const InfoTooltip = ({
  isOpen,
  onClose,
  success,
  message,
}) => {
  useEffect(() => {
    window.addEventListener('keydown', onClose, {});
    return () => window.removeEventListener('keydown', onClose);
  }, []);

  return (
    <Overlay onClick={onClose} isOpen={isOpen}>
      <Modal isOpen={isOpen}>
        <CloseButton title="Закрыть" onClick={onClose} />
        {success
          ? (
          <div className="info-tooltip">
            <SuccessIcon />
            <span className="info-tooltip__title">{message}</span>
          </div>)
          : (
          <div className="info-tooltip">
            <FailureIcon />
          <span className="info-tooltip__title">{message}</span>
          </div>)
        }
    </Modal>
  </Overlay>
  );
};

InfoTooltip.propTypes = {
  message: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  success: PropTypes.bool,
};

export default InfoTooltip;
