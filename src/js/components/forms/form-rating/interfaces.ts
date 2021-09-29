interface IFormRatingListProps {
  sendingStatus: boolean,
  rating: string,
  blockClassName: string,
  handleRatingChange: (evt: React.ChangeEvent<HTMLInputElement>) => void,
}

interface IFormRatingItemProps extends IFormRatingListProps {
  title: string,
  indexReverse: number,
}

export { IFormRatingListProps, IFormRatingItemProps  };
