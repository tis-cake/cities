import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app/app';

import { DATA_HOTELS, DataUser } from './mock/data';

ReactDOM.render(
  <React.StrictMode>
    <App
      placesList={DATA_HOTELS}
      userData={DataUser}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
