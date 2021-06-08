import React from 'react';

import { User } from '../user/user';

function Navigation() {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <User />
      </ul>
    </nav>
  );
}

export { Navigation };
