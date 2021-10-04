interface ILocation {
  longitude: number,
  latitude: number,
  zoom: number,
}

interface ICitiesLocation {
  [key: string]: ILocation,
}

interface IPlaceCard {
  id: number,
  type: string,
  title: string,
  price: number,
  rating: number,
  isPremium: boolean,
  isFavorite: boolean,
  previewImage: string,
}

interface ICity {
  name: string,
  location: ILocation,
}

interface IPerson {
  id: number,
  name: string,
  avatarUrl: string,
  isPro?: boolean,
}

interface IUser extends IPerson {
  email: string,
}

interface IUserPost {
  login: string,
  password: string,
}

interface IOffer extends IPlaceCard {
  goods: string[],
  images: string[],
  bedrooms: number,
  maxAdults: number,
  description: string,

  city: ICity,
  host: IPerson,
  location: ILocation,
}

interface IOffersOnCities {
  [key: string]: IOffer[],
}

interface IReview {
  id: number,
  rating: number,
  comment: string,

  date: Date,
  user: IPerson,
}

interface IReviewPost {
  rating: string,
  comment: string,
}

export {
  ILocation,
  ICitiesLocation,

  IUser,
  IUserPost,
  IOffer,
  IOffersOnCities,
  IReview,
  IReviewPost,
};
