import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app/app';

import { DATA_HOTELS } from './mock/data';

ReactDOM.render(
  <React.StrictMode>
    <App
      placesList={DATA_HOTELS}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
