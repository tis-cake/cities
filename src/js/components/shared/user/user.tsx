import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { UserAuthorized } from './user-authorized/user-authorized';
import { UserNotAuthorized } from './user-not-authorized/user-not-authorized';

import { ActionServer } from '../../../server/actions';
import { AuthorizationStatus } from '../../../const';
import { Selector } from '../../../store/selectors';
import { IUser } from '../../../interfaces';

const User: React.FC = () => {
  const dispatch = useDispatch();

  const user: IUser = useSelector((state) => Selector.getUser(state));
  const authorizationStatus: string = useSelector((state) => Selector.getAuthorizationStatus(state));

  const logout = () => dispatch(ActionServer.logout());

  return (
    (authorizationStatus === AuthorizationStatus.AUTH)
      ? <UserAuthorized user={user} logout={logout} />
      : <UserNotAuthorized />
  );
};

export { User };
