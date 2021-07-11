import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { FormRatingItem } from './form-rating-item';

describe('Component: FormRatingItem', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <FormRatingItem
          title={''}
          rating={''}
          sendingStatus
          indexReverse={1}
          blockClassName={'reviews'}
          handleRatingChange={() => {}}
        />
      </Router>,
    );

    expect(screen.getByTestId('form-rating-item')).toBeInTheDocument();
  });
});
