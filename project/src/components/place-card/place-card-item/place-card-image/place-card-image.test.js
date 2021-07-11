import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { PlaceCardImage } from './place-card-image';

const { PlaceCardImageNormal, PlaceCardImageSmall } = PlaceCardImage;

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

describe('Component: PlaceCardImage', () => {
  it('should render correctly [PlaceCardImageNormal]', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <PlaceCardImageNormal placeData={placeData}/>
      </Router>,
    );

    expect(screen.getByTestId('place-card-image')).toBeInTheDocument();
  });

  it('should render correctly [PlaceCardImageSmall]', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <PlaceCardImageSmall placeData={placeData}/>
      </Router>,
    );

    expect(screen.getByTestId('place-card-image')).toBeInTheDocument();
  });
});
