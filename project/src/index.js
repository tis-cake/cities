import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app/app';

import { DATA_HOTELS, userData } from './mock/data';

ReactDOM.render(
  <React.StrictMode>
    <App
      placesList={DATA_HOTELS}
      userData={userData}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
