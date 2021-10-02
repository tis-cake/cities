import { TDefaultRootState, NameSpace } from '../root-reducer';
import { IUser } from '../../../interfaces';

const getAuthorizationStatus = (state: TDefaultRootState): string => state[NameSpace.USER].authorizationStatus;
const getUser = (state: TDefaultRootState): {} | IUser => state[NameSpace.USER].user;

const SelectorUser = {
  getAuthorizationStatus,
  getUser,
};

export { SelectorUser };
