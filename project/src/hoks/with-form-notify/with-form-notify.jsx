import React, { useState } from 'react';

import { FormNotify } from '../../components/forms/form-notify/form-notify';

const withFormNotify = (Component) => {
  function FormNotifyWrapper(props) {
    const [notify, setNotify] = useState(false);

    const showNotify = () => {
      if (notify) {
        return;
      }

      setNotify(true);
      setTimeout(() => setNotify(false), 5000);
    };

    return (
      <Component
        {...props}
        showNotify={showNotify}
        renderFormNotify={() => <FormNotify notify={notify}/>}
      />
    );
  }

  return FormNotifyWrapper;
};

export { withFormNotify };

