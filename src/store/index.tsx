import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import authReducer from '@/store/authentication/auth';

const store = createStore(
  authReducer,
  // (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  //   (window as any).__REDUX_DEVTOOLS_EXTENSION__()

  devToolsEnhancer({
    trace: true,
  })
);
export default store;
