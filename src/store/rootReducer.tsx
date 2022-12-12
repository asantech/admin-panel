import { combineReducers } from 'redux';

import authReducer from '@/store/authentication/auth';
import usersReducer from '@/store/entities/users';
import resourcesReducer from '@/store/entities/resources';
import requestsReportsReducer from '@/store/reports/requests';

export default combineReducers({
  auth: authReducer,
  users: usersReducer,
  resources: resourcesReducer,
  requestsReports: requestsReportsReducer,
});
