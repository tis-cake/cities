import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { BookmarkButtonIcon } from './bookmark-button-icon/bookmark-button-icon';

import { ActionServer } from '../../../server/actions';
import { propTypesID } from '../../../types';

const { BookmarkButtonIconNormal, BookmarkButtonIconBig } = BookmarkButtonIcon;

function BookmarkButtonWrapper(props) {
  const {
    id,
    isFavorite,
    blockClassName,
    children,
    extraHandlerFavoriteClick = false,
  } = props;

  const dispatch = useDispatch();

  const bookmarkButtonActiveClass = isFavorite
    ? `${blockClassName}__bookmark-button--active`
    : '';

  const bookmarkButtonActiveValue = isFavorite
    ? 'To bookmarks'
    : 'In bookmarks';

  const postFavorite = (ID, status) => {
    dispatch(ActionServer.postFavorite(ID, status));

    if (extraHandlerFavoriteClick) {
      extraHandlerFavoriteClick();
    }
  };

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
  blockClassName: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  id: propTypesID,

  children: PropTypes.element,
  extraHandlerFavoriteClick: PropTypes.func,
};

export { BookmarkButton };
