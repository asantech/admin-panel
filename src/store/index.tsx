import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '@/store/rootReducer';

export default configureStore({
  reducer: rootReducer,
});
