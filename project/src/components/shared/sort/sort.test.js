import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { Sort } from './sort';

describe('Component: Sort', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <Sort
          sortType={''}
          setSortType={() => {}}
        />
      </Router>,
    );

    expect(screen.getByTestId('sort')).toBeInTheDocument();
  });
});
