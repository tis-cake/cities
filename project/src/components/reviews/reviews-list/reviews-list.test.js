import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { ReviewsList } from './reviews-list';

const reviewsList = [{
  id: 1,
  comment: '',
  date: new Date(),
  rating: 1,
  user: {
    avatarUrl: '',
    name: '',
  },
}];

describe('Component: ReviewsList', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <ReviewsList reviewsList={reviewsList}/>
      </Router>,
    );

    expect(screen.getAllByTestId('review-list')).toBeTruthy();
  });
});
