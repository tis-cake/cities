import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { FavoritesEmpty } from './favorites-empty';

describe('Component: FavoritesEmpty', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const { getByText } = render(
      <Router history={history}>
        <FavoritesEmpty/>
      </Router>,
    );

    const titleElement = getByText('Nothing yet saved.');
    const descElement = getByText('Save properties to narrow down search or plan your future trips.');

    expect(titleElement).toBeInTheDocument();
    expect(descElement).toBeInTheDocument();
  });
});
