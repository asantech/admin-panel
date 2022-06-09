import { createSlice } from '@reduxjs/toolkit';

import * as apiActions from '@/store/api/api';
import apiConstants from '@/utils/constants/api.constants';

type SignUpData = {
  email: string;
  password: string;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userData: {},
    loading: false,
  },
  reducers: {
    authReqStart: userState => {
      userState.loading = true;
    },
    signUp: (
      userState,
      action: {
        type: string;
        payload: { userData: { id: number; token: string } };
      }
    ) => {
      userState.userData = action.payload;
      userState.loading = false;
    },
    authReqFailed: userState => {
      userState.loading = false;
    },
  },
});

export const signUp: any = (data: SignUpData) =>
  apiActions.apiCallBegan({
    url: apiConstants.urls.signUp,
    method: 'post',
    data,
    onStart: authSlice.actions.authReqStart.type,
    onSuccess: authSlice.actions.signUp.type,
    onErr: authSlice.actions.authReqFailed.type,
  });

export default authSlice.reducer;
