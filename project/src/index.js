import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './store/store';
import { App } from './components/app/app';

import { userData } from './mock/data';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        // placesList={DATA_HOTELS}
        userData={userData}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
