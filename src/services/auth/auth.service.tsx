import { isString } from 'lodash';

import * as storageServices from '../storage/storage.service';

export const isLoggedIn = () => {
  return (
    storageServices.hasItem('token') &&
    isString(storageServices.getItem('token')) &&
    storageServices.hasItem('email') &&
    isString(storageServices.getItem('email'))
  );
};
