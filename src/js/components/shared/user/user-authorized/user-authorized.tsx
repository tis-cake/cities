import React from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../../../const';
import { IUser } from '../../../../interfaces';

interface IUserAuthorizedProps {
  user: IUser,
  logout(): void,
}

const UserAuthorized: React.FC<IUserAuthorizedProps> = ({ user, logout }) => {
  const { email, avatarUrl } = user;

  return (
    <>
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
    </>
  );
};

export { UserAuthorized };
