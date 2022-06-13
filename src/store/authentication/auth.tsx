import { createSlice } from '@reduxjs/toolkit';

import { has } from 'lodash';

import { toast } from 'react-toastify';

import * as signUpConstants from '@/utils/constants/signUp.constants';
import * as signInConstants from '@/utils/constants/signIn.constants';

import * as apiServices from '@/services/api/api.service';
import * as storageServices from '@/services/storage/storage.service';

type InitialState = {
  userData: any;
  loading: boolean;
  token: null | string;
};

const initialState: InitialState = {
  userData: {},
  loading: false,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authReqStart: authState => {
      authState.loading = true;
    },
    registerUserData: authState => {
      // بعدا برداشته شود
      // authState.loading = false; // نیاز به این مورد بررسی شود
    },
    signIn: (
      authState,
      action: {
        type: string;
        payload: { userData: { email: string }; token: string };
      }
    ) => {
      authState.userData = action.payload.userData;
      authState.token = action.payload.token;
    },
    signOut: authState => {
      authState.userData = {};
      authState.token = null;
    },
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
        storageServices.setItem('userIsSignedUp', 'true'); // آیا به این مورد نیازی هست؟
        toast.success(
          'You have been registered successfully to the app, you can now log in',
          {
            position: toast.POSITION.BOTTOM_RIGHT,
          }
        );
        has(params, 'afterSuccess') && params.afterSuccess();
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
        dispatch(
          authSlice.actions.signIn({
            userData: {
              email: params.data.email,
            },
            token: resData,
          })
        );
        storageServices.setItem('token', resData.token);
        storageServices.setItem('email', params.data.email);
        toast.success('You are logged in', {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        has(params, 'afterSuccess') && params.afterSuccess();
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

export const signOut: any = (params: any) => {
  return (dispatch: any) => {
    dispatch(authSlice.actions.signOut());
    storageServices.delItem('token');
    storageServices.delItem('email');
    has(params, 'afterDone') && params.afterDone();
  };
};

export const authActions = authSlice.actions;

export default authSlice.reducer;
