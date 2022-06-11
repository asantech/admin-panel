import { createSlice } from '@reduxjs/toolkit';
import { has } from 'lodash';

import { toast } from 'react-toastify';

import * as usersConstants from '@/utils/constants/users.constants';

import * as apiServices from '@/services/api/api.service';

type InitialState = {
  users: [];
  total: number;
  page: number;
  totalPages: number;
  loading: boolean;
};

const initialState: InitialState = {
  users: [],
  total: 0,
  page: 0,
  totalPages: 0,
  loading: false,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    authReqStart: usersState => {
      usersState.loading = true;
    },
    setUsers: (usersState, action) => {
      usersState.users = action.payload.data;
      usersState.total = action.payload.total;
      usersState.page = action.payload.page;
      usersState.totalPages = action.payload.total_pages;
    },
    authReqEnd: usersState => {
      usersState.loading = false;
    },
  },
});

export const getUsers: any = (params: any) => {
  return async (dispatch: any) => {
    dispatch(usersSlice.actions.authReqStart());
    await apiServices.createAPICall({
      ...usersConstants.apiConfig,
      params: params && has(params, 'reqParams') ? params.reqParams : undefined,
      onSuccess: (resData: any) => {
        dispatch(usersSlice.actions.setUsers(resData));
        if (params && has(params, 'afterSuccess')) params.afterSuccess();
        dispatch(usersSlice.actions.authReqEnd());
      },
      onErr: (err: any) => {
        toast.success(err.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        dispatch(usersSlice.actions.authReqEnd());
      },
    });
  };
};

export const usersActions = usersSlice.actions;

export default usersSlice.reducer;
