import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { UserAuthorized } from './user-authorized/user-authorized';
import { UserNotAuthorized } from './user-not-authorized/user-not-authorized';

import { ActionServer } from '../../../server/actions';
import { AuthorizationStatus } from '../../../const';
import { Selector } from '../../../store/selectors';

function User() {
  const dispatch = useDispatch();
  const user = useSelector((state) => Selector.getUser(state));
  const authorizationStatus = useSelector((state) => Selector.getAuthorizationStatus(state));

  const logout = () => dispatch(ActionServer.logout());

  return (
    (authorizationStatus === AuthorizationStatus.AUTH)
      ? <UserAuthorized user={user} logout={logout} authorizationStatus={authorizationStatus}/>
      : <UserNotAuthorized/>
  );
}

export { User };
