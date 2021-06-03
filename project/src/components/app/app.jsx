import React from 'react';
import { ScreenMain } from '../screen-main/screen-main';

function App(props) {
  // eslint-disable-next-line react/prop-types
  const { placesList } = props;

  return (
    <ScreenMain placesList={placesList} />
  );
}

export { App };
