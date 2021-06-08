import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AppRoute } from '../../../const';
import { UserContext } from '../../../context';


function UserAuthorized (props) {
  const { mail } = props;

  return (
    <React.Fragment>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES}>
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">{mail}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <a className="header__nav-link" href="#">
          <span className="header__signout">Sign out</span>
        </a>
      </li>
    </React.Fragment>
  );
}

function UserNotAuthorized () {
  return (
    <li className="header__nav-item user">
      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.LOGIN}>
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        <span className="header__login">Sign in</span>
      </Link>
    </li>
  );
}

function User() {
  const { isAuthorized, mail } = useContext(UserContext);

  return (
    isAuthorized ? <UserAuthorized mail={mail} /> : <UserNotAuthorized />
  );
}

UserAuthorized.propTypes = {
  mail: PropTypes.string.isRequired,
};

export { User };
