import { combineReducers } from 'redux';

import authReducer from '@/store/authentication/auth';

export default combineReducers({
  auth: authReducer,
});
