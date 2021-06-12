import React from 'react';

import { LogoHeander } from '../logo/logo-header/logo-header';
import { Navigation } from '../navigation/navigation';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <LogoHeander />
          </div>
          <Navigation />
        </div>
      </div>
    </header>
  );
}

export { Header };
