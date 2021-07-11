import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { PropertyInsides } from './property-insides';

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
  goods: [],
};

describe('Component: PropertyInsides', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <PropertyInsides placeData={placeData}/>
      </Router>,
    );

    expect(screen.getByTestId('property-insides')).toBeInTheDocument();
  });
});
