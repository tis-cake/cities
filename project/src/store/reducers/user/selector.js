import { NameSpace } from '../root-reducer';

const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
const getUser = (state) => state[NameSpace.USER].user;

const SelectorUser = {
  getAuthorizationStatus,
  getUser,
};

export { SelectorUser };
