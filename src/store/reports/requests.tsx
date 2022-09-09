import { createSlice } from '@reduxjs/toolkit';

interface Request {
  date: number;
  type: number;
}

interface InitialState {
  usersRequests: Request[];
  resourcesRequests: Request[];
}

const initialState: InitialState = {
  usersRequests: [],
  resourcesRequests: [],
};

const requestsReportSlice = createSlice({
  name: 'requestsReport',
  initialState,
  reducers: {
    addUsersRequest: (state, action) => {
      state.usersRequests.push(action.payload);
    },
    addResourcesRequest: (state, action) => {
      state.resourcesRequests.push(action.payload);
    },
  },
});

export const getRequestsCount = (requestType: string) => {
  return requestsReportSlice.getInitialState();
};
