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

const BookmarkButtonIcon = { BookmarkButtonIconNormal, BookmarkButtonIconBig };

BookmarkButtonIconNormal.propTypes = {
  blockClassName: PropTypes.string.isRequired,
};

BookmarkButtonIconBig.propTypes = {
  blockClassName: PropTypes.string.isRequired,
};

export { BookmarkButtonIcon };
