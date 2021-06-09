import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Header } from '../../shared/header/header';

import { propTypesUser } from '../../../types';

function PageLogin(props) {
  const { userDataContext, setUserDataContext } = props;
  const [ formState, setFormState ] = useState();

  function handleInputChange(evt) {
    const { name, value } = evt.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  }

  function handleFormSubmit(evt) {
    evt.preventDefault();

    /*
      !NB WIP:
      Отсутствует валидация.
    */

    setUserDataContext({
      ...userDataContext,
      isAuthorized: true,
      email: formState.email,
    });
  }

  return (
    <div className="page page--gray page--login">
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

PageLogin.propTypes = {
  userDataContext: PropTypes.shape(propTypesUser),
  setUserDataContext: PropTypes.func.isRequired,
};

export { PageLogin };
