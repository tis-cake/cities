import React from 'react';

import { LogoLoader } from '../../shared/logo/logo-loader/logo-loader';

import './page-loading.css';

const PageLoading: React.FC = () => {
  return (
    <div className="loader">
      <LogoLoader />

      <div className="loader__inner">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};

export { PageLoading };
