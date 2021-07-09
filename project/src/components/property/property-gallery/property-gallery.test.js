import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { PropertyGallery } from './property-gallery';

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
  images: [],
};

describe('Component: PropertyGallery', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <PropertyGallery placeData={placeData}/>
      </Router>,
    );

    expect(screen.getByTestId('property-gallery')).toBeInTheDocument();
  });
});
