import React from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../../../const';

function LogoFooter() {
  return (
    <Link className="footer__logo-link" to={AppRoute.ROOT} data-testid="logo-footer">
      <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
    </Link>
  );
}

export { LogoFooter };
