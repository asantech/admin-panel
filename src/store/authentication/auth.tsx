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
      ...signUpConstants.baseAPIConfig,
      data: params.data,
      onStart: () => {
        dispatch(authSlice.actions.authReqStart());
      },
      onSuccess: () => {
        dispatch(authSlice.actions.registerUserData());
        storageServices.setItem('userIsAuthenticated', true);
        toast.success(
          'You have been registered successfully to the app, you can now log in',
          {
            position: toast.POSITION.BOTTOM_RIGHT,
          }
        );
        if ('afterSuccess' in params) params.afterSuccess();
      },
      onErr: (err: any) => {
        toast.error(err.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      },
      onEnd: () => {
        dispatch(authSlice.actions.authReqEnd());
      },
    });
  };
};

export const signIn: any = (params: any) => {
  return async (dispatch: any) => {
    await apiServices.createAPICall({
      ...signInConstants.baseAPIConfig,
      data: params.data,
      onStart: () => {
        dispatch(authSlice.actions.authReqStart());
      },
      onSuccess: (resData: any) => {
        dispatch(authSlice.actions.signIn(resData));
        storageServices.setItem('userIsLoggedIn', true);
        toast.success('You are logged in', {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        if ('afterSuccess' in params) params.afterSuccess();
      },
      onErr: (err: any) => {
        toast.error(err.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      },
      onEnd: () => {
        dispatch(authSlice.actions.authReqEnd());
      },
    });
  };
};

export const authActions = authSlice.actions;

export default authSlice.reducer;
