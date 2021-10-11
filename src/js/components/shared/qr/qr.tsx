import React from 'react';

import './qr.css';

const Qr: React.FC = () => {
  return (
    <div className="qr">
      <a className="qr__link" href="https://github.com/tis-cake" target="_blank" rel="noreferrer">
        <figure className="qr__img-wrap">
          <img className="qr__img" src="/img/qr-code.png" alt="QR-код, редирект на GitHub" width="40" height="40" />
          <figcaption className="qr__img-desc qr__img-desc--arrow">GitHub</figcaption>
        </figure>
      </a>
    </div>
  );
};

export { Qr };
