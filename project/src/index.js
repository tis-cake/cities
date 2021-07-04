import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { App } from './components/app/app';

import { store } from './store/store';
import { ActionServer } from './server/actions';

store.dispatch(ActionServer.checkAuthorization());
store.dispatch(ActionServer.fetchFavorites());
store.dispatch(ActionServer.fetchOffers());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
