import axios from 'axios';

import { toast } from 'react-toastify';

import apiConstants from '@/utils/constants/api.constants';
import msgsConstants from '@/utils/constants/msgs.constants';

axios.interceptors.response.use(undefined, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log(msgsConstants.errs.unexpectedErr, error);
    toast.error(msgsConstants.errs.unexpectedErrIsLogged);
  }

  return Promise.reject(error);
});

export const createAPICall = async (apiConfig: any) => {
  const { url, method, params, data, onStart, onSuccess, onErr, onEnd } =
    apiConfig;

  try {
    if (onStart) onStart();
    const res = await axios.request({
      baseURL: apiConstants.baseURL,
      url,
      method,
      params,
      data,
    });

    if (onSuccess) onSuccess(res.data);
    if (onEnd) onEnd();
  } catch (err: any) {
    if (onErr) onErr(err);
    if (onEnd) onEnd();
  }
};

export const showErrMsg = (errMsg: string | undefined, afterErr: any) => {
  toast.error(errMsg ?? '', {
    position: toast.POSITION.BOTTOM_RIGHT,
  });
  afterErr && afterErr();
};
