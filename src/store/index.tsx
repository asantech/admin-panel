import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from '@/store/rootReducer';
import api from './middlewares/api';

export default configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), api],
});
