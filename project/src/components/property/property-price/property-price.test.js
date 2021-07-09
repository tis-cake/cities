import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { PropertyPrice } from './property-price';

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

describe('Component: PropertyPrice', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <PropertyPrice placeData={placeData}/>
      </Router>,
    );

    expect(screen.getByTestId('property-price')).toBeInTheDocument();
  });
});
