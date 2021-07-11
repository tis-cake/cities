import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { PropertyHost } from './property-host';

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
  host: {
    avatarUrl: '',
    isPro: true,
    name: '',
  },
};

describe('Component: PropertyHost', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <PropertyHost placeData={placeData}/>
      </Router>,
    );

    expect(screen.getByText('Meet the host')).toBeInTheDocument();
  });
});
