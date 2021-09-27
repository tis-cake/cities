import React from 'react';

interface IBookmarkButtonIconProps {
  blockClassName: string,
}

const BookmarkButtonIconNormal: React.FC<IBookmarkButtonIconProps> = ({ blockClassName }) => {
  return (
    <svg className={`${blockClassName}__bookmark-icon`} width="18" height="19">
      <use xlinkHref="#icon-bookmark" />
    </svg>
  );
};

const BookmarkButtonIconBig: React.FC<IBookmarkButtonIconProps> = ({ blockClassName }) => {
  return (
    <svg className={`${blockClassName}__bookmark-icon`} width="31" height="33">
      <use xlinkHref="#icon-bookmark" />
    </svg>
  );
};

const BookmarkButtonIcon = { BookmarkButtonIconNormal, BookmarkButtonIconBig };

export { BookmarkButtonIcon };
