import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { CitiesEmpty } from './cities-empty';

const cityName = 'Paris';

describe('Component: CitiesEmpty', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const { getByText } = render(
      <Router history={history}>
        <CitiesEmpty cityName={cityName}/>
      </Router>,
    );

    const titleElement = getByText('No places to stay available');
    const descElement = getByText(`We could not find any property available at the moment in ${cityName}`);

    expect(titleElement).toBeInTheDocument();
    expect(descElement).toBeInTheDocument();
  });
});
