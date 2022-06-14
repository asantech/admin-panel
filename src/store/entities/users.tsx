import { createSlice } from '@reduxjs/toolkit';
import { has, isUndefined } from 'lodash';

import { toast } from 'react-toastify';

import * as usersConstants from '@/utils/constants/users.constants';
import * as userConstants from '@/utils/constants/user.constants';
import msgsConstants from '@/utils/constants/msgs.constants';

import * as apiServices from '@/services/api/api.service';

type InitialState = {
  users: any;
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

function showErrMsg(err: any, dispatch: any) {
  toast.error(err.message, {
    position: toast.POSITION.BOTTOM_RIGHT,
  });
  dispatch(usersSlice.actions.authReqEnd());
}

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
    addUser: (usersState, action) => {
      usersState.users.push(action.payload);
      usersState.total = usersState.users.length;
    },
    delUser: (usersState, action) => {
      usersState.users = usersState.users.filter((user: any) => {
        return action.payload.id !== user.id;
      });
      usersState.total = usersState.users.length;
    },
    editUser: (usersState, action) => {},
    authReqEnd: usersState => {
      usersState.loading = false;
    },
  },
});

export const getUsers: any = (params: any) => {
  return async (dispatch: any) => {
    dispatch(usersSlice.actions.authReqStart());
    await apiServices.createAPICall({
      ...usersConstants.baseAPIConfig,
      method: 'get',
      params: params && has(params, 'reqParams') ? params.reqParams : undefined,
      onSuccess: (resData: any) => {
        dispatch(usersSlice.actions.setUsers(resData));
        if (params && has(params, 'afterSuccess')) params.afterSuccess();
        dispatch(usersSlice.actions.authReqEnd());
      },
      onErr: (err: any) => showErrMsg(err, dispatch),
    });
  };
};

export const addUser: any = (params: any) => {
  return async (dispatch: any) => {
    dispatch(usersSlice.actions.authReqStart());
    await apiServices.createAPICall({
      ...userConstants.baseAPIConfig,
      method: 'post',
      params: params && params.reqParams,
      data: params.data,
      onSuccess: (resData: any) => {
        dispatch(usersSlice.actions.addUser({ ...resData, ...params.data }));
        if (params && has(params, 'afterSuccess')) params.afterSuccess();
        dispatch(usersSlice.actions.authReqEnd());
      },
      onErr: (err: any) => showErrMsg(err, dispatch),
    });
  };
};

export const delUser: any = (params: any) => {
  return async (dispatch: any, getState: any) => {
    dispatch(usersSlice.actions.authReqStart());

    const selectedUser = getState().users.users.find((userData: any) => {
      return userData.id === params.data.id;
    });

    if (isUndefined(selectedUser)) {
      showErrMsg(
        { message: msgsConstants.users.delUnexistingUserErrMsg },
        dispatch
      );
      return;
    }

    await apiServices.createAPICall({
      ...userConstants.baseAPIConfig,
      method: 'delete',
      params: params && params.reqParams,
      data: params.data,
      onSuccess: () => {
        dispatch(usersSlice.actions.delUser(params.data));
        if (params && has(params, 'afterSuccess')) params.afterSuccess();
        dispatch(usersSlice.actions.authReqEnd());
      },
      onErr: (err: any) => showErrMsg(err, dispatch),
    });
  };
};

export const editUser: any = (params: any) => {
  return async (dispatch: any) => {
    dispatch(usersSlice.actions.authReqStart());

    await apiServices.createAPICall({
      ...userConstants.baseAPIConfig,
      method: 'put',
      params: params && params.reqParams,
      data: params.data,
      onSuccess: (resData: any) => {
        dispatch(
          usersSlice.actions.editUser({ ...params.reqParams, ...params.data })
        );
        if (params && has(params, 'afterSuccess')) params.afterSuccess();
        dispatch(usersSlice.actions.authReqEnd());
      },
      onErr: (err: any) => showErrMsg(err, dispatch),
    });
  };
};

export const usersActions = usersSlice.actions;

export default usersSlice.reducer;
