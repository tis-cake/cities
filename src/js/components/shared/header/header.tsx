import React from 'react';

import { Qr } from '../qr/qr';
import { LogoHeader } from '../logo/logo-header/logo-header';
import { Navigation } from '../navigation/navigation';

const Header: React.FC = () => {
  return (
    <>
      <Qr />
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <LogoHeader />
            </div>
            <Navigation />
          </div>
        </div>
      </header>
    </>
  );
};

export { Header };
