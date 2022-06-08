import store from '@/store/index';
import * as authActions from '@/store/authentication/auth';

export const items = Object.freeze([
  {
    kind: 'inputField',
    id: 'email',
    inputCSSClasses: 'mb-2',
    lbl: 'Email',
    placeholder: 'Enter your email',
    paramKey: 'email',
    onChangeHandler: () => {},
  },
  {
    kind: 'inputField',
    id: 'password',
    inputType: 'password',
    inputCSSClasses: 'mb-4',
    lbl: 'Password',
    placeholder: 'Enter password',
    paramKey: 'password',
    onChangeHandler: () => {},
  },
  {
    kind: 'button',
    id: 'sign-up-btn',
    className: 'btn btn-primary',
    lbl: 'Sign Up',
    onClickHandler: () => {},
  },
]);
