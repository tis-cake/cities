import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { PropertyRating } from './property-rating';

const placeData = {
  id: 1,
  title: '',
  type: 'room',
  price: 10,
  rating: 10,
  bedrooms: 2,
  maxAdults: 2,
  previewImage: '',
  isFavorite: true,
  isPremium: true,
  description: '',
};

describe('Component: PropertyRating', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <PropertyRating placeData={placeData} blockClassName={'property'}/>
      </Router>,
    );

    expect(screen.getByTestId('property-rating')).toBeInTheDocument();
  });
});
