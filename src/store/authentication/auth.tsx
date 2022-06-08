const SIGN_UP = 'signUp';

type SignUpParams = {
  email: string;
  password: string;
};

export const signUp = ({ email, password }: SignUpParams) => ({
  type: SIGN_UP,
  payload: {
    email,
    password,
  },
});

export default function reducer(state: any = {}, action: any) {
  if (action.type === SIGN_UP)
    return {
      ...state,
      email: action.payload.email,
      password: action.payload.password,
    };
  return state;
}
