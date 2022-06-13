import apiConstants from '@/utils/constants/api.constants';
import * as formConstants from '@/utils/constants/form.contants';

export const items = Object.freeze([
  formConstants.controls.email,
  formConstants.controls.password,
  {
    kind: 'button',
    id: 'sign-in-btn',
    className: 'btn-primary mt-3',
    children: 'Sign In',
    onClickHandler: () => {},
    disabled: false,
  },
]);

export const baseAPIConfig = {
  baseURL: apiConstants.baseURL,
  url: apiConstants.urls.signIn,
  method: 'post',
};
