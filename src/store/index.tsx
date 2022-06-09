import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../store/authentication/auth';

export default configureStore({
  reducer: authReducer,
});
