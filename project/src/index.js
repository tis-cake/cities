import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { App } from './components/app/app';

import { store } from './store/store';
import { checkAuthorization, fetchOffersList } from './store/actions-api';

import { userData } from './mock/data';

store.dispatch(checkAuthorization());
store.dispatch(fetchOffersList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App userData={userData}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
