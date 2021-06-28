import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { UserAuthorized } from './user-authorized/user-authorized';
import { UserNotAuthorized } from './user-not-authorized/user-not-authorized';

import { AuthorizationStatus } from '../../../const';
import { ActionServer } from '../../../server/actions';

function UserBase(props) {
  const { authorizationStatus } = props;

  return (
    (authorizationStatus === AuthorizationStatus.AUTH)
      ? <UserAuthorized {...props}/>
      : <UserNotAuthorized/>
  );
}

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  logout() {
    dispatch(ActionServer.logout());
  },
});

const User = connect(mapStateToProps, mapDispatchToProps)(UserBase);

UserBase.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
};

export { UserBase, User };
