import React, { useState } from 'react';

import { FormNotify } from '../../components/forms/form-notify/form-notify';

import { TShowNotify, TFormNotifyInjectedProps } from '../../types';

const TIMEOUT: number = 5000;

const withFormNotify = (Component: React.ComponentType<TFormNotifyInjectedProps>) => {
  const FormNotifyWrapper = (props): JSX.Element => {
    const [isNotify, setNotify] = useState(false);
    const [message, setMessage] = useState('');

    const showNotify: TShowNotify = (notifyMessage) => {
      if (isNotify) {
        return;
      }

      if (notifyMessage) {
        setMessage(notifyMessage);
      }

      setNotify(true);

      setTimeout(() => {
        setNotify(false);
      }, TIMEOUT);
    };

    return (
      <Component
        {...props}
        showNotify={showNotify}
        renderFormNotify={() => <FormNotify isNotify={isNotify} message={message} />}
      />
    );
  };

  return FormNotifyWrapper;
};

export { withFormNotify };
