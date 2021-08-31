import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../../../const';
import { propTypesUser } from '../../../../types';

function UserAuthorized ({ user, logout }) {
  const { email, avatarUrl } = user;

  return (
    <React.Fragment>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES}>
          <div className="header__avatar-wrapper user__avatar-wrapper">
            <img className="header__avatar user__avatar" src={avatarUrl} width="20" height="20" alt="User avatar" />
          </div>
          <span className="header__user-name user__name">{email}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link
          className="header__nav-link"
          to={AppRoute.ROOT}
          onClick={logout}
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </React.Fragment>
  );
}

UserAuthorized.propTypes = {
  user: PropTypes.shape(propTypesUser),
  logout: PropTypes.func.isRequired,
};

export { UserAuthorized };
