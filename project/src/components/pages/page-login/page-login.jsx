import React from 'react';

import { Header } from '../../shared/header/header';
import { FormLogin } from '../../forms/form-login/form-login';

import { withFormNotify } from '../../../hoks/with-form-notify/with-form-notify';

const FormLoginWrapped = withFormNotify(FormLogin);

function PageLogin() {
  return (
    <div className="page page--gray page--login">
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>

            <FormLoginWrapped />
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

export { PageLogin };
