import React from 'react';

import { FormRatingItem } from '../form-rating-item/form-rating-item';

import { IFormRatingListProps } from '../interfaces';

const ratingTitles: string[] = [
  'perfect',
  'good',
  'not bad',
  'badly',
  'terribly',
];

const FormRatingList: React.FC<IFormRatingListProps> = (props) => {
  const { blockClassName } = props;

  return (
    <div className={`${blockClassName}__rating-form form__rating`}>
      {ratingTitles.map((title, index, arr) => {
        const indexReverse: number = arr.length - index;

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
};

export { FormRatingList };
