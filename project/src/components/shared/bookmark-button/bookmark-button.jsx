import React from 'react';
import PropTypes from 'prop-types';

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

function BookmarkButtonLayout(props) {
  const { isFavorite, blockClassName } = props;

  const bookmarkButtonActiveClass = isFavorite
    ? `${blockClassName}__bookmark-button--active`
    : '';

  const bookmarkButtonActiveValue = isFavorite
    ? 'To bookmarks'
    : 'In bookmarks';

  return (
    <button className={`${blockClassName}__bookmark-button ${bookmarkButtonActiveClass} button`} type="button">
      {props.children}

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

  isFavorite: PropTypes.bool.isRequired,
  blockClassName: PropTypes.string.isRequired,
};

BookmarkButtonIconNormal.propTypes = {
  blockClassName: PropTypes.string.isRequired,
};

BookmarkButtonIconBig.propTypes = {
  blockClassName: PropTypes.string.isRequired,
};

export { BookmarkButton };
