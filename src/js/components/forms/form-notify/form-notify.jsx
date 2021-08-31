import React from 'react';
import PropTypes from 'prop-types';

import './form-notify.css';
import { NotifyMessage } from '../../../const';

function FormNotify({ notify, message }) {
  const messageValue = (message || NotifyMessage.DEFAULT);

  const formNotifyActiveClass = (notify)
    ? 'active'
    : '';

  return (
    <div className={`form__notify ${formNotifyActiveClass}`}>
      <p className="form__notify-text">{messageValue}</p>
    </div>
  );
}

FormNotify.propTypes = {
  notify: PropTypes.bool.isRequired,
  message: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
};

export { FormNotify };
