import React from 'react';

import { NotifyMessage } from '../../../const';

import './form-notify.css';

interface IFormNotifyProps {
  isNotify: boolean,
  message: string,
}

const FormNotify: React.FC<IFormNotifyProps> = ({ isNotify, message }) => {
  const messageValue: string = (message || NotifyMessage.DEFAULT);

  const formNotifyActiveClass: string = isNotify ? 'active' : '';

  return (
    <div className={`form__notify ${formNotifyActiveClass}`}>
      <strong
        className="form__notify-text"
        aria-hidden={!isNotify}
      >
        {messageValue}
      </strong>
    </div>
  );
};

export { FormNotify };
