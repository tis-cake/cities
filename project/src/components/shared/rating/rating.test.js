import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { Rating } from './rating';

describe('Component: Rating', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <Rating
          isRound
          rating={1}
          blockClassName={''}
        />
      </Router>,
    );

    expect(screen.getByTestId('rating')).toBeInTheDocument();
  });
});
