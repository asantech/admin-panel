import { combineReducers } from 'redux';

import authReducer from '@/store/authentication/auth';
import usersReducer from '@/store/users/users';

export default combineReducers({
  auth: authReducer,
  users: usersReducer,
});
