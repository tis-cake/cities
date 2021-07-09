import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { BookmarkButtonIcon } from './bookmark-button-icon';

const { BookmarkButtonIconNormal, BookmarkButtonIconBig } = BookmarkButtonIcon;

describe('Component: BookmarkButtonIcon', () => {
  it('should render correctly [BookmarkButtonIconNormal]', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <BookmarkButtonIconNormal blockClassName={''}/>
      </Router>,
    );

    expect(screen.getByTestId('bookmark-button-icon')).toBeInTheDocument();
  });

  it('should render correctly [BookmarkButtonIconBig]', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <BookmarkButtonIconBig blockClassName={''}/>
      </Router>,
    );

    expect(screen.getByTestId('bookmark-button-icon')).toBeInTheDocument();
  });
});
