import React, { useState, useContext } from 'react';

import { UserContext } from '../../../context';

function FormLogin() {
  const [ userDataContext, setUserDataContext ] = useContext(UserContext);
  const [ form, setForm ] = useState({});

  function handleInputChange(evt) {
    const { name, value } = evt.target;

    setForm({
      ...form,
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
      email: form.email,
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
  );
}

export { FormLogin };
