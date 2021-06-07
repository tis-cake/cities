import React from 'react';
import { Link } from 'react-router-dom';

import { LogoHeander } from '../../shared/logo/logo';
import { Footer } from '../../shared/footer/footer';

import { AppRoute } from '../../../const';

import './page-not-found.css';

function PageNotFound() {
  return (
    <div className="page page--not-found">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <LogoHeander />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--not-found">
        <div className="container">
          <section className="not-found">
            <h1 className="not-found__title">404. Page not found</h1>
            <Link className="not-found__link" to={AppRoute.ROOT}>
              Вернуться на главную
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export { PageNotFound };
