import React from 'react';

import { formatRating, formatRatingRound } from '../../../utils/format';

interface IRatingProps {
  rating: number,
  blockClassName: string,
  isRound?: boolean,
}

const Rating: React.FC<IRatingProps> = (props) => {
  const {
    rating,
    isRound,
    children,
    blockClassName,
  } = props;

  const formattedRating: string = isRound
    ? formatRatingRound(rating)
    : formatRating(rating);

  return (
    <div className={`${blockClassName}__rating rating`}>
      <div className={`${blockClassName}__stars rating__stars`}>
        <span style={{ width: formattedRating }} />
        <span className="visually-hidden">Rating</span>
      </div>

      {children}
    </div>
  );
};

export { Rating };
