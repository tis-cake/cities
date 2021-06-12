import React from 'react';
import { Link } from 'react-router-dom';

import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';

import { AppRoute } from '../../../const';

import './page-not-found.css';

function PageNotFound() {
  return (
    <div className="page page--not-found">
      <Header />

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
