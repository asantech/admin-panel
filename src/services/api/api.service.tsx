import axios from 'axios';

import apiConstants from '@/utils/constants/api.constants';

export const createAPICall = async (apiConfig: any) => {
  const { url, method, data, onStart, onSuccess, onErr, onEnd } = apiConfig;

  try {
    if (onStart) onStart();
    const res = await axios.request({
      baseURL: apiConstants.baseURL,
      url,
      method,
      data,
    });

    if (onSuccess) onSuccess();
    if (onEnd) onEnd();
    return res.data;
  } catch (err: any) {
    if (onErr) onErr(err);
    if (onEnd) onEnd();
    throw Error(err);
  }
};
