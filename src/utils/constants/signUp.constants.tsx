import Joi from 'joi';

export const items = Object.freeze([
  {
    kind: 'inputField',
    id: 'email',
    inputCSSClasses: 'mb-2',
    lbl: 'Email',
    placeholder: 'Enter your email',
    paramKey: 'email',
    onChangeHandler: () => {},
    validationHandler: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
  },
  {
    kind: 'inputField',
    id: 'password',
    inputType: 'password',
    inputCSSClasses: 'mb-2',
    lbl: 'Password',
    placeholder: 'Enter password',
    paramKey: 'password',
    onChangeHandler: () => {},
    validationHandler: Joi.string().required().min(5),
  },
  {
    kind: 'button',
    id: 'sign-up-btn',
    className: 'btn btn-primary mt-3',
    lbl: 'Sign Up',
    onClickHandler: () => {},
  },
]);
