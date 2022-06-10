import { createSlice } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';

import * as signUpConstants from '@/utils/constants/signUp.constants';
import * as signInConstants from '@/utils/constants/signIn.constants';

import * as apiServices from '@/services/api/api.service';
import * as storageServices from '@/services/storage/storage.service';

type InitialState = {
  userData: any;
  loading: boolean;
};

const initialState: InitialState = {
  userData: {},
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authReqStart: authState => {
      authState.loading = true;
    },
    registerUserData: authState => {
      // authState.loading = false; // نیاز به این مورد بررسی شود
    },
    signIn: (
      authState,
      action: {
        type: string;
        payload: { userData: { id: number; token: string } };
      }
    ) => {
      authState.userData = action.payload;
    },
    signOut: authState => {},
    authReqEnd: authState => {
      authState.loading = false;
    },
  },
});

export const signUp: any = (params: any) => {
  return async (dispatch: any) => {
    await apiServices.createAPICall({
      ...signInConstants.apiConfig,
      ...params,
    });
    dispatch(authSlice.actions.registerUserData());
    storageServices.setItem('userIsAuthenticated', true);
    toast.success(
      'You have been registered successfully to the app, you can now sign in',
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  };
};

export const signIn: any = (params: any) => {
  return async (dispatch: any) => {
    const resData = await apiServices.createAPICall({
      ...signUpConstants.apiConfig,
      ...params,
    });
    dispatch(authSlice.actions.signIn(resData));
    storageServices.setItem('userIsLoggedIn', true);
    toast.success(
      'You have been registered successfully to the app, you can now sign in',
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  };
};

export const authActions = authSlice.actions;

export default authSlice.reducer;
