import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { ActionServer } from '../../../server/actions';
import { propTypesID } from '../../../types';

function BookmarkButtonIconNormal({ blockClassName }) {
  return (
    <svg className={`${blockClassName}__bookmark-icon`} width="18" height="19">
      <use xlinkHref="#icon-bookmark"></use>
    </svg>
  );
}

function BookmarkButtonIconBig({ blockClassName }) {
  return (
    <svg className={`${blockClassName}__bookmark-icon`} width="31" height="33">
      <use xlinkHref="#icon-bookmark"></use>
    </svg>
  );
}

function BookmarkButtonLayout({ children, id, isFavorite, blockClassName }) {
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
    <BookmarkButtonLayout {...props}>
      <BookmarkButtonIconNormal {...props}/>
    </BookmarkButtonLayout>
  );
}

function BookmarkButtonBig(props) {
  return (
    <BookmarkButtonLayout {...props}>
      <BookmarkButtonIconBig {...props}/>
    </BookmarkButtonLayout>
  );
}

const BookmarkButton = { BookmarkButtonNormal, BookmarkButtonBig };

BookmarkButtonLayout.propTypes = {
  children: PropTypes.element,

  blockClassName: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  id: propTypesID,
};

BookmarkButtonIconNormal.propTypes = {
  blockClassName: PropTypes.string.isRequired,
};

BookmarkButtonIconBig.propTypes = {
  blockClassName: PropTypes.string.isRequired,
};

export { BookmarkButton };
