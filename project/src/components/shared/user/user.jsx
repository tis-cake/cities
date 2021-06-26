import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { UserContext } from '../../../context';
import { AppRoute, defaultUserData } from '../../../const';

function UserAuthorized (props) {
  const { email, setUserDataContext } = props;

  function handleSignOutClick(evt) {
    evt.preventDefault();
    setUserDataContext(defaultUserData);
  }

  return (
    <React.Fragment>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES}>
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">{email}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <a
          className="header__nav-link"
          href="#"
          onClick={handleSignOutClick}
        >
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
  const [ userDataContext, setUserDataContext ] = useContext(UserContext);
  const { isAuthorized, email } = userDataContext;

  return (
    isAuthorized ? <UserAuthorized email={email} setUserDataContext={setUserDataContext} /> : <UserNotAuthorized />
  );
}

UserAuthorized.propTypes = {
  email: PropTypes.string.isRequired,
  setUserDataContext: PropTypes.func.isRequired,
};

export { User };
