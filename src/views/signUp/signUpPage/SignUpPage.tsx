import { useSelector, useDispatch } from 'react-redux';

import { useNavigate, Link } from 'react-router-dom';

import Form from '@/components/forms/form/Form';
import OverlayedSpinner from '@/components/basic/spinner/OverlayedSpinner';

import Card from '@/components/cards/Card';

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
        afterSuccess: () => {
          resetForm();
          navigate('/sign-in');
        },
      })
    );
  }

  return (
    <div id='sign-up-page' className='sign-up-page p-5 h-100'>
      <Link
        to='/sign-in'
        className='position-absolute'
        style={{ top: '30px', right: '50px' }}
      >
        <i className='bi bi-person-circle fs-1 text-primary'></i>
      </Link>
      <div className='row justify-content-md-center'>
        <div className='col-5'>
          <h1 className='h4 mb-4 mx-auto' style={{ width: 'max-content' }}>
            Sign Up to your account
          </h1>
          <Card className='pt-4 px-3 pb-4 position-relative max-width-576px'>
            {showSpinner && <OverlayedSpinner />}
            <Form
              items={signUpConstants.items}
              onHandleSubmit={onHandleSubmitForm}
            />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
