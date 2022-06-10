import { useSelector, useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import Form from '@/components/forms/form/Form';
import OverlayedSpinner from '@/components/basic/spinner/OverlayedSpinner';

import * as signUpConstants from '@/utils/constants/signUp.constants';
import * as authSlice from '@/store/authentication/auth';

function SignInPage() {
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
          navigate('/dashboard');
        },
        onEnd: () => {
          dispatch(authSlice.authActions.authReqEnd());
        },
      })
    );
  }

  return (
    <div className='sign-in-page p-5 h-100'>
      <div className='row justify-content-md-center'>
        <div className='col-5'>
          <h1 className='h4 mb-4 mx-auto' style={{ width: 'max-content' }}>
            Sign In in to the admin panel
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

export default SignInPage;
