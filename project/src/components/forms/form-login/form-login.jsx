import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ActionServer } from '../../../server/actions';

function FormLoginBase({ onSubmit }) {
  const loginRef = useRef();
  const passwordRef = useRef();

  function handleFormSubmit(evt) {
    evt.preventDefault();

    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    });
  }

  return (
    <form
      className="login__form form"
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input
          className="login__input form__input"
          type="email"
          name="email"
          placeholder="Email"
          required=""
          ref={loginRef}
        />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input
          className="login__input form__input"
          type="password"
          name="password"
          placeholder="Password"
          required=""
          ref={passwordRef}
        />
      </div>
      <button className="login__submit form__submit button" type="submit">Sign in</button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authorizationData) {
    dispatch(ActionServer.login(authorizationData));
  },
});

const FormLogin = connect(null, mapDispatchToProps)(FormLoginBase);

FormLoginBase.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export { FormLogin };
