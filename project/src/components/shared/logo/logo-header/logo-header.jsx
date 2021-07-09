import React from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../../../const';

function LogoHeader() {
  return (
    <Link className="header__logo-link" to={AppRoute.ROOT} data-testid="logo-header">
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
    </Link>
  );
}

export { LogoHeader };
