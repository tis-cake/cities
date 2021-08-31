import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { ActionServer } from '../../../server/actions';
import { NotifyMessage } from '../../../const';
import { propTypesNotify } from '../../../types';

const patternWithoutOnlySpaces = /[0-9a-zA-Z]/;

function FormLogin({ showNotify, renderFormNotify }) {
  const dispatch = useDispatch();
  const loginRef = useRef();
  const passwordRef = useRef();

  const FormNotify = renderFormNotify();

  const onSubmit = (authorizationData) => dispatch(ActionServer.login(authorizationData));

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    const isLoginValidity = (loginRef.current.textLength !== 0);
    const isPasswordValidityLength = (passwordRef.current.textLength !== 0);
    const isPasswordValidityPattern = (patternWithoutOnlySpaces.test(passwordRef.current.value));
    const isPasswordValidity = (isPasswordValidityLength && isPasswordValidityPattern);

    if (isLoginValidity && isPasswordValidity) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    } else {
      if (isLoginValidity && !isPasswordValidityPattern) {
        showNotify(NotifyMessage.PASSWORD_INCORRECT_SPACES);
      } else {
        showNotify(NotifyMessage.DEFAULT);
      }
    }
  };

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

      {FormNotify}
    </form>
  );
}

FormLogin.propTypes = {
  ...propTypesNotify,
};

export { FormLogin };
