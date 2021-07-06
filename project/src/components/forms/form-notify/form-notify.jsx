import React from 'react';
import PropTypes from 'prop-types';

import './form-notify.css';

function FormNotify({ notify }) {
  const FormNotifyActiveClass = (notify)
    ? 'active'
    : '';

  return (
    <div className={`form__notify ${FormNotifyActiveClass}`}>
      <p className="form__notify-text">Заполните, пожалуйста, все поля!</p>
    </div>
  );
}

FormNotify.propTypes = {
  notify: PropTypes.bool.isRequired,
};

export { FormNotify };
