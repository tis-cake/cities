import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { PlaceCardMark } from './place-card-mark';

describe('Component: PlaceCardMark', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <PlaceCardMark />
      </Router>,
    );

    expect(screen.getByText('Premium')).toBeInTheDocument();
  });
});
