import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { ReviewsItem } from './reviews-item';

const reviewData = {
  comment: '',
  date: new Date(),
  rating: 1,
  user: {
    avatarUrl: '',
    name: '',
  },
};

describe('Component: ReviewsItem', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <ReviewsItem reviewData={reviewData}/>
      </Router>,
    );

    expect(screen.getByTestId('reviews-item')).toBeInTheDocument();
  });
});
