import React from 'react';

import './page-loading.css';

function PageLoading() {
  return (
    <div className='loader'>
      <img className="loader__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
      <div className='loader__inner'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export { PageLoading };
