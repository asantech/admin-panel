import axios from 'axios';

import * as apiActions from '@/store/api/api';
import apiConstants from '@/utils/constants/api.constants';

const api =
  ({ dispatch }: any) =>
  (next: any) =>
  async (action: any) => {
    if (action.type !== apiActions.apiCallBegan.type) return next(action);

    const { url, method, data, onStart, onSuccess, onErr } = action.payload;

    if (onStart) dispatch({ type: onStart });

    next(action);

    try {
      const res = await axios.request({
        baseURL: apiConstants.baseURL,
        url,
        method,
        data,
      });

      dispatch(apiActions.apiCallSuccess(res.data));

      if (onSuccess)
        dispatch({
          type: onSuccess,
          payload: res.data,
        });
    } catch (err: any) {
      dispatch(apiActions.apiCallFailed(err.message));
      if (onErr)
        dispatch({
          type: onErr,
          payload: err.message,
        });
    }
  };

export default api;
