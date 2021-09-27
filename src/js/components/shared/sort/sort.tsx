import React, { useState, useRef } from 'react';

import { SortType, SortTypeValue, KeyCode } from '../../../const';
import { ISetSortType } from '../../../interfaces';

interface ISortProps {
  sortType: string,
  setSortType: ISetSortType,
}

const Sort: React.FC<ISortProps> = ({ sortType, setSortType }) => {
  const [select, setSelet] = useState(false);
  const selectRef = useRef(null);

  const selectActiveClass = (select)
    ? 'places__options--opened'
    : '';

  const handleOptionClick = (sortTypeCurrent) => {
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

  function closeSelect() {
    setSelet(false);

    document.removeEventListener('keydown', handleEscKeyPress);
    document.removeEventListener('click', handleSelectOutsideClick);
  }

  function openSelect(evt) {
    evt.stopPropagation();

    if (select) {
      closeSelect();
      return;
    }

    setSelet(true);
    document.addEventListener('keydown', handleEscKeyPress);
    document.addEventListener('click', handleSelectOutsideClick);
  }

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <button
        className="places__sorting-type"
        type="button"
        onClick={(evt) => openSelect(evt)}
      >
        {SortTypeValue[sortType]}

        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </button>

      <ul
        className={`places__options places__options--custom ${selectActiveClass}`}
        ref={selectRef}
      >
        {Object.values(SortType).map((type) => (
          <li
            key={type}
            className="places__option"
          >
            <button
              className={`places__option-btn ${(sortType === type) ? 'places__option-btn--active' : ''}`}
              type="button"
              onClick={() => handleOptionClick(type)}
            >
              {SortTypeValue[type]}
            </button>
          </li>
        ))}
      </ul>
    </form>
  );
};

export { Sort };
