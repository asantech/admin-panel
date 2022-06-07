export const items = Object.freeze([
  { kind: 'inputField', id: 'first-name', lbl: 'Firstname' },
  { kind: 'inputField', id: 'last-name', lbl: 'Lastname' },
  { kind: 'inputField', id: 'email', lbl: 'Email' },
  { kind: 'inputField', id: 'password', lbl: 'Password' },
  {
    kind: 'button',
    className: 'btn btn-primary',
    lbl: 'Sign Up',
    onClickHandler: () => console.log('sign up btn is clicked'),
  },
]);
