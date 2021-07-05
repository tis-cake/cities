import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { BookmarkButtonIcon } from './bookmark-button-icon/bookmark-button-icon';

import { ActionServer } from '../../../server/actions';
import { propTypesID } from '../../../types';

const { BookmarkButtonIconNormal, BookmarkButtonIconBig } = BookmarkButtonIcon;

function BookmarkButtonWrapper({ children, id, isFavorite, blockClassName }) {
  const dispatch = useDispatch();

  const bookmarkButtonActiveClass = isFavorite
    ? `${blockClassName}__bookmark-button--active`
    : '';

  const bookmarkButtonActiveValue = isFavorite
    ? 'To bookmarks'
    : 'In bookmarks';

  const postFavorite = (ID, status) => dispatch(ActionServer.postFavorite(ID, status));

  return (
    <button
      className={`${blockClassName}__bookmark-button ${bookmarkButtonActiveClass} button`}
      type="button"
      onClick={() => postFavorite(id, !isFavorite)}
    >
      {children}

      <span className="visually-hidden">{bookmarkButtonActiveValue}</span>
    </button>
  );
}

function BookmarkButtonNormal(props) {
  return (
    <BookmarkButtonWrapper {...props}>
      <BookmarkButtonIconNormal {...props}/>
    </BookmarkButtonWrapper>
  );
}

function BookmarkButtonBig(props) {
  return (
    <BookmarkButtonWrapper {...props}>
      <BookmarkButtonIconBig {...props}/>
    </BookmarkButtonWrapper>
  );
}

const BookmarkButton = { BookmarkButtonNormal, BookmarkButtonBig };

BookmarkButtonWrapper.propTypes = {
  children: PropTypes.element,

  blockClassName: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  id: propTypesID,
};

export { BookmarkButton };
