import React from 'react';
import { useDispatch } from 'react-redux';

import { BookmarkButtonIcon } from './bookmark-button-icon/bookmark-button-icon';

import { ActionServer } from '../../../server/actions';
import { TID } from '../../../types';

interface IBookmarkButtonProps {
  id: TID,
  isFavorite: boolean,
  blockClassName: string,
  extraHandlerFavoriteClick(): void,
}

const { BookmarkButtonIconNormal, BookmarkButtonIconBig } = BookmarkButtonIcon;

const BookmarkButtonWrapper: React.FC<IBookmarkButtonProps> = (props) => {
  const {
    id,
    isFavorite,
    blockClassName,
    children,
    extraHandlerFavoriteClick = false,
  } = props;

  const dispatch = useDispatch();

  const bookmarkButtonActiveClass: string = isFavorite
    ? `${blockClassName}__bookmark-button--active`
    : '';

  const bookmarkButtonActiveValue: string = isFavorite
    ? 'To bookmarks'
    : 'In bookmarks';

  const postFavorite = (ID: TID, status: boolean): void => {
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
};

const BookmarkButtonNormal: React.FC<IBookmarkButtonProps> = (props) => {
  return (
    <BookmarkButtonWrapper {...props}>
      <BookmarkButtonIconNormal {...props} />
    </BookmarkButtonWrapper>
  );
};

const BookmarkButtonBig: React.FC<IBookmarkButtonProps> = (props) => {
  return (
    <BookmarkButtonWrapper {...props}>
      <BookmarkButtonIconBig {...props} />
    </BookmarkButtonWrapper>
  );
};

const BookmarkButton = { BookmarkButtonNormal, BookmarkButtonBig };

export { BookmarkButton };
