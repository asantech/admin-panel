import { createSlice } from '@reduxjs/toolkit';
import { has } from 'lodash';

import { toast } from 'react-toastify';

import * as resourcesConstants from '@/utils/constants/resources.constants';
import msgsConstants from '@/utils/constants/msgs.constants';

import * as apiServices from '@/services/API/API.service';

type InitialState = {
  resources: [];
  perPage: number;
  total: number;
  page: number;
  totalPages: number;
  loading: boolean;
};

const initialState: InitialState = {
  resources: [],
  perPage: 0,
  total: 0,
  page: 0,
  totalPages: 0,
  loading: false,
};

const resourcesSlice = createSlice({
  name: 'resources',
  initialState,
  reducers: {
    authReqStart: resourcesState => {
      resourcesState.loading = true;
    },
    setResources: (resourcesState, action) => {
      resourcesState.resources = action.payload.data;
      resourcesState.perPage = action.payload.per_page;
      resourcesState.total = action.payload.total;
      resourcesState.page = action.payload.page;
      resourcesState.totalPages = action.payload.total_pages;
    },
    authReqEnd: resourcesState => {
      resourcesState.loading = false;
    },
  },
});

export const getResources: any = (params: any) => {
  return async (dispatch: any) => {
    dispatch(resourcesSlice.actions.authReqStart());
    await apiServices.createAPICall({
      ...resourcesConstants.baseAPIConfig,
      params: params && has(params, 'reqParams') ? params.reqParams : undefined,
      onSuccess: (resData: any) => {
        dispatch(resourcesSlice.actions.setResources(resData));
        if (params && params.showSuccessToast !== false)
          toast.success(msgsConstants.resources.resourcesLoaded, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        if (params && has(params, 'afterSuccess')) params.afterSuccess();
        dispatch(resourcesSlice.actions.authReqEnd());
      },
      onErr: (err: any) =>
        apiServices.showErrMsg(err.message, () => {
          dispatch(resourcesSlice.actions.authReqEnd());
        }),
    });
  };
};

export const usersActions = resourcesSlice.actions;

export default resourcesSlice.reducer;
