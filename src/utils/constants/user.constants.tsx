import apiConstants from '@/utils/constants/api.constants';
import * as formConstants from '@/utils/constants/form.contants';

export const baseAPIConfig = Object.freeze({
  baseURL: apiConstants.baseURL,
  url: apiConstants.urls.users,
});

export const userFormControls = Object.freeze([
  formConstants.controls.firstname,
  formConstants.controls.lastname,
  formConstants.controls.job,
  formConstants.controls.email,
  formConstants.controls.imgURL,
  {
    kind: 'button',
    id: 'submit',
    className: 'btn-primary mt-3',
    children: 'Submit',
    onClickHandler: () => {},
    disabled: false,
  },
]);

export const dataConversionMap = Object.freeze({
  id: 'id',
  firstname: 'first_name',
  lastname: 'last_name',
  avatar: 'avatar',
  job: 'job',
  email: 'email',
});
