import React from 'react';
import PropTypes from 'prop-types';

import { FormRatingItem } from '../form-rating-item/form-rating-item';

const ratingTitles = [
  'perfect',
  'good',
  'not bad',
  'badly',
  'terribly',
];

function FormRatingList(props) {
  const { blockClassName } = props;

  return (
    <div className={`${blockClassName}__rating-form form__rating`}>
      {ratingTitles.map((title, index, arr) => {
        const indexReverse = arr.length - index;

        return (
          <FormRatingItem
            key={title}
            title={title}
            indexReverse={indexReverse}
            {...props}
          />
        );
      })}
    </div>
  );
}

FormRatingList.propTypes = {
  blockClassName: PropTypes.string.isRequired,
};

export { FormRatingList };
