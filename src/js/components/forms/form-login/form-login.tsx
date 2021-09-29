import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { ActionServer } from '../../../server/actions';
import { NotifyMessage } from '../../../const';
import { IUserPost } from '../../../interfaces';
import { TFormNotifyInjectedProps } from '../../../types';

const patternWithoutOnlySpaces: RegExp = /[0-9a-zA-Z]/;

const FormLogin: React.FC<TFormNotifyInjectedProps> = ({ showNotify, renderFormNotify }) => {
  const dispatch = useDispatch();
  const loginRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();

  const FormNotify = renderFormNotify();

  const onSubmit = (authorizationData: IUserPost) => dispatch(ActionServer.login(authorizationData));

  const handleFormSubmit = (evt: React.FormEvent): void => {
    evt.preventDefault();

    const isLoginValidity: boolean = (loginRef.current.value.length !== 0);
    const isPasswordValidityLength: boolean = (passwordRef.current.value.length !== 0);
    const isPasswordValidityPattern: boolean = (patternWithoutOnlySpaces.test(passwordRef.current.value));
    const isPasswordValidity: boolean = (isPasswordValidityLength && isPasswordValidityPattern);

    if (isLoginValidity && isPasswordValidity) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });

      return;
    }

    if (isLoginValidity && !isPasswordValidityPattern) {
      showNotify(NotifyMessage.PASSWORD_INCORRECT_SPACES);
    } else {
      showNotify(NotifyMessage.DEFAULT);
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
        <label className="visually-hidden" htmlFor="login-email-field">E-mail</label>
        <input
          className="login__input form__input"
          id="login-email-field"
          type="email"
          name="email"
          placeholder="Email"
          required
          ref={loginRef}
        />
      </div>

      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden" htmlFor="login-password-field">Password</label>
        <input
          className="login__input form__input"
          id="login-password-field"
          type="password"
          name="password"
          placeholder="Password"
          required
          ref={passwordRef}
        />
      </div>

      <button className="login__submit form__submit button" type="submit">Sign in</button>

      {FormNotify}
    </form>
  );
};

export { FormLogin };
