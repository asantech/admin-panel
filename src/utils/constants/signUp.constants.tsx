import apiConstants from 'utils/constants/api.constants';
import * as formConstants from 'utils/constants/form.contants';

export const items = Object.freeze([
  formConstants.controls.firstname,
  formConstants.controls.lastname,
  formConstants.controls.email,
  formConstants.controls.job,
  formConstants.controls.imgURL,
  formConstants.controls.password,
  {
    kind: 'button',
    id: 'sign-up-btn',
    className: 'btn-primary mt-3',
    children: 'Sign Up',
    onClickHandler: () => {},
    disabled: false,
  },
]);

export const baseAPIConfig = {
  baseURL: apiConstants.baseURL,
  url: apiConstants.urls.signUp,
  method: 'post',
};
