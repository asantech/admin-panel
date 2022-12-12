import { isString } from 'lodash';

import * as storageServices from '../Storage/Storage.service';

export const isLoggedIn = () => {
  return (
    storageServices.hasItem('token') &&
    isString(storageServices.getItem('token')) &&
    storageServices.hasItem('email') &&
    isString(storageServices.getItem('email'))
  );
};
