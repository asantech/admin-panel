import { combineReducers } from 'redux';

import authReducer from '@/store/authentication/auth';
import usersReducer from '@/store/entities/users';
import resourcesReducer from '@/store/entities/resources';

export default combineReducers({
  auth: authReducer,
  users: usersReducer,
  resources: resourcesReducer,
});
