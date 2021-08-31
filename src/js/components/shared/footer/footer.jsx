import React from 'react';

import { LogoFooter } from '../logo/logo-footer/logo-footer';

function Footer() {
  return (
    <footer className="footer container" data-testid="footer">
      <LogoFooter />
    </footer>
  );
}

export { Footer };
