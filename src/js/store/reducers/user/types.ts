import { IUser } from '../../../interfaces';

type TUserReducer = {
  user: {} | IUser,
  authorizationStatus: string,
};

export { TUserReducer };
