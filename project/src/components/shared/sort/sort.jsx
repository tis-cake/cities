// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { SortType, SortTypeValue, KeyCode } from '../../../const';

function Sort({ sortType, setSortType }) {
  const selectRef = useRef(null);

  const optionOpenClass = 'places__options--opened';

  const handleOptionClick = (evt, sortTypeCurrent) => {
    setSortType(sortTypeCurrent);

    closeSelect();
  };

  const handleEscKeyPress = (evt) => {
    if (evt.keyCode === KeyCode.ESC) {
      closeSelect();
    }
  };

  const handleSelectOutsideClick = (evt) => {
    if (evt.target !== selectRef.current) {
      closeSelect();
    }
  };

  const closeSelect = () => {
    selectRef.current.classList.remove(optionOpenClass);

    document.removeEventListener('keydown', handleEscKeyPress);
    document.removeEventListener('click', handleSelectOutsideClick);
  };

  const openSelect = (evt) => {
    evt.stopPropagation();

    if (selectRef.current.classList.contains(optionOpenClass)) {
      closeSelect();
      return;
    }

    selectRef.current.classList.add(optionOpenClass);
    document.addEventListener('keydown', handleEscKeyPress);
    document.addEventListener('click', handleSelectOutsideClick);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={(evt) => openSelect(evt)}
      >
        {SortTypeValue[sortType]}

        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>

      <ul
        className="places__options places__options--custom"
        ref={selectRef}
      >
        <li
          className={`places__option ${(sortType === SortType.DEFAULT) ? 'places__option--active' : ''}`}
          tabIndex="0"
          onClick={(evt) => handleOptionClick(evt, SortType.DEFAULT)}
        >
          {SortTypeValue[SortType.DEFAULT]}
        </li>

        <li
          className={`places__option ${(sortType === SortType.PRICE_LOW_TO_HIGH) ? 'places__option--active' : ''}`}
          tabIndex="0"
          onClick={(evt) => handleOptionClick(evt, SortType.PRICE_LOW_TO_HIGH)}
        >
          {SortTypeValue[SortType.PRICE_LOW_TO_HIGH]}
        </li>

        <li
          className={`places__option ${(sortType === SortType.PRICE_HIGH_TO_LOW) ? 'places__option--active' : ''}`}
          tabIndex="0"
          onClick={(evt) => handleOptionClick(evt, SortType.PRICE_HIGH_TO_LOW)}
        >
          {SortTypeValue[SortType.PRICE_HIGH_TO_LOW]}
        </li>

        <li
          className={`places__option ${(sortType === SortType.RATING_HIGH_TO_LOW) ? 'places__option--active' : ''}`}
          tabIndex="0"
          onClick={(evt) => handleOptionClick(evt, SortType.RATING_HIGH_TO_LOW)}
        >
          {SortTypeValue[SortType.RATING_HIGH_TO_LOW]}
        </li>

        <li
          className={`places__option ${(sortType === SortType.RATING_LOW_TO_HIGH) ? 'places__option--active' : ''}`}
          tabIndex="0"
          onClick={(evt) => handleOptionClick(evt, SortType.RATING_LOW_TO_HIGH)}
        >
          {SortTypeValue[SortType.RATING_LOW_TO_HIGH]}
        </li>
      </ul>
    </form>
  );
}

Sort.propTypes = {
  sortType: PropTypes.string.isRequired,
  setSortType: PropTypes.func.isRequired,
};


export { Sort };
