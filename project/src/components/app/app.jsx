import React from 'react';
import PropTypes from 'prop-types';
import { ScreenMain } from '../screen-main/screen-main';

function App(props) {
  const { placesList } = props;

  return (
    <ScreenMain placesList={placesList} />
  );
}

App.propTypes = {
  placesList: PropTypes.array,
};

export { App };
