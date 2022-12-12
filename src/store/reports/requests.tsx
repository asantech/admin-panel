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

export const addToRequestsList = (type: 'users' | 'resources', data: any) => {
  if (type === 'users') {
    requestsReportSlice.actions.addUsersRequest(data);
  } else if (type === 'resources') {
    requestsReportSlice.actions.addResourcesRequest(data);
  }
};

export default requestsReportSlice.reducer;
