import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { LogoHeader } from './logo-header';

describe('Component: LogoHeader', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <LogoHeader />
      </Router>,
    );

    expect(screen.getByTestId('logo-header')).toBeInTheDocument();
  });
});
