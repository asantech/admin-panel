import { useSelector, useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import Form from '@/components/forms/form/Form';
import OverlayedSpinner from '@/components/basic/spinner/OverlayedSpinner';

import * as signUpConstants from '@/utils/constants/signUp.constants';
import * as authSlice from '@/store/authentication/auth';

import './SignUpPage.css';

function SignUpPage() {
  const showSpinner = useSelector((state: any) => state.auth.loading);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  function onHandleSubmitForm({ itemsVals, resetForm }: any) {
    dispatch(
      authSlice.signUp({
        data: itemsVals,
        onStart: () => {
          dispatch(authSlice.authActions.authReqStart());
        },
        onSuccess: () => {
          resetForm();
          navigate('/sign-in');
        },
        onEnd: () => {
          dispatch(authSlice.authActions.authReqEnd());
        },
      })
    );
  }

  return (
    <div className='sign-up-page p-5 h-100'>
      <div className='row justify-content-md-center'>
        <div className='col-5'>
          <h1 className='h4 mb-4 mx-auto' style={{ width: 'max-content' }}>
            Sign in to your account to continue
          </h1>
          <div className='card pt-4 px-3 pb-4' style={{ maxWidth: '576px' }}>
            {showSpinner && <OverlayedSpinner />}
            <Form
              items={signUpConstants.items}
              onHandleSubmit={onHandleSubmitForm}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
