import Joi from 'joi';

export const controls = Object.freeze({
  firstname: {
    kind: 'inputField',
    id: 'firstname',
    inputCSSClasses: 'mb-2',
    lbl: 'First Name',
    placeholder: 'Enter your first name',
    paramKey: 'firstname',
    onChangeHandler: () => {},
    onFocusHandler: () => {},
    validationHandler: Joi.string().required().min(2).label('First Name'),
  },
  lastname: {
    kind: 'inputField',
    id: 'lastname',
    inputCSSClasses: 'mb-2',
    lbl: 'Last Name',
    placeholder: 'Enter your last name',
    paramKey: 'lastname',
    onChangeHandler: () => {},
    onFocusHandler: () => {},
    validationHandler: Joi.string().required().min(2).label('Last Name'),
  },
  email: {
    kind: 'inputField',
    id: 'email',
    inputCSSClasses: 'mb-2',
    lbl: 'Email',
    placeholder: 'Enter your email',
    paramKey: 'email',
    onChangeHandler: () => {},
    onFocusHandler: () => {},
    validationHandler: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .min(5)
      .label('Email'),
  },
  job: {
    kind: 'inputField',
    id: 'job',
    inputCSSClasses: 'mb-2',
    lbl: 'job',
    placeholder: 'Enter your job',
    paramKey: 'job',
    onChangeHandler: () => {},
    onFocusHandler: () => {},
    validationHandler: Joi.string().required().min(5).label('Job'),
  },
  imgURL: {
    kind: 'inputField',
    id: 'avatar',
    inputCSSClasses: 'mb-2',
    lbl: 'img URL',
    placeholder: 'Enter your img URL',
    paramKey: 'avatar',
    onChangeHandler: () => {},
    onFocusHandler: () => {},
    validationHandler: Joi.string().required().min(10).label('Img URL'),
  },
  password: {
    kind: 'inputField',
    id: 'password',
    inputType: 'password',
    inputCSSClasses: 'mb-2',
    lbl: 'Password',
    placeholder: 'Enter password',
    paramKey: 'password',
    onChangeHandler: () => {},
    onFocusHandler: () => {},
    validationHandler: Joi.string().required().min(5).label('Password'),
  },
});