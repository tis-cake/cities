import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { TabsLocations } from './tabs-locations';

describe('Component: TabsLocations', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <TabsLocations cityCurrent={'Paris'} setCityName={() => {}}/>
      </Router>,
    );

    expect(screen.getByTestId('tabs-locations')).toBeInTheDocument();
  });
});
