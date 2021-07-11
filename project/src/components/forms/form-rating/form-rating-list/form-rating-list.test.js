import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { FormRatingList } from './form-rating-list';

describe('Component: FormRatingList', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <FormRatingList
          rating={''}
          blockClassName={'reviews'}
          handleRatingChange={() => {}}
        />
      </Router>,
    );

    expect(screen.getAllByTestId('form-rating-item')).toBeTruthy();
  });
});
