import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { SortType, SortTypeValue, KeyCode } from '../../../const';

function Sort({ sortType, setSortType }) {
  const [select, setSelet] = useState(false);
  const selectRef = useRef(null);

  const selectActiveClass = (select)
    ? 'places__options--opened'
    : '';

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
    setSelet(false);

    document.removeEventListener('keydown', handleEscKeyPress);
    document.removeEventListener('click', handleSelectOutsideClick);
  };

  const openSelect = (evt) => {
    evt.stopPropagation();

    if (select) {
      closeSelect();
      return;
    }

    setSelet(true);
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
        className={`places__options places__options--custom ${selectActiveClass}`}
        ref={selectRef}
      >
        {Object.values(SortType).map((type) => (
          <li
            key={type}
            tabIndex="0"
            className={`places__option ${(sortType === type) ? 'places__option--active' : ''}`}
            onClick={(evt) => handleOptionClick(evt, type)}
          >
            {SortTypeValue[type]}
          </li>
        ))}
      </ul>
    </form>
  );
}

Sort.propTypes = {
  sortType: PropTypes.string.isRequired,
  setSortType: PropTypes.func.isRequired,
};


export { Sort };
