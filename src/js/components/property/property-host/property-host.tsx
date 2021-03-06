import React from 'react';

import { IPropertyComponentsProps } from '../interfaces';

const PropertyHost: React.FC<IPropertyComponentsProps> = ({ placeData }) => {
  const {
    description,
    host: {
      avatarUrl,
      isPro,
      name,
    },
  } = placeData;

  const avatarWrapperProClass: string = isPro
    ? 'property__avatar-wrapper--pro'
    : '';

  const avatarUrlCurrentPath: string = `/${avatarUrl}`;

  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className={`property__avatar-wrapper ${avatarWrapperProClass} user__avatar-wrapper`}>
          <img className="property__avatar user__avatar" src={avatarUrlCurrentPath} width="74" height="74" alt="Host avatar" />
        </div>
        <span className="property__user-name">
          {name}
        </span>
        <span className="property__user-status">
          {(isPro && 'Pro')}
        </span>
      </div>
      <div className="property__description">
        <p className="property__text">
          {description}
        </p>
      </div>
    </div>
  );
};

export { PropertyHost };
