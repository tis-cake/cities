import React, { useState } from 'react';

import { FormNotify } from '../../components/forms/form-notify/form-notify';

const withFormNotify = (Component) => {
  function FormNotifyWrapper(props) {
    const [notify, setNotify] = useState(false);
    const [message, setMessage] = useState(false);

    const showNotify = (notifyMessage) => {
      if (notify) {
        return;
      }

      if (notifyMessage) {
        setMessage(notifyMessage);
      }

      setNotify(true);

      setTimeout(() => {
        setNotify(false);
      }, 5000);
    };

    return (
      <Component
        {...props}
        showNotify={showNotify}
        renderFormNotify={() => <FormNotify notify={notify} message={message}/>}
      />
    );
  }

  return FormNotifyWrapper;
};

export { withFormNotify };

