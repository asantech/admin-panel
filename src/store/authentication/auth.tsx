import { createAction, createReducer } from '@reduxjs/toolkit';

type SignUpPayload = {
  email: string;
  password: string;
};

export const signUp: any = createAction('SIGN_UP');

export default createReducer(
  {},
  {
    [signUp.type]: (
      state,
      action: { type: string; payload: SignUpPayload }
    ) => {
      state = action.payload;
    },
  }
);

// export default function reducer(
//   state: any = {},
//   action: { type: string; payload: SignUpPayload }
// ) {
//   if (action.type === signUp.type) {
//     return {
//       ...state,
//       ...action.payload,
//     };
//   }
//   return state;
// }
