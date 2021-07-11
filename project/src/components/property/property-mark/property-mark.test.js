import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { PropertyMark } from './property-mark';

describe('Component: PropertyMark', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <PropertyMark />
      </Router>,
    );

    expect(screen.getByText('Premium')).toBeInTheDocument();
  });
});
